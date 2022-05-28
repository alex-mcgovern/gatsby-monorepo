import axios, { AxiosResponse } from "axios";
import url from "url";

const POKEMON_SPECIES_ENDPOINT = `https://pokeapi.co/api/v2/pokemon-species/`;

interface IFetchAllPokemonList {
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

export default async function fetchAllPokemonList({
  numberOfPokemonToSource,
}: IFetchAllPokemonList) {
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
    .catch(() => {
      console.error(
        `Unable to get pokemon list from endpoint ${POKEMON_SPECIES_ENDPOINT}, and params ${params.toString()}`
      );
    });
}
