import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";

export default function getPokedexSearchIndex({ allPokemon, languageISO }) {
  return allPokemon.map(({ pokedexID, name }) => {
    const link = createUrlPathFromArray([languageISO, "pokedex", pokedexID]);
    return { value: name, link };
  });
}
