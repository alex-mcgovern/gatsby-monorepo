function parsePokemonNameByLanguage({ names, targetLanguageList }) {
  const pokemonNamesByLanguage = {};

  // iterate over names in response and pull out
  // only desired language versions
  names.forEach((currentNameObject) => {
    const {
      language: { name: currentNameLanguage },
      name: currentName,
    } = currentNameObject;

    // match entries by languages declared in plugin options
    if (targetLanguageList.includes(currentNameLanguage)) {
      pokemonNamesByLanguage[currentNameLanguage] = currentName;
    }
  });

  return pokemonNamesByLanguage;
}

module.exports = {
  parsePokemonNameByLanguage,
};
