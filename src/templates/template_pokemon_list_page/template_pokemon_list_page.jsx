import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { createUrlPathFromArray } from "../../../utils/create_url_path_from_array";
import ResponsiveGrid from "../../components/atoms/responsive_grid/responsive_grid";
import InnerWrapper from "../../components/inner_wrapper/inner_wrapper";
import Layout from "../../components/layout/layout";
import ListItemWithImage from "../../components/molecules/list_item/list_item_with_image/list_item_with_image";
import Pagination from "../../components/molecules/pokedex/pagination/pagination";
import PokedexNav from "../../components/molecules/pokedex/pokedex_nav/pokedex_nav";
import Section from "../../components/section/section";
import SubNav from "../../components/sub_nav/sub_nav";
import getPokedexSearchIndex from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";

export default function TemplatePokemonListPage({
  data,
  pageContext,
  location,
}) {
  const { languageISO, languagePretty, currentPage, pageCount } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const {
    allPokemon: { nodes: allPokemon },
    allLanguagesPretty: { distinct: allLanguagesPretty },
    allLanguagesISO: { distinct: allLanguagesISO },
  } = data;

  console.log(allPokemon, allLanguages);

  const searchIndex = getPokedexSearchIndex({ allPokemon, languageISO });

  const languageIndex = [
    { value: "English", link: `/en/pokedex/` },
    { value: "Spanish", link: `/es/pokedex/` },
    { value: "French", link: `/fr/pokedex/` },
    { value: "German", link: `/de/pokedex/` },
  ];

  return (
    <Layout location={location} title={siteTitle}>
      <InnerWrapper>
        <SubNav title="Multilingual Pokedex" />

        <Section>
          <PokedexNav
            searchIndex={searchIndex}
            languagePretty={languagePretty}
            languageIndex={languageIndex}
            placeholder="Search for a pokemon"
          />
          <ResponsiveGrid split={3}>
            {allPokemon.map((pokemon) => {
              const { artwork, pokedexID } = pokemon;
              const link = createUrlPathFromArray([
                languageISO,
                "pokemon",
                pokedexID,
              ]);

              return (
                <ListItemWithImage
                  link={link}
                  title={pokemon.name}
                  image={artwork}
                />
              );
            })}
          </ResponsiveGrid>
        </Section>
        <Section>
          <Pagination
            basePath="en/pokedex"
            currentPage={currentPage}
            pageCount={pageCount}
          />
        </Section>
      </InnerWrapper>
    </Layout>
  );
}

TemplatePokemonListPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  pageContext: PropTypes.shape({
    subNavData: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

TemplatePokemonListPage.defaultProps = {
  pageContext: {
    subNavData: [],
  },
};

export const query = graphql`
  query TemplatePokemonListPageQuery(
    $languageISO: String
    $pokemonPerPage: Int
    $pokemonToSkip: Int
  ) {
    site {
      siteMetadata {
        title
      }
    }
    allLanguagesPretty: allPokemon {
      distinct(field: languagePretty)
    }
    allLanguagesISO: allPokemon {
      distinct(field: languageISO)
    }
    allPokemon: allPokemon(
      filter: { languageISO: { eq: $languageISO } }
      limit: $pokemonPerPage
      skip: $pokemonToSkip
    ) {
      nodes {
        artwork {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
        name
        pokedexID
      }
    }
  }
`;
