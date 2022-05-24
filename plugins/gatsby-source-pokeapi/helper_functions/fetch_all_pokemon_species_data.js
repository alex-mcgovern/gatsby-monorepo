const axios = require("axios");
const { PokeAPIFetchError } = require("../errors/poke_api_fetch_error");

async function fetchAllPokemonSpeciesData({ pokemonList }) {
  const allPokemonSpeciesData = await Promise.all(
    pokemonList.map(async ({ name, url }) => {
      return axios
        .get(url)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          throw new PokeAPIFetchError(`Unable to get data for ${name}`, error);
        });
    })
  );

  return allPokemonSpeciesData;
}

module.exports = {
  fetchAllPokemonSpeciesData,
};
