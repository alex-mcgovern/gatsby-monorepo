import { createUrlPathFromArray } from "../../../../utils/create_url_from_path_array/create_url_path_from_array";

interface IGetPokedexDropdownItems {
  allPokemon: {
    pokedexID: string;
    name: string;
  }[];
  languageISO: string;
}

export default function getPokedexDropdownItems({
  allPokemon,
  languageISO,
}: IGetPokedexDropdownItems) {
  return allPokemon.map(({ pokedexID, name }) => {
    const link = createUrlPathFromArray([languageISO, "pokemon", pokedexID]);
    return { label: name, value: name, link };
  });
}
