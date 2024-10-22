import type { AxiosResponse } from "axios";
import axios from "axios";
import type { IDetailedPokeAPIResponsePokemonSingle } from "../interfaces";

interface IFetchAllPokemonSpeciesData {
  basicPokeAPIPokedexList: {
    name: string;
    url: string;
    [key: string]: any;
  }[];
}

export async function fetchDetailedPokeAPIPokedexList({
  basicPokeAPIPokedexList,
}: IFetchAllPokemonSpeciesData): Promise<
  Promise<void | IDetailedPokeAPIResponsePokemonSingle[]>
> {
  return Promise.all(
    basicPokeAPIPokedexList.map(
      async ({ name, url }): Promise<IDetailedPokeAPIResponsePokemonSingle> => {
        return axios
          .get(url)
          .then((response: AxiosResponse) => {
            return response.data;
          })
          .catch(() => {
            console.error(`Unable to get data for ${name}`);
          });
      }
    )
  ).then((result) => {
    return result;
  });
}
