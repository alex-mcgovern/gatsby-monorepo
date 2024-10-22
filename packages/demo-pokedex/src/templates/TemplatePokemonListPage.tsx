import React from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import {
  Box,
  ListItem,
  SelectSingle,
  SelectSingleFilterable,
} from "@alexmcgovern/boondoggle.design";
import { Pagination } from "@alexmcgovern/gatsby-shared";
import { createPathFromSegmentArray, padStart } from "@alexmcgovern/utils";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { graphql } from "gatsby";
import type { ImageDataLike } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { getLanguageSelectIndex } from "../utils/getLanguageSelectIndex";
import { getPokedexDropdownItems } from "../utils/getPokedexDropdownItems";

const SHARED_BASE_PATH = ["projects", "multilingual-pokedex"];

const GRID_LAYOUT: GetSprinklesArgs["gridTemplateColumns"] = {
  desktop: "4x",
  tablet: "2x",
  mobile: "1x",
};

interface TemplatePokemonListPageProps {
  data: {
    allPokemon: {
      nodes: {
        artwork: ImageDataLike;
        pokedexID: string;
        name: string;
      }[];
    };
    site: {
      siteMetadata?: {
        title?: string;
      };
    };
    doc: {
      nodes: {
        excerpt: string;
      }[];
    };
    allLanguagesISO: {
      distinct: string[];
    };
  };
  pageContext: {
    languageISO: string;
    currentPage: number;
    pageCount: number;
  };
}

export default function TemplatePokemonListPage({
  data,
  pageContext,
}: TemplatePokemonListPageProps) {
  const { languageISO, currentPage, pageCount } = pageContext;

  const {
    allPokemon: { nodes: allPokemon },
    allLanguagesISO: { distinct: allLanguagesISO },
  } = data;

  const isEnglish = languageISO === "en";

  const basePagePathArray = [...SHARED_BASE_PATH];

  const dropdownItems = getPokedexDropdownItems({ allPokemon, languageISO });

  if (!isEnglish) {
    basePagePathArray.push(languageISO);
  }

  const paginationBasePath = createPathFromSegmentArray([...basePagePathArray]);

  const languageIndex = getLanguageSelectIndex({
    allLanguagesISO,
    basePathArray: SHARED_BASE_PATH,
    currentPage,
  });

  const currentLanguageUpperCase = languageISO.toUpperCase();

  return (
    <>
      <Box marginY="spacing5">
        <Box as="header">
          <hr />
        </Box>

        <Box display="flex" marginY="spacing3" justifyContent="space-between">
          <SelectSingleFilterable
            items={dropdownItems}
            iconLeading={faSearch}
            size="lg"
            id="pokedex-search"
            name="pokedex-search"
            label="Search"
            placeholder="Search for a Pokemon"
          />

          <SelectSingle
            items={languageIndex}
            size="lg"
            id="language-dropdown"
            name="language-dropdown"
            label="Status"
            placeholder={currentLanguageUpperCase}
          />
        </Box>
        <Box
          as="section"
          marginY="spacing3"
          display="grid"
          gap="spacing2"
          gridTemplateColumns={GRID_LAYOUT}
        >
          {allPokemon.map((pokemon) => {
            const { artwork, pokedexID, name } = pokemon;
            const paddedPokedexId = padStart({
              value: pokedexID,
              desiredLength: 3,
              padCharacter: "0",
            });

            const link = createPathFromSegmentArray([
              ...basePagePathArray,
              "pokemon",
              pokedexID,
            ]);
            const title = `${paddedPokedexId} ${name}`;

            const imageData = getImage(artwork);

            const leadingNode = imageData && (
              <GatsbyImage alt={title} image={imageData} />
            );
            return (
              <ListItem
                as={Link}
                to={link}
                title={title}
                leadingNode={leadingNode}
              />
            );
          })}
        </Box>
      </Box>
      <Pagination
        basePath={paginationBasePath}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </>
  );
}

export const query = graphql`
  query TemplatePokemonListPageQuery(
    $languageISO: String
    $itemsPerPage: Int
    $itemsToSkip: Int
  ) {
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
      limit: $itemsPerPage
      skip: $itemsToSkip
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
