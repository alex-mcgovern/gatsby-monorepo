import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";

interface IGetPokedexSearchIndex {
  allPokemon: {
    pokedexID: string;
    name: string;
  }[];
  languageISO: string;
}

export default function getPokedexSearchIndex({
  allPokemon,
  languageISO,
}: IGetPokedexSearchIndex) {
  return allPokemon.map(({ pokedexID, name }) => {
    const link = createUrlPathFromArray([languageISO, "pokemon", pokedexID]);
    return { value: name, link };
  });
}
