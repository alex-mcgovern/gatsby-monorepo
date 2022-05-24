import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { createUrlPathFromArray } from "../../../utils/create_url_path_from_array";
import Button from "../../components/atoms/button/button";
import HorizontalDivider from "../../components/horizontal_divider/horizontal_divider";
import InnerWrapper from "../../components/inner_wrapper/inner_wrapper";
import Layout from "../../components/layout/layout";
import PokedexNav from "../../components/molecules/pokedex/pokedex_nav/pokedex_nav";
import PokedexNavigation from "../../components/molecules/pokedex/pokedex_navigation/pokedex_navigation";
import Search from "../../components/molecules/search/search/search";
import SingleSelect from "../../components/molecules/single_select/single_select/single_select";
import Section from "../../components/section/section";
import SubNav from "../../components/sub_nav/sub_nav";
import getPokedexSearchIndex from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";
import getArtworkImageData from "./helper_functions/ get_artwork_image_data";
import * as classes from "./template_pokemon_page.module.scss";

export default function TemplatePokemonPage({ data, pageContext, location }) {
  const { pokedexID, languageISO } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const {
    flavorText: flavorText,
    name,
    genus,
    artwork,
    languagePretty,
  } = data.currentPokemon?.edges[0].node || {};

  const { nodes: allPokemon } = data.allPokemon;
  const searchIndex = getPokedexSearchIndex({ allPokemon, languageISO });

  const imageData = getImage(artwork);

  const { totalCount } = data.allPokemon;

  const languageIndex = [
    { value: "English", link: `/en/pokedex/${pokedexID}` },
    { value: "Spanish", link: `/es/pokedex/${pokedexID}` },
    { value: "French", link: `/fr/pokedex/${pokedexID}` },
    { value: "German", link: `/de/pokedex/${pokedexID}` },
  ];

  return (
    <Layout location={location} title={siteTitle}>
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
            languagePretty={languagePretty}
            languageIndex={languageIndex}
          />

          <div className={classes.pokemon_wrapper}>
            <div className={classes.pokemon_inner}>
              <HorizontalDivider />
              <div>
                <h2>{name}</h2>
                <h3>{genus}</h3>
                <p>{flavorText}</p>
              </div>
              <HorizontalDivider />
            </div>

            <GatsbyImage image={imageData} className={classes.pokemon_image} />
          </div>
        </Section>

        <PokedexNavigation
          currentLang={languageISO}
          currentPage={pokedexID}
          pageCount={Number(totalCount)}
        />
      </InnerWrapper>
    </Layout>
  );
}

TemplatePokemonPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  pageContext: PropTypes.shape({
    subNavData: PropTypes.arrayOf(PropTypes.shape({})),
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
    allPokemon: allPokemon(filter: { languageISO: { eq: $languageISO } }) {
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
