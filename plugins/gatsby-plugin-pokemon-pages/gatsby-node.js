const {
  FALLBACK_PLUGIN_OPTIONS,
} = require("../gatsby-source-pokeapi/constants");
const {
  PokeAPIFetchError,
} = require("../gatsby-source-pokeapi/errors/poke_api_fetch_error");
const {
  createPokedexEntry,
} = require("./create_page_functions/create_pokedex_entry/create_pokedex_entry");
const {
  createPokedexPaginatedList,
} = require("./create_page_functions/create_pokedex_paginated_list/create_pokedex_paginated_list");

exports.createPages = async (
  { actions, graphql },
  { options: { targetLanguageList, pokemonPerPage } = FALLBACK_PLUGIN_OPTIONS }
) => {
  const allPokemonQueryResponse = await graphql(`
    {
      allPokemonList: allPokemon {
        nodes {
          pokedexID
          languageISO
        }
        distinct(field: pokedexID)
      }
    }
  `);

  if (allPokemonQueryResponse.errors) {
    throw new PokeAPIFetchError(
      "Broken graphql query",
      allPokemonQueryResponse.errors
    );
  }

  const { nodes: allPokemon, distinct } =
    allPokemonQueryResponse?.data?.allPokemonList;

  const pokemonListLength = distinct.length;

  return Promise.all(
    allPokemon.map(async ({ pokedexID, languageISO, languagePretty }) => {
      return createPokedexEntry({
        actions,
        languageISO,
        languagePretty,
        pokedexID,
      });
    }),
    createPokedexPaginatedList({
      targetLanguageList,
      actions,
      pokemonListLength,
      pokemonPerPage,
    })
  );
};
