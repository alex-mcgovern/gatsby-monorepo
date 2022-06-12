import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";
import Box from "../../../layout/box/box";
import BlogArticleListItem from "../blog_article_list_item/blog_article_list_item";

interface SectionBlogPostListProps {
  posts: {
    fields: {
      slug: string;
    };
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
      subtitle: string;
      slug: string;
      description?: string;
      cover: ImageDataLike;
    };
  }[];
}

function SectionBlogPostList({ posts }: SectionBlogPostListProps) {
  return (
    <Box
      as="section"
      gap="spacing3"
      display="grid"
      gridTemplateColumns={{ desktop: "1_1_1", tablet: "1_1", mobile: "1" }}
    >
      {posts.map((post) => {
        return <BlogArticleListItem key={post.fields.slug} post={post} />;
      })}
    </Box>
  );
}

SectionBlogPostList.defaultProps = {
  posts: null,
};

export default SectionBlogPostList;
