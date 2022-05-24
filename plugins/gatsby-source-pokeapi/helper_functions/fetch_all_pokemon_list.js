const url = require("url");
const axios = require("axios");
const { PokeAPIFetchError } = require("../errors/poke_api_fetch_error");

const POKEMON_SPECIES_ENDPOINT = `https://pokeapi.co/api/v2/pokemon-species/`;

async function fetchAllPokemonList({ numberOfPokemonToSource }) {
  // uri encode request params
  // https://axios-http.com/docs/urlencoded
  const params = new url.URLSearchParams({
    limit: numberOfPokemonToSource,
  });

  return axios
    .get(POKEMON_SPECIES_ENDPOINT, { params })
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      throw new PokeAPIFetchError(
        `Unable to get pokemon list from endpoint ${POKEMON_SPECIES_ENDPOINT}, and params ${params.toString()}`,
        error
      );
    });
}

module.exports = {
  fetchAllPokemonList,
};
