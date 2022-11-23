import React from "react";
import {
  Box,
  Button,
  SelectSingle,
  SelectSingleFilterable,
  getSprinkles,
} from "@alexmcgovern/boondoggle.design";
import { Pagination } from "@alexmcgovern/gatsby-shared";
import { createPathFromSegmentArray } from "@alexmcgovern/utils";
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

  const { nodes: allPokemonData, totalCount } = allPokemon;
  const {
    node: { flavorText, name, genus, artwork },
  } = currentPokemon?.edges[0] || {};

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

        <SelectSingleFilterable
          items={dropdownItems}
          iconLeading={faSearch}
          id="pokedex-search"
          name="pokedex-search"
          label="Search"
          placeholder="Search for a Pokemon"
        />

        <SelectSingle
          items={languageIndex}
          appearance="secondary"
          size="lg"
          id="language-dropdown"
          name="language-dropdown"
          label="Status"
          placeholder={currentLanguageUpperCase}
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
