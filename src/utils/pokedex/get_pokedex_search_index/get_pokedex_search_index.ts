import { createUrlPathFromArray } from "../../create_url_from_path_array/create_url_path_from_array";

interface GetPokedexDropdownItemsArgs {
  allPokemon: {
    pokedexID: string;
    name: string;
  }[];
  languageISO: string;
}

export default function getPokedexDropdownItems({
  allPokemon,
  languageISO,
}: GetPokedexDropdownItemsArgs) {
  return allPokemon.map(({ pokedexID, name }) => {
    const link = createUrlPathFromArray([languageISO, "pokemon", pokedexID]);
    return { label: name, value: name, link };
  });
}
