import type { IMergedPokemon } from "../interfaces";

interface IMergePokemonDataByLanguage {
  pokedexID: number;
  targetLanguageList: string[];
  pokemonNamesByLanguage: {
    [key: string]: string;
  };
  pokemonGeneraByLanguage: {
    [key: string]: string;
  };
  pokemonFlavorTextByLanguage: {
    [key: string]: string;
  };
}

export function mergePokemonDataByLanguage({
  pokedexID,
  pokemonNamesByLanguage,
  targetLanguageList,
  pokemonGeneraByLanguage,
  pokemonFlavorTextByLanguage,
}: IMergePokemonDataByLanguage): IMergedPokemon[] {
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
