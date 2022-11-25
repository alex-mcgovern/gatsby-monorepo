import type { GatsbyNode, PluginOptions } from "gatsby";
import path from "path";

const SHARED_BASE_PATH = ["projects", "multilingual-pokedex"];

interface CreatePokedexPagesPluginOptions extends PluginOptions {
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
  {
    targetLanguageList,
    itemsPerPage,
    enableDebugLogging,
  }: CreatePokedexPagesPluginOptions
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
    const { distinct } = allPokemonQueryResponse?.data?.allPokemonList || {};

    const pokemonListLength = distinct.length;

    // Just some optional debug logging
    if (enableDebugLogging)
      console.info("pokemonListLength", pokemonListLength);

    /** -----------------------------------------------------------------------------
     * CREATE POKEDEX LIST PAGINATION
     * ------------------------------------------------------------------------------- */
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
          const isFirstPage = index === 0;
          const isEnglish = languageISO === "en";

          /** ---------------------------------------------—
           * CREATE PAGE PATH
           * ----------------------------------------------- */

          const pagePathArray = [...SHARED_BASE_PATH];

          if (!isEnglish) {
            pagePathArray.push(languageISO);
          }
          if (!isFirstPage) {
            pagePathArray.push(currentPage.toString());
          }
          const pagePath = path.join(...pagePathArray);

          /** ---------------------------------------------
           * CREATE PAGE
           * ----------------------------------------------- */

          // Variables passed to page for use in frontend and page queries
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
              `src/templates/TemplatePokemonListPage.tsx`
            ),
            context: pageContext,
            path: pagePath,
          });
        });
    });
  }
};
