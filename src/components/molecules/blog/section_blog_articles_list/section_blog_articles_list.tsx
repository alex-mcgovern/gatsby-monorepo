import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";
import ResponsiveGrid from "../../../atoms/responsive_grid/responsive_grid";
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
    <ResponsiveGrid split={3}>
      {posts.map((post) => {
        return <BlogArticleListItem key={post.fields.slug} post={post} />;
      })}
    </ResponsiveGrid>
  );
}

SectionBlogPostList.defaultProps = {
  posts: null,
};

export default SectionBlogPostList;
