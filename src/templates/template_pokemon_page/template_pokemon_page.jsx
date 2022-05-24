import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { createUrlPathFromArray } from "../../../utils/create_url_path_from_array";
import Button from "../../components/atoms/button/button";
import HorizontalDivider from "../../components/horizontal_divider/horizontal_divider";
import InnerWrapper from "../../components/inner_wrapper/inner_wrapper";
import Layout from "../../components/layout/layout";
import Pagination from "../../components/molecules/pokedex/pagination/pagination";
import PokedexNav from "../../components/molecules/pokedex/pokedex_nav/pokedex_nav";
import Section from "../../components/section/section";
import SubNav from "../../components/sub_nav/sub_nav";
import padStart from "../../utils/helper_functions/pad_start/pad_start";
import getLanguageSelectIndex from "../../utils/pokedex/get_language_select_index/get_language_select_index";
import getPokedexSearchIndex from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";
import * as classes from "./template_pokemon_page.module.scss";

export default function TemplatePokemonPage({ data, pageContext }) {
  const { pokedexID, languageISO } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const { flavorText, name, genus, artwork } =
    data.currentPokemon?.edges[0].node || {};

  const {
    allPokemon: { nodes: allPokemon },
    allLanguagesISO: { distinct: allLanguagesISO },
  } = data;

  const paddedPokedexId = padStart({
    value: pokedexID,
    desiredLength: 3,
    padCharacter: 0,
  });

  const pokemonTitle = `${paddedPokedexId} ${name}`;

  const imageData = getImage(artwork);

  const { totalCount } = data.allPokemon;

  const searchIndex = getPokedexSearchIndex({ allPokemon, languageISO });
  const paginationBasePath = createUrlPathFromArray([languageISO, "pokemon"]);

  const languageIndexBasePath = createUrlPathFromArray(["pokemon", pokedexID]);
  const languageIndex = getLanguageSelectIndex({
    allLanguagesISO,
    basePath: languageIndexBasePath,
  });
  return (
    <Layout title={siteTitle}>
      <InnerWrapper>
        <SubNav title="Multilingual Pokedex">
          <Button
            trailingIcon={["fab", "github"]}
            variant="secondary"
            size="sm"
            to="https://github.com"
            title="Source code"
          />
        </SubNav>
        <Section>
          <PokedexNav
            searchIndex={searchIndex}
            languageISO={languageISO}
            languageIndex={languageIndex}
          />

          <div className={classes.pokemon_wrapper}>
            <div className={classes.pokemon_inner}>
              <HorizontalDivider />
              <div>
                <h2>{pokemonTitle}</h2>
                <h3>{genus}</h3>
                <p>{flavorText}</p>
              </div>
              <HorizontalDivider />
            </div>

            <GatsbyImage image={imageData} className={classes.pokemon_image} />
          </div>
        </Section>

        <Section>
          <Pagination
            basePath={paginationBasePath}
            currentPage={pokedexID}
            pageCount={totalCount}
          />
        </Section>
      </InnerWrapper>
    </Layout>
  );
}

TemplatePokemonPage.propTypes = {
  data: PropTypes.shape({
    allPokemon: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
      totalCount: PropTypes.number,
    }),
    currentPokemon: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.arrayOf(PropTypes.shape({})),
      }),
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
    pokedexID: PropTypes.number,
    languageISO: PropTypes.string,
    currentPage: PropTypes.number,
    pageCount: PropTypes.number,
  }),
};

TemplatePokemonPage.defaultProps = {
  pageContext: {
    subNavData: [],
  },
};

export const query = graphql`
  query TemplatePokemonPageQuery($pokedexID: Int, $languageISO: String) {
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
    ) {
      totalCount
      nodes {
        name
        pokedexID
      }
    }
    currentPokemon: allPokemon(
      filter: {
        pokedexID: { eq: $pokedexID }
        languageISO: { eq: $languageISO }
      }
    ) {
      edges {
        node {
          pokedexID
          flavorText
          languagePretty
          genus
          name
          artwork {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`;
