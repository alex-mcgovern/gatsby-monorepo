import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { createUrlPathFromArray } from "../../../utils/create_url_path_from_array";
import Layout from "../../components/layout/layout/layout";
import LayoutDecorativeArrows from "../../components/layout/layout_decorative_arrows/layout_decorative_arrows";
import LayoutMaxWidthContainer from "../../components/layout/layout_max_width_container/layout_max_width_container";
import LayoutSectionOuter from "../../components/layout/layout_section_outer/layout_section_outer";
import Pagination from "../../components/molecules/pokedex/pagination/pagination";
import PokedexNav from "../../components/molecules/pokedex/pokedex_nav/pokedex_nav";
import padStart from "../../utils/helper_functions/pad_start/pad_start";
import getLanguageSelectIndex from "../../utils/pokedex/get_language_select_index/get_language_select_index";
import getPokedexSearchIndex from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";
import * as classes from "./template_pokemon_page.module.scss";

interface TemplatePokemonPageProps {
  data: {
    allPokemon: {
      nodes: {}[];
      totalCount: number;
    };
    currentPokemon: {
      edges: {
        node: {
          flavorText: string;
          name: string;
          genus: string;
          artwork: ImageDataLike;
        };
      }[];
    };
    site?: {
      siteMetadata?: {
        title?: string;
      };
    };
    allLanguagesISO: {
      distinct: string[];
    };
  };
  pageContext: {
    pokedexID: number;
    languageISO: string;
    currentPage: number;
    pageCount: number;
  };
}

export default function TemplatePokemonPage({
  data,
  pageContext,
}: TemplatePokemonPageProps) {
  const { pokedexID, languageISO } = pageContext;
  const { allPokemon, allLanguagesISO, site, currentPokemon } = data;
  const { nodes: allPokemonData, totalCount } = allPokemon;
  const {
    node: { flavorText, name, genus, artwork },
  } = currentPokemon?.edges[0];
  const siteTitle = site?.siteMetadata?.title || `Title`;

  // allLanguagesISO: { distinct: allLanguagesISO },

  const paddedPokedexId = padStart({
    value: pokedexID,
    desiredLength: 3,
    padCharacter: 0,
  });

  const pokemonTitle = `${paddedPokedexId} ${name}`;

  const imageData = getImage(artwork);

  const searchIndex = getPokedexSearchIndex({
    allPokemon: allPokemonData,
    languageISO,
  });
  const paginationBasePath = createUrlPathFromArray([languageISO, "pokemon"]);

  const languageIndexBasePath = createUrlPathFromArray(["pokemon", pokedexID]);
  const languageIndex = getLanguageSelectIndex({
    allLanguagesISO: allLanguagesISO.distinct,
    basePath: languageIndexBasePath,
  });
  return (
    <Layout title={siteTitle}>
      <LayoutMaxWidthContainer>
        <LayoutSectionOuter>
          <PokedexNav
            searchIndex={searchIndex}
            languageISO={languageISO}
            languageIndex={languageIndex}
          />

          <div className={classes.pokemon_wrapper}>
            <div className={classes.pokemon_inner}>
              <LayoutDecorativeArrows />
              <div>
                <h2>{pokemonTitle}</h2>
                <h3>{genus}</h3>
                <p>{flavorText}</p>
              </div>
              <LayoutDecorativeArrows />
            </div>

            {imageData && (
              <GatsbyImage
                alt={name}
                image={imageData}
                className={classes.pokemon_image}
              />
            )}
          </div>
        </LayoutSectionOuter>

        <LayoutSectionOuter>
          <Pagination
            basePath={paginationBasePath}
            currentPage={pokedexID}
            pageCount={totalCount}
          />
        </LayoutSectionOuter>
      </LayoutMaxWidthContainer>
    </Layout>
  );
}

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