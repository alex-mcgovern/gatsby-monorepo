const PLUGIN_NAME = "[gatsby-source-pokeapi]";

const FALLBACK_PLUGIN_OPTIONS = {
  numberOfPokemonToSource: 151,
  targetLanguageList: ["en", "fr", "de", "es"],
  targetGameVersion: "x",
  itemsPerPage: 12,
};

module.exports = {
  PLUGIN_NAME,
  FALLBACK_PLUGIN_OPTIONS,
};
