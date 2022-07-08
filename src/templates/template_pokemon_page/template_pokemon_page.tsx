import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { Box } from "../../components/atoms/box/box";
import { Button } from "../../components/atoms/button/button";
import DropdownCombobox from "../../components/molecules/dropdown_combobox/dropdown_combobox";
import { Pagination } from "../../components/molecules/pagination/pagination";
import { createUrlPathFromArray } from "../../utils/create_url_from_path_array/create_url_path_from_array";
import padStart from "../../utils/helper_functions/pad_start/pad_start";
import getLanguageSelectIndex from "../../utils/pokedex/get_language_select_index/get_language_select_index";
import getPokedexDropdownItems from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";
import { BOX_CUSTOMISATION_MAX_WIDTH_FULL } from "../../utils/shared_props/box_props";

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
  } = currentPokemon?.edges[0];

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

  const paginationBasePath = createUrlPathFromArray(paginationPathArray);

  const languageIndex = allLanguagesISO.distinct.map((language) => {
    const pagePathArray = [...basePagePathArray];
    const isEnglish = language === "en";

    if (!isEnglish) {
      pagePathArray.push(language);
    }

    pagePathArray.push("pokemon");

    if (pokedexID) {
      pagePathArray.push(pokedexID.toString());
    }
    const value = language.toUpperCase();
    const link = createUrlPathFromArray(pagePathArray);
    return { value, label: value, link };
  });
  const currentLanguageUpperCase = languageISO.toUpperCase();
  const allPokemonLink = createUrlPathFromArray([...basePagePathArray]);

  return (
    <>
      <Box customisation={BOX_CUSTOMISATION_MAX_WIDTH_FULL}>
        <Box
          customisation={{
            display: "flex",
            marginY: "spacing3",
            justifyContent: "space-between",
          }}
        >
          <Button
            iconLeading="arrow-left"
            variant={{
              appearance: "secondary",
              size: "lg",
            }}
            to={allPokemonLink}
            iconTrailing="grip"
          />

          <DropdownCombobox
            items={dropdownItems}
            isSearchable
            variant={{
              appearance: "secondary",
              size: "lg",
            }}
            iconLeading="search"
            id="pokedex-search"
            label="Search"
            placeholder="Search for a Pokemon"
            buttonTitle={currentLanguageUpperCase}
          />

          <DropdownCombobox
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
          customisation={{
            display: "grid",
            gridTemplateColumns: "2_1",
          }}
        >
          <Box as="header" customisation={{ marginY: "spacing4" }}>
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
    </>
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
