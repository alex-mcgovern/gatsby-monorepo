function mergePokemonDataByLanguage({
  pokedexID,
  pokemonNamesByLanguage,
  targetLanguageList,
  pokemonGeneraByLanguage,
  pokemonFlavorTextByLanguage,
}) {
  return targetLanguageList.map((targetLanguage) => {
    const languageNames = new Intl.DisplayNames([targetLanguage], {
      type: "language",
    });
    const prettyLanguageName = languageNames.of(targetLanguage);

    return {
      pokedexID,
      language: {
        languageISO: targetLanguage,
        languagePretty: prettyLanguageName,
      },
      languageISO: targetLanguage,
      languagePretty: prettyLanguageName,
      name: pokemonNamesByLanguage[targetLanguage],
      genus: pokemonGeneraByLanguage[targetLanguage],
      flavorText: pokemonFlavorTextByLanguage[targetLanguage],
      artworkUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedexID}.png`,
    };
  });
}

module.exports = {
  mergePokemonDataByLanguage,
};
