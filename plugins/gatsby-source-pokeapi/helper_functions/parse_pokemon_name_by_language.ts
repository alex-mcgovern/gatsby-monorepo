interface IParsePokemonNameByLanguage {
  names: {
    language: {
      name: string;
    };
    name: string;
  }[];
  targetLanguageList: string[];
}

interface IPokemonNamesByLanguage {
  [key: string]: string;
}

export default function parsePokemonNameByLanguage({
  names,
  targetLanguageList,
}: IParsePokemonNameByLanguage) {
  const pokemonNamesByLanguage: IPokemonNamesByLanguage = {};

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
