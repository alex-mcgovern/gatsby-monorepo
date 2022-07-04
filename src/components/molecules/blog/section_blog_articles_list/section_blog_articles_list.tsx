import React from "react";
import { Box } from "../../../atoms/box/box";
import { ListItem } from "../../list_item/list_item";

interface SectionBlogPostListProps {
  posts: IMarkdownRemarkBlogPost[];
}

function SectionBlogPostList({ posts }: SectionBlogPostListProps) {
  return (
    <Box
      as="section"
      customisation={{
        display: "grid",
        gap: "spacing3",
        gridTemplateColumns: { desktop: "3x", tablet: "2x", mobile: "1x" },
      }}
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

SectionBlogPostList.defaultProps = {
  posts: null,
};

export default SectionBlogPostList;
