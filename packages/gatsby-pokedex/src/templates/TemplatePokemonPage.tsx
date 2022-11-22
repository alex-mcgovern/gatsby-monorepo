import React from "react";
import {
  Box,
  Button,
  SelectSingle,
  getSprinkles,
} from "@alexmcgovern/boondoggle.design";
import { Pagination } from "@alexmcgovern/gatsby-shared";
import { createPathFromSegmentArray, padStart } from "@alexmcgovern/utils";
import {
  faArrowLeft,
  faGrip,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, graphql } from "gatsby";
import type { ImageDataLike } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { getPokedexDropdownItems } from "../utils/getPokedexDropdownItems";

const SHARED_BASE_PATH = ["projects", "multilingual-pokedex"];

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
    site: {
      siteMetadata: {
        title: string;
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
  const { allPokemon, allLanguagesISO, currentPokemon } = data;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const { nodes: allPokemonData, totalCount } = allPokemon;
  const {
    node: { flavorText, name, genus, artwork },
  } = currentPokemon?.edges[0] || {};

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

  const isEnglish = languageISO === "en";

  const basePagePathArray = [...SHARED_BASE_PATH];
  const paginationPathArray = [...SHARED_BASE_PATH];

  if (!isEnglish) {
    paginationPathArray.push(languageISO);
  }

  paginationPathArray.push("pokemon");

  const paginationBasePath = createPathFromSegmentArray(paginationPathArray);

  const languageIndex = allLanguagesISO.distinct.map((language) => {
    const pagePathArray = [...basePagePathArray];

    if (!isEnglish) {
      pagePathArray.push(language);
    }

    pagePathArray.push("pokemon");

    if (pokedexID) {
      pagePathArray.push(pokedexID.toString());
    }
    const value = language.toUpperCase();
    const link = createPathFromSegmentArray(pagePathArray);
    return { value, label: value, link };
  });
  const currentLanguageUpperCase = languageISO.toUpperCase();
  const allPokemonLink = createPathFromSegmentArray([...basePagePathArray]);

  return (
    <Box>
      <Box display="flex" marginY="spacing3" justifyContent="space-between">
        <Button
          iconLeading={faArrowLeft}
          size="lg"
          appearance="secondary"
          as={Link}
          to={allPokemonLink}
          iconTrailing={faGrip}
        />

        <SelectSingle
          items={dropdownItems}
          isSearchable
          iconLeading={faSearch}
          id="pokedex-search"
          label="Search"
          placeholder="Search for a Pokemon"
          buttonTitle={currentLanguageUpperCase}
        />

        <SelectSingle
          items={languageIndex}
          variant={{
            appearance: "secondary",
            size: "lg",
          }}
          id="language-dropdown"
          label="Status"
          buttonTitle={currentLanguageUpperCase}
        />
      </Box>

      <Box
        as="section"
        display="grid"
        marginY="spacing5"
        gridTemplateColumns="2_1"
        alignItems="center"
        gap="spacing4"
      >
        <Box as="header" marginY="spacing4">
          <h1>{name}</h1>
          <h3>{genus}</h3>
          <p>{flavorText}</p>
        </Box>

        {imageData && (
          <GatsbyImage
            alt={name}
            image={imageData}
            className={getSprinkles({
              aspectRatio: "square",
              borderRadius: "md",
              border: "neutral_nonInteractive",
              boxShadow: "lg",
              background: "neutral_secondary_base",
            })}
          />
        )}
      </Box>

      <Pagination
        basePath={paginationBasePath}
        currentPage={pokedexID}
        pageCount={totalCount}
      />
    </Box>
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
      distinct(field: { language: { languageISO: SELECT } })
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
