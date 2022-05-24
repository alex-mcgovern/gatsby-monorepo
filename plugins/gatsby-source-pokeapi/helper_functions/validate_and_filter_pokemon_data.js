const { PokeAPIFetchError } = require("../errors/poke_api_fetch_error");

const EXPECTED_KEYS = [
  "name",
  "genus",
  "flavorText",
  "languageISO",
  "languagePretty",
  "pokedexID",
];

function validateAndFilterPokemonData({
  pokedexID,
  mergedPokemonData,
  targetLanguageList,
}) {
  targetLanguageList.forEach((targetLanguage) => {
    if (
      mergedPokemonData.find((languageObject) => {
        return languageObject.languageISO === [targetLanguage];
      }) === false
    ) {
      throw new PokeAPIFetchError(
        `Missing targetLanguage {${targetLanguage}} for pokedex ID {${pokedexID}}`
      );
    }
  });

  return mergedPokemonData.map((currentPokemon) => {
    EXPECTED_KEYS.forEach((expectedKey) => {
      if (!currentPokemon[expectedKey]) {
        throw new PokeAPIFetchError(
          `Missing key {${expectedKey}} for pokedex ID {${pokedexID}}`
        );
      }
    });
    return currentPokemon;
  });
}

module.exports = {
  validateAndFilterPokemonData,
};
