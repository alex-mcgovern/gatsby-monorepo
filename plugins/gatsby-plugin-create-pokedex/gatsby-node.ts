import type { GatsbyNode, PluginOptions } from "gatsby";
import path from "path";
import { createUrlPathFromArray } from "../../utils/create_url_path_from_array";
import { FALLBACK_PLUGIN_OPTIONS } from "../gatsby-source-pokeapi/constants";

interface IPluginOptions extends PluginOptions {
  itemsPerPage: number;
  targetLanguageList: string[];
  enableDebugLogging?: boolean;
}

interface AllPokemonQueryResponse {
  errors?: any;
  data?: {
    allPokemonList: {
      nodes: {
        pokedexID: number;
        languageISO: string;
      }[];
      distinct: number[];
    };
  };
}

export const createPages: GatsbyNode["createPages"] = async (
  { actions, graphql },
  { targetLanguageList, itemsPerPage, enableDebugLogging }: IPluginOptions
) => {
  const allPokemonQueryResponse: AllPokemonQueryResponse = await graphql(`
    {
      allPokemonList: allPokemon {
        nodes {
          pokedexID
          languageISO
        }
        distinct(field: pokedexID)
      }
    }
  `);

  // Just some optional debug logging
  if (enableDebugLogging)
    console.info(
      "allPokemonQueryResponse",
      JSON.stringify(allPokemonQueryResponse, null, 2)
    );

  if (allPokemonQueryResponse.data) {
    const { nodes: allPokemon, distinct } =
      allPokemonQueryResponse?.data?.allPokemonList;

    const pokemonListLength = distinct.length;

    // Just some optional debug logging
    if (enableDebugLogging)
      console.info("pokemonListLength", pokemonListLength);

    /* ——————————————————————————————————————————————————————————————————————————————
      //      CREATE POKEDEX ENTRIES                                                  
      // —————————————————————————————————————————————————————————————————————————————— */
    allPokemon.map(async ({ pokedexID, languageISO }) => {
      const pagePath = createUrlPathFromArray([
        languageISO,
        "pokemon",
        pokedexID.toString(),
      ]);

      const pageContext = {
        pokedexID,
        languageISO,
        artworkId: `Artwork_${pokedexID}`,
      };

      return actions.createPage({
        component: path.resolve(
          `src/templates/template_pokemon_page/template_pokemon_page.tsx`
        ),
        context: pageContext,
        path: pagePath,
      });
    });

    /* ——————————————————————————————————————————————————————————————————————————————
    //      CREATE POKEDEX LIST PAGINATION                                                  
    // —————————————————————————————————————————————————————————————————————————————— */
    targetLanguageList.map(async (languageISO) => {
      const languageNames = new Intl.DisplayNames([languageISO], {
        type: "language",
      });
      const languagePretty = languageNames.of(languageISO);

      const pageCount = Math.ceil(pokemonListLength / itemsPerPage);

      Array(pageCount)
        .fill(null)
        .map(async (_, index) => {
          const itemsToSkip = itemsPerPage * index;
          const currentPage = index + 1;

          const pagePath = createUrlPathFromArray([
            languageISO,
            "pokedex",
            currentPage.toString(),
          ]);

          const pageContext = {
            languageISO,
            languagePretty,
            itemsPerPage,
            itemsToSkip,
            currentPage,
            pageCount,
          };

          return actions.createPage({
            component: path.resolve(
              `src/templates/template_pokemon_list_page/template_pokemon_list_page.tsx`
            ),
            context: pageContext,
            path: pagePath,
          });
        });
    });
  }
};
