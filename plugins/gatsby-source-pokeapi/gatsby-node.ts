import type { GatsbyNode, PluginOptions } from "gatsby";
import { createRemoteFileNode } from "gatsby-source-filesystem";
import { FALLBACK_PLUGIN_OPTIONS, PLUGIN_NAME } from "./constants";
import fetchAllPokemonList from "./helper_functions/fetch_all_pokemon_list";
import fetchDetailedPokeAPIPokedexList from "./helper_functions/fetch_all_pokemon_species_data";
import mergePokemonDataByLanguage from "./helper_functions/merge_pokemon_data_by_language";
import parsePokemonFlavorTextByLanguage from "./helper_functions/parse_pokemon_flavor_text_by_language";
import parsePokemonGeneraByLanguage from "./helper_functions/parse_pokemon_genera_by_language";
import parsePokemonNameByLanguage from "./helper_functions/parse_pokemon_name_by_language";
import validateAndFilterPokemonData from "./helper_functions/validate_and_filter_pokemon_data";

interface SourcePokeApiPluginOptions extends PluginOptions {
  options: {
    numberOfPokemonToSource: number;
    targetLanguageList: string[];
    targetGameVersion: string;
    enableDebugLogging: boolean;
  };
}

export const onPreInit: GatsbyNode["onPreInit"] = () => {
  console.info(`${PLUGIN_NAME} plugin initializing`);
};

export const sourceNodes: GatsbyNode["sourceNodes"] = async (
  // Gatsby node APIs
  { actions: { createNode }, createContentDigest, createNodeId },
  // Plugin options configured in src/gatsby-config.ts
  {
    options: {
      numberOfPokemonToSource,
      targetLanguageList,
      targetGameVersion,
      enableDebugLogging,
    } = FALLBACK_PLUGIN_OPTIONS,
  }: SourcePokeApiPluginOptions
) => {
  /* ——————————————————————————————————————————————————————————————————————————————
  //      PokeAPI NETWORK REQUESTS                                               
  // —————————————————————————————————————————————————————————————————————————————— */
  // Get a initial list of pokemon with name & URL to detailed pokedex info
  // Use this endpoint: https://pokeapi.co/api/v2/pokemon-species/
  const basicPokeAPIPokedexList = await fetchAllPokemonList({
    numberOfPokemonToSource,
  });
  if (enableDebugLogging) console.debug(PLUGIN_NAME, basicPokeAPIPokedexList);

  if (basicPokeAPIPokedexList) {
    // Get a more comprehensive list of pokemon with the
    // fields we want to display, and artwork URL.
    const detailedPokeAPIPokedexList = await fetchDetailedPokeAPIPokedexList({
      basicPokeAPIPokedexList,
    });
    if (enableDebugLogging)
      console.debug(PLUGIN_NAME, detailedPokeAPIPokedexList);

    if (detailedPokeAPIPokedexList) {
      /* —————————————————————————————————————————————————————————————————————————
      //      REDUCE AND TRANSFORM RESPONSE FOR GATSBY NODE
      // ————————————————————————————————————————————————————————————————————————— */
      // Pick out only the keys we need for our graphql data-layer:
      // ID (Pokedex ID), name, genus, flavor text, language and artwork URL.

      detailedPokeAPIPokedexList.forEach((currentPokemonSpecies) => {
        const {
          flavor_text_entries: flavorTextEntries,
          names,
          genera,
          id: pokedexID,
        } = currentPokemonSpecies;

        // Get pokemon name per language
        // e.g. Bulbasaur = "Bulbizarre" in french
        const pokemonNamesByLanguage = parsePokemonNameByLanguage({
          names,
          targetLanguageList,
        });

        // Get pokemon "genus" per language
        // e.g. Bulbasaur = "Seed pokemon", etc.
        const pokemonGeneraByLanguage = parsePokemonGeneraByLanguage({
          genera,
          targetLanguageList,
        });

        // Get pokemon flavor text per language, e.g. for Bulbasaur in english:
        // "It can go for days without eating a single morsel.
        // In the bulb on its back, it stores energy."
        const pokemonFlavorTextByLanguage = parsePokemonFlavorTextByLanguage({
          flavorTextEntries,
          targetLanguageList,
          targetGameVersion,
        });

        // Tidy up data structure, group all values by language per pokemon
        const mergedPokemonData = mergePokemonDataByLanguage({
          pokedexID,
          targetLanguageList,
          pokemonNamesByLanguage,
          pokemonGeneraByLanguage,
          pokemonFlavorTextByLanguage,
        });

        // Ensure all required fields present
        const filteredValidPokemonData = validateAndFilterPokemonData({
          pokedexID,
          mergedPokemonData,
          targetLanguageList,
        });

        return filteredValidPokemonData.forEach((pokemonData) => {
          const nodeId = createNodeId(
            `${pokemonData.pokedexID}-${pokemonData.languageISO}`
          );

          return createNode({
            ...pokemonData,
            id: nodeId,
            internal: {
              type: `pokemon`,
              contentDigest: createContentDigest(pokemonData),
            },
          });
        });
      });
    }
  }
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
  type pokemon implements Node {
    artwork: File @link(from: "fields.artwork")
  }
  `);
  };

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  actions: { createNode, createNodeField },
  createNodeId,
  node,
  getCache,
}) => {
  if (node.internal.type === "pokemon" && node.artworkUrl) {
    const artworkNode = await createRemoteFileNode({
      // @ts-ignore
      // ToDo: Fix type issue in  gatsby-source-poke-api
      url: node.artworkUrl,
      parentNodeId: node.id,
      getCache,
      createNode,
      createNodeId,
    });

    if (artworkNode) {
      createNodeField({ node, name: "artwork", value: artworkNode.id });
    }
  }
};
