import type { IMergedPokemon } from "../interfaces";

interface IValidateAndFilterPokemonData {
  pokedexID: number;
  mergedPokemonData: IMergedPokemon[];
  targetLanguageList: string[];
}

// Allow mapping through object by key to validate required fields are present
// ToDo: Improve typing for pokedex fields validation
interface ICurrentPokemon extends IMergedPokemon {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const EXPECTED_KEYS: string[] = [
  "name",
  "genus",
  "flavorText",
  "languageISO",
  "languagePretty",
  "pokedexID",
];

export function validateAndFilterPokemonData({
  pokedexID,
  mergedPokemonData,
  targetLanguageList,
}: IValidateAndFilterPokemonData): IMergedPokemon[] {
  targetLanguageList.forEach((targetLanguage) => {
    if (
      !mergedPokemonData.find((pokemon) => {
        return pokemon.languageISO === targetLanguage;
      })
    ) {
      console.error(
        `Missing targetLanguage {${targetLanguage}} for pokedex ID {${pokedexID}}`
      );
    }
  });

  return mergedPokemonData.map((pokemon: ICurrentPokemon) => {
    EXPECTED_KEYS.forEach((expectedKey) => {
      if (!pokemon[expectedKey]) {
        console.error(
          `Missing key {${expectedKey}} for pokedex ID {${pokedexID}}`
        );
      }
    });
    return pokemon;
  });
}
