const {
  fetchAllPokemonList,
} = require("./helper_functions/fetch_all_pokemon_list");
const {
  fetchAllPokemonSpeciesData,
} = require("./helper_functions/fetch_all_pokemon_species_data");
const {
  transformAllPokemonData,
} = require("./helper_functions/transform_all_pokemon_data");

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { PLUGIN_NAME, FALLBACK_PLUGIN_OPTIONS } = require("./constants");

exports.onPreInit = () => {
  console.info(`${PLUGIN_NAME} plugin initializing`);
};

exports.sourceNodes = async (
  // desctructure Gatsby API options
  { actions: { createNode }, createContentDigest, createNodeId },
  // destructure plugin options with fallback
  {
    options: {
      numberOfPokemonToSource,
      targetLanguageList,
      targetGameVersion,
    } = FALLBACK_PLUGIN_OPTIONS,
  }
) => {
  // fetch initial list of pokemon, with URLs to full species data
  // (await async fetch function)
  const pokemonList = await fetchAllPokemonList({ numberOfPokemonToSource });

  // map over `pokemonList` and fetch species data for each pokemon
  // (await async fetch functions)
  const allPokemonSpeciesData = await fetchAllPokemonSpeciesData({
    pokemonList,
  });

  // pick out only the keys we need for our graphql datalayer
  const allPokemonTransformedData = transformAllPokemonData({
    allPokemonSpeciesData,
    targetLanguageList,
    targetGameVersion,
  });

  return allPokemonTransformedData.map(async (pokemonData) => {
    const nodeId = createNodeId(
      `${pokemonData.pokedexID}-${pokemonData.languageISO}`
    );

    createNode({
      ...pokemonData,
      id: nodeId,
      internal: {
        type: `pokemon`,
        content: JSON.stringify(pokemonData),
        contentDigest: createContentDigest(pokemonData),
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type pokemon implements Node {
      artwork: File @link(from: "fields.artwork")
    }
  `);
};

exports.onCreateNode = async ({
  actions: { createNode, createNodeField },
  createNodeId,
  node,
  getCache,
}) => {
  if (node.internal.type === "pokemon" && node.artworkUrl) {
    const artworkNode = await createRemoteFileNode({
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
