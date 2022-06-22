import React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { createUrlPathFromArray } from "../../../utils/create_url_path_from_array";
import Box from "../../components/atoms/box/box";
import ListItem from "../../components/molecules/list_item/list_item";
import Pagination from "../../components/molecules/pagination/pagination";
import Search from "../../components/molecules/search/search/search";
import SingleSelect from "../../components/molecules/single_select/single_select/single_select";
import Layout from "../../components/organisms/global_layout/global_layout";
import padStart from "../../utils/helper_functions/pad_start/pad_start";
import getLanguageSelectIndex from "../../utils/pokedex/get_language_select_index/get_language_select_index";
import getPokedexSearchIndex from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";
import {
  RESPONSIVE_MAX_WIDTH_PROPS,
  SECTION_PROPS,
} from "../../utils/shared_props/box_props";

interface TemplatePokemonListPageProps {
  data: {
    allPokemon: {
      nodes: {
        artwork: ImageDataLike;
        pokedexID: number;
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
  const { site } = data;

  const siteTitle = site.siteMetadata?.title || `Title`;

  const {
    allPokemon: { nodes: allPokemon },
    allLanguagesISO: { distinct: allLanguagesISO },
  } = data;

  const doc = data.doc.nodes[0].excerpt;

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

  const currentLanguageUpperCase = languageISO.toUpperCase();

  return (
    <Layout title={siteTitle}>
      <Box {...RESPONSIVE_MAX_WIDTH_PROPS}>
        <Box {...RESPONSIVE_MAX_WIDTH_PROPS}>
          <section
            dangerouslySetInnerHTML={{ __html: doc }}
            itemProp="articleBody"
          />
        </Box>

        <Box display="flex" marginY="spacing3" justifyContent={"space-between"}>
          <Search
            size="lg"
            searchIndex={searchIndex}
            placeholder={"Search for a Pokemon"}
          />

          <SingleSelect
            searchIndex={languageIndex}
            size="lg"
            value={currentLanguageUpperCase}
          />
        </Box>
        <Box
          as="section"
          marginY="spacing3"
          display="grid"
          gap="spacing3"
          gridTemplateColumns={{
            desktop: "4x",
            tablet: "2x",
            mobile: "1x",
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
              languageISO,
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
    </Layout>
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
