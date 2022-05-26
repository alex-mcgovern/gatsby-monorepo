import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";
import ListItemWithImage from "../../list_item/list_item_with_image/list_item_with_image";

interface BlogArticleListItemProps {
  post: {
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
      subtitle: string;
      slug: string;
      description?: string;
      cover: ImageDataLike;
    };
    fields: {
      slug: string;
    };
  };
}

export default function BlogArticleListItem({
  post,
}: BlogArticleListItemProps) {
  if (!post) {
    return null;
  }

  return (
    <ListItemWithImage
      variant="wide"
      title={post.frontmatter.title || post.fields.slug}
      subtitle={post.frontmatter.date}
      description={post.frontmatter.description || post.excerpt}
      link={post.fields.slug}
      image={post.frontmatter.cover}
    />
  );
}
