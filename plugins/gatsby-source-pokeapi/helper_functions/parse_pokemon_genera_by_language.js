function parsePokemonGeneraByLanguage({
  pokedexID,
  genera,
  targetLanguageList,
}) {
  // empty object to hold result
  const pokemonGeneraByLanguage = {};

  // iterate over genera in response and pull out
  // only desired language versions
  genera.forEach((currentGenusObject) => {
    const {
      language: { name: currentGenusLanguage },
      genus: currentGenus,
    } = currentGenusObject;

    // match entries by game version & language declared in plugin options
    if (targetLanguageList.includes(currentGenusLanguage)) {
      pokemonGeneraByLanguage[currentGenusLanguage] = currentGenus;
    }
  });

  return pokemonGeneraByLanguage;
}

module.exports = {
  parsePokemonGeneraByLanguage,
};
