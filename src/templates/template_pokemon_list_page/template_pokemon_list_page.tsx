import React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { createUrlPathFromArray } from "../../../utils/create_url_path_from_array";
import ResponsiveGrid from "../../components/atoms/responsive_grid/responsive_grid";
import Layout from "../../components/layout/layout/layout";
import LayoutMaxWidthContainer from "../../components/layout/layout_max_width_container/layout_max_width_container";
import LayoutSectionOuter from "../../components/layout/layout_section_outer/layout_section_outer";
import HeaderProject from "../../components/molecules/header/header_project/header_project";
import ListItemWithImage from "../../components/molecules/list_item/list_item_with_image/list_item_with_image";
import Pagination from "../../components/molecules/pokedex/pagination/pagination";
import PokedexNav from "../../components/molecules/pokedex/pokedex_nav/pokedex_nav";
import padStart from "../../utils/helper_functions/pad_start/pad_start";
import getLanguageSelectIndex from "../../utils/pokedex/get_language_select_index/get_language_select_index";
import getPokedexSearchIndex from "../../utils/pokedex/get_pokedex_search_index/get_pokedex_search_index";

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
        excerpt: {
          html: string;
        };
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

  return (
    <Layout title={siteTitle}>
      <LayoutMaxWidthContainer>
        <HeaderProject doc={doc.html} />

        <LayoutSectionOuter>
          <PokedexNav
            searchIndex={searchIndex}
            languageISO={languageISO}
            languageIndex={languageIndex}
            placeholder="Search for a pokemon"
            isTopLevel
          />
          <ResponsiveGrid split={3}>
            {allPokemon.map((pokemon) => {
              const { artwork, pokedexID, name } = pokemon;
              const paddedPokedexId = padStart({
                value: pokedexID,
                desiredLength: 3,
                padCharacter: 0,
              });
              const link = createUrlPathFromArray([
                languageISO,
                "pokemon",
                pokedexID,
              ]);
              const title = `${paddedPokedexId} ${name}`;
              return (
                <ListItemWithImage
                  variant="square"
                  link={link}
                  title={title}
                  image={artwork}
                />
              );
            })}
          </ResponsiveGrid>
        </LayoutSectionOuter>
        <LayoutSectionOuter>
          <Pagination
            basePath={paginationBasePath}
            currentPage={currentPage}
            pageCount={pageCount}
          />
        </LayoutSectionOuter>
      </LayoutMaxWidthContainer>
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