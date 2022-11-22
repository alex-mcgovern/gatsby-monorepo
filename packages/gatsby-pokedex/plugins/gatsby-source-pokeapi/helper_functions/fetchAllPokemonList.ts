import type { AxiosResponse } from "axios";
import axios from "axios";
import url from "url";

const POKEMON_SPECIES_ENDPOINT = `https://pokeapi.co/api/v2/pokemon-species/`;

interface FetchAllPokemonListArgs {
  numberOfPokemonToSource: number;
}
interface IFetchAllPokemonAxiosResponse extends AxiosResponse {
  data: {
    results: {
      name: string;
      url: string;
      [key: string]: any;
    }[];
  };
}

export async function fetchAllPokemonList({
  numberOfPokemonToSource,
}: FetchAllPokemonListArgs) {
  // uri encode request params
  // https://axios-http.com/docs/urlencoded
  const params = new url.URLSearchParams({
    limit: numberOfPokemonToSource.toString(),
  });

  return axios
    .get(POKEMON_SPECIES_ENDPOINT, { params })
    .then((response: IFetchAllPokemonAxiosResponse) => {
      return response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
}
