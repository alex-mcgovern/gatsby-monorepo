import React from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import { Box, ListItem } from "@alexmcgovern/boondoggle.design";

interface SectionBlogPostListProps {
  posts: IMarkdownRemarkBlogPost[];
}

const GRID_LAYOUT: GetSprinklesArgs["gridTemplateColumns"] = {
  desktop: "3x",
  tablet: "2x",
  mobile: "1x",
};

export function SectionBlogPostList({ posts }: SectionBlogPostListProps) {
  return (
    <Box
      as="section"
      display="grid"
      gap="spacing2"
      gridTemplateColumns={GRID_LAYOUT}
    >
      {posts.map((post) => {
        return (
          <ListItem
            aspectRatio="wide"
            title={post.frontmatter.title || post.fields.slug}
            subtitle={post.frontmatter.date}
            description={post.frontmatter.description || post.excerpt}
            link={post.fields.slug}
            // image={post.frontmatter.cover}
          />
        );
      })}
    </Box>
  );
}
