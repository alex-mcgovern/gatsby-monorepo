const {
  createUrlPathFromArray,
} = require("../../../../utils/create_url_path_from_array");

async function createPokedexPaginatedList({
  pokemonListLength,
  itemsPerPage,
  targetLanguageList,
  actions,
}) {
  targetLanguageList.forEach((languageISO) => {
    const languageNames = new Intl.DisplayNames([languageISO], {
      type: "language",
    });
    const languagePretty = languageNames.of(languageISO);

    const pageCount = Math.ceil(pokemonListLength / itemsPerPage);

    Array(pageCount)
      .fill()
      .map(async (_, index) => {
        const itemsToSkip = itemsPerPage * index;
        const currentPage = index + 1;

        const pagePath = createUrlPathFromArray([
          languageISO,
          "pokedex",
          currentPage,
        ]);

        const pageContext = {
          languageISO,
          languagePretty,
          itemsPerPage,
          itemsToSkip,
          currentPage,
          pageCount,
        };

        return actions.createPage({
          component: require.resolve(
            "../../../../src/templates/template_pokemon_list_page/template_pokemon_list_page.tsx"
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
