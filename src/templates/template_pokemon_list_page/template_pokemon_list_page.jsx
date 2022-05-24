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
import getLanguageSelectIndex from "../../utils/pokedex/get_language_select_index/get_language_select_index";
import getPokedexSearchIndex from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";

export default function TemplatePokemonListPage({ data, pageContext }) {
  const { languageISO, currentPage, pageCount } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const {
    allPokemon: { nodes: allPokemon },
    allLanguagesISO: { distinct: allLanguagesISO },
  } = data;

  const searchIndex = getPokedexSearchIndex({ allPokemon, languageISO });
  const paginationBasePath = createUrlPathFromArray([languageISO, "pokedex"]);

  const languageIndexBasePath = createUrlPathFromArray([
    "pokedex",
    currentPage,
  ]);
  const languageIndex = getLanguageSelectIndex({
    allLanguagesISO,
    basePath: languageIndexBasePath,
  });

  return (
    <Layout title={siteTitle}>
      <InnerWrapper>
        <SubNav title="Multilingual Pokedex" />

        <Section>
          <PokedexNav
            searchIndex={searchIndex}
            languageISO={languageISO}
            languageIndex={languageIndex}
            placeholder="Search for a pokemon"
            isTopLevel
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
            basePath={paginationBasePath}
            currentPage={currentPage}
            pageCount={pageCount}
          />
        </Section>
      </InnerWrapper>
    </Layout>
  );
}

TemplatePokemonListPage.propTypes = {
  data: PropTypes.shape({
    allPokemon: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    allLanguagesISO: PropTypes.arrayOf(
      PropTypes.shape({
        distinct: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }).isRequired,
  pageContext: PropTypes.shape({
    languageISO: PropTypes.string,
    currentPage: PropTypes.number,
    pageCount: PropTypes.number,
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

    allLanguagesISO: allPokemon {
      distinct(field: language___languageISO)
    }
    allPokemon: allPokemon(
      filter: { language: { languageISO: { eq: $languageISO } } }
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
