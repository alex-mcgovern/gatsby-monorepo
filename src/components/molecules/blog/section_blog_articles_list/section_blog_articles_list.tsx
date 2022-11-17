import React from "react";
import { BoxNew } from "../../../atoms/box_new/box_new";
import { ListItem } from "../../list_item/list_item";

interface SectionBlogPostListProps {
  posts: IMarkdownRemarkBlogPost[];
}

function SectionBlogPostList({ posts }: SectionBlogPostListProps) {
  return (
    <BoxNew
      as="section"
      display="grid"
      gap="spacing2"
      gridTemplateColumns={{ desktop: "3x", tablet: "2x", mobile: "1x" }}
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
    </BoxNew>
  );
}

SectionBlogPostList.defaultProps = {
  posts: null,
};

export default SectionBlogPostList;
