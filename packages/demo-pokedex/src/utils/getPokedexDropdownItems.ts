import { createPathFromSegmentArray } from "@alexmcgovern/utils";

interface GetPokedexDropdownItemsArgs {
  allPokemon: {
    pokedexID: string;
    name: string;
  }[];
  languageISO: string;
}

export function getPokedexDropdownItems({
  allPokemon,
  languageISO,
}: GetPokedexDropdownItemsArgs) {
  return allPokemon.map(({ pokedexID, name }) => {
    const link = createPathFromSegmentArray([
      languageISO,
      "pokemon",
      pokedexID,
    ]);
    return { label: name, value: name, link };
  });
}
