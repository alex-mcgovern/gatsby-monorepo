const {
  parsePokemonFlavorTextByLanguage,
} = require("./parse_pokemon_flavor_text_by_language");
const {
  parsePokemonGeneraByLanguage,
} = require("./parse_pokemon_genera_by_language");
const {
  parsePokemonNameByLanguage,
} = require("./parse_pokemon_name_by_language");
const {
  mergePokemonDataByLanguage,
} = require("./merge_pokemon_data_by_language");
const {
  validateAndFilterPokemonData,
} = require("./validate_and_filter_pokemon_data");

function transformAllPokemonData({
  allPokemonSpeciesData,
  targetLanguageList,
  targetGameVersion,
}) {
  const allPokemonList = [];

  allPokemonSpeciesData.forEach((currentPokemonSpecies) => {
    const {
      flavor_text_entries: flavorTextEntries,
      names,
      genera,
      id: pokedexID,
    } = currentPokemonSpecies;

    // Get pokemon name per language
    // e.g. Bulbasaur = "Bulbizarre" in french
    const pokemonNamesByLanguage = parsePokemonNameByLanguage({
      pokedexID,
      names,
      targetLanguageList,
    });

    // Get pokemon "genus" per language
    // e.g. Bulbasaur = "Seed pokemon", etc.
    const pokemonGeneraByLanguage = parsePokemonGeneraByLanguage({
      pokedexID,
      genera,
      targetLanguageList,
    });

    // Get pokemon flavor text per language, e.g. for Bulbasaur in english:
    // "It can go for days without eating a single morsel.
    // In the bulb on its back, it stores energy."
    const pokemonFlavorTextByLanguage = parsePokemonFlavorTextByLanguage({
      pokedexID,
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

    allPokemonList.push(...filteredValidPokemonData);
  });

  return allPokemonList;
}

module.exports = {
  transformAllPokemonData,
};
