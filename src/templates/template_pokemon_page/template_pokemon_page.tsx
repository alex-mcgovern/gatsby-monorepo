import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { createUrlPathFromArray } from "../../../utils/create_url_path_from_array";
import Box from "../../components/atoms/box/box";
import Button from "../../components/atoms/button/button";
import Pagination from "../../components/molecules/pagination/pagination";
import Search from "../../components/molecules/search/search/search";
import SingleSelect from "../../components/molecules/single_select/single_select/single_select";
import Layout from "../../components/organisms/global_layout/global_layout";
import padStart from "../../utils/helper_functions/pad_start/pad_start";
import getLanguageSelectIndex from "../../utils/pokedex/get_language_select_index/get_language_select_index";
import getPokedexDropdownItems from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";
import {
  BOX_PROPS_CONTAINED,
  BOX_PROPS_SECTION,
} from "../../utils/shared_props/box_props";

interface TemplatePokemonPageProps {
  data: {
    allPokemon: {
      nodes: {
        pokedexID: string;
        name: string;
      }[];
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
    padCharacter: "0",
  });

  const pokemonTitle = `${paddedPokedexId} ${name}`;

  const imageData = getImage(artwork);

  const dropdownItems = getPokedexDropdownItems({
    allPokemon: allPokemonData,
    languageISO,
  });
  const paginationBasePath = createUrlPathFromArray([languageISO, "pokemon"]);

  const languageIndexBasePath = createUrlPathFromArray(["pokemon", pokedexID]);
  const languageIndex = getLanguageSelectIndex({
    allLanguagesISO: allLanguagesISO.distinct,
    basePath: languageIndexBasePath,
  });
  const currentLanguageUpperCase = languageISO.toUpperCase();
  const allPokemonLink = createUrlPathFromArray([languageISO, "pokedex", 1]);

  return (
    <Layout title={siteTitle}>
      <Box {...BOX_PROPS_SECTION} {...BOX_PROPS_CONTAINED}>
        <Box display="flex" marginY="spacing3" justifyContent={"space-between"}>
          <Button
            iconLeading="arrow-left"
            size="lg"
            to={allPokemonLink}
            iconTrailing="grip"
            appearance="secondary"
          />

          <Search
            size="lg"
            dropdownItems={dropdownItems}
            placeholder={"Search for a Pokemon"}
          />

          <SingleSelect
            dropdownItems={languageIndex}
            size="lg"
            value={currentLanguageUpperCase}
          />
        </Box>

        <Box as="section" display="grid" gridTemplateColumns="2_1">
          <Box as="header" marginY="spacing10">
            <h2>{pokemonTitle}</h2>
            <h3>{genus}</h3>
            <p>{flavorText}</p>
          </Box>
          <Box>{imageData && <GatsbyImage alt={name} image={imageData} />}</Box>
        </Box>

        <Pagination
          basePath={paginationBasePath}
          currentPage={pokedexID}
          pageCount={totalCount}
        />
      </Box>
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
