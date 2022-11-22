import React from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import { Box, ListItem } from "@alexmcgovern/boondoggle.design";
import { Pagination } from "@alexmcgovern/gatsby-shared/src/shared-components/Pagination";
import { BlogCategoriesList } from "./BlogCategoryTags";

const PAGINATION_BASE_PATH = "blog";

interface BlogListLayoutProps {
  currentPage: number;
  pageCount: number;
  allCategories: IBlogCategory[];
  currentCategoryTitle?: string;
  posts: IMarkdownRemarkBlogPost[];
}

const GRID_LAYOUT: GetSprinklesArgs["gridTemplateColumns"] = {
  desktop: "4x",
  tablet: "2x",
  mobile: "1x",
};

export function BlogListLayout({
  currentPage,
  pageCount,
  allCategories,
  currentCategoryTitle,
  posts,
}: BlogListLayoutProps) {
  return (
    <Box as="section" marginY="spacing4">
      <Box as="header">
        <Box as="h1">Blog</Box>
        <Box as="p">
          Stuff that I've done, or am interested in. Part brain-dump, part
          tutorial, part experience journal.
        </Box>
      </Box>
      <hr />
      <BlogCategoriesList
        categories={allCategories}
        currentCategoryTitle={currentCategoryTitle}
      />
      <Box
        as="section"
        display="grid"
        gap="spacing2"
        gridTemplateColumns={GRID_LAYOUT}
      >
        {posts &&
          posts.length > 0 &&
          posts.map((post) => {
            return (
              <ListItem
                aspectRatio="wide"
                key={post.fields.slug}
                title={post.frontmatter.title || post.fields.slug}
                subtitle={post.frontmatter.date}
                description={post.frontmatter.description || post.excerpt}
                link={post.fields.slug}
              />
            );
          })}
      </Box>

      {pageCount && pageCount > 1 && (
        <Pagination
          basePath={PAGINATION_BASE_PATH}
          currentPage={currentPage}
          pageCount={pageCount}
        />
      )}
    </Box>
  );
}
