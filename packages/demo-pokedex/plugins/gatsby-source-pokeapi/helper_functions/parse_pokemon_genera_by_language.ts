interface IParsePokemonGeneraByLanguage {
  genera: {
    language: {
      name: string;
    };
    genus: string;
  }[];
  targetLanguageList: string[];
}

interface IPokemonGeneraByLanguage {
  [key: string]: string;
}

export function parsePokemonGeneraByLanguage({
  genera,
  targetLanguageList,
}: IParsePokemonGeneraByLanguage) {
  // empty object to hold result
  const pokemonGeneraByLanguage: IPokemonGeneraByLanguage = {};

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
