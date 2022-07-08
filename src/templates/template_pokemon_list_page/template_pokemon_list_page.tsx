import React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { Box } from "../../components/atoms/box/box";
import DropdownCombobox from "../../components/molecules/dropdown_combobox/dropdown_combobox";
import { ListItem } from "../../components/molecules/list_item/list_item";
import { Pagination } from "../../components/molecules/pagination/pagination";
import { createUrlPathFromArray } from "../../utils/create_url_from_path_array/create_url_path_from_array";
import padStart from "../../utils/helper_functions/pad_start/pad_start";
import getLanguageSelectIndex from "../../utils/pokedex/get_language_select_index/get_language_select_index";
import getPokedexDropdownItems from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../utils/shared_props/box_props";

const SHARED_BASE_PATH = ["projects", "multilingual-pokedex"];

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

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const doc = data.doc.nodes[0].excerpt;

  const isEnglish = languageISO === "en";

  const basePagePathArray = [...SHARED_BASE_PATH];

  const dropdownItems = getPokedexDropdownItems({ allPokemon, languageISO });

  if (!isEnglish) {
    basePagePathArray.push(languageISO);
  }

  const paginationBasePath = createUrlPathFromArray([...basePagePathArray]);

  const languageIndex = getLanguageSelectIndex({
    allLanguagesISO,
    basePathArray: SHARED_BASE_PATH,
    currentPage,
  });

  const currentLanguageUpperCase = languageISO.toUpperCase();

  return (
    <>
      <Box
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        <Box as="header" customisation={{}}>
          <section
            dangerouslySetInnerHTML={{ __html: doc }}
            itemProp="articleBody"
          />
        </Box>

        <Box
          customisation={{
            display: "flex",
            marginY: "spacing3",
            justifyContent: "space-between",
          }}
        >
          <DropdownCombobox
            items={dropdownItems}
            isSearchable
            iconLeading="search"
            variant={{
              size: "lg",
            }}
            id="pokedex-search"
            label="Search"
            placeholder="Search for a Pokemon"
            buttonTitle={currentLanguageUpperCase}
          />

          <DropdownCombobox
            items={languageIndex}
            variant={{
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
            marginY: "spacing3",
            display: "grid",
            gap: "spacing3",
            gridTemplateColumns: {
              desktop: "4x",
              tablet: "2x",
              mobile: "1x",
            },
          }}
        >
          {allPokemon.map((pokemon) => {
            const { artwork, pokedexID, name } = pokemon;
            const paddedPokedexId = padStart({
              value: pokedexID,
              desiredLength: 3,
              padCharacter: "0",
            });
            const link = createUrlPathFromArray([
              ...basePagePathArray,
              "pokemon",
              pokedexID,
            ]);
            const title = `${paddedPokedexId} ${name}`;
            return (
              <ListItem
                aspectRatio="square"
                link={link}
                title={title}
                image={artwork}
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
      distinct(field: language___languageISO)
    }
    doc: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "projects" } } }
    ) {
      nodes {
        excerpt(pruneLength: 650, format: HTML, truncate: true)
      }
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
