const {
  createUrlPathFromArray,
} = require("../../../../utils/create_url_path_from_array");

async function createPokedexEntry({
  actions,
  languageISO,
  languagePretty,
  pokedexID,
}) {
  const pagePath = createUrlPathFromArray([languageISO, "pokemon", pokedexID]);

  const pageContext = {
    pokedexID,
    languageISO,
    languagePretty,
    artworkId: `Artwork_${pokedexID}`,
  };

  return actions.createPage({
    component: require.resolve(
      "../../../../src/templates/template_pokemon_page/template_pokemon_page.jsx"
    ),
    context: pageContext,
    path: pagePath,
  });
}

module.exports = {
  createPokedexEntry,
};
