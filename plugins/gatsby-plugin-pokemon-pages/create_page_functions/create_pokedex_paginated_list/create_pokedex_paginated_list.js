const {
  createUrlPathFromArray,
} = require("../../../../utils/create_url_path_from_array");

async function createPokedexPaginatedList({
  pokemonListLength,
  pokemonPerPage,
  targetLanguageList,
  actions,
}) {
  console.log({
    pokemonListLength,
    pokemonPerPage,
    targetLanguageList,
    actions,
  });
  targetLanguageList.forEach((languageISO) => {
    const languageNames = new Intl.DisplayNames([languageISO], {
      type: "language",
    });
    const languagePretty = languageNames.of(languageISO);

    const pageCount = Math.ceil(pokemonListLength / pokemonPerPage);

    Array(pageCount)
      .fill()
      .map(async (_, index) => {
        const isFirstPage = index === 0;
        const pokemonToSkip = pokemonPerPage * index;
        const currentPage = index + 1;

        const firstPagePath = createUrlPathFromArray([languageISO, "pokedex"]);
        const nthPagePath = createUrlPathFromArray([
          languageISO,
          "pokedex",
          currentPage,
        ]);

        const pagePath = isFirstPage ? firstPagePath : nthPagePath;

        const pageContext = {
          languageISO,
          languagePretty,
          pokemonPerPage,
          pokemonToSkip,
          currentPage,
          pageCount,
        };

        return actions.createPage({
          component: require.resolve(
            "../../../../src/templates/template_pokemon_list_page/template_pokemon_list_page.jsx"
          ),
          context: pageContext,
          path: pagePath,
        });
      });
  });
}

module.exports = {
  createPokedexPaginatedList,
};
