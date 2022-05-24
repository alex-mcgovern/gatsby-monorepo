const PLUGIN_NAME = "[GATSBY-SOURCE-POKEAPI]";

const FALLBACK_PLUGIN_OPTIONS = {
  numberOfPokemonToSource: 151,
  targetLanguageList: ["en", "fr", "de", "es"],
  targetGameVersion: "x",
  pokemonPerPage: 12,
};

module.exports = {
  PLUGIN_NAME,
  FALLBACK_PLUGIN_OPTIONS,
};
