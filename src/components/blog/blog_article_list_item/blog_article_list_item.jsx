import React from "react";
import PropTypes from "prop-types";
import ListItemWithImage from "../../molecules/list_item/list_item_with_image/list_item_with_image";

// import * as classes from "./blog_article_list_item.module.scss";

export default function BlogArticleListItem({ post }) {
  if (!post) {
    return null;
  }
  return (
    <ListItemWithImage
      title={post.frontmatter.title || post.fields.slug}
      subtitle={post.frontmatter.date}
      description={post.frontmatter.description || post.excerpt}
      link={post.fields.slug}
      image={post.frontmatter.cover}
    />
  );
}

BlogArticleListItem.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    frontmatter: {
      date: PropTypes.string,
      description: PropTypes.string,
      cover: PropTypes.shape({}),
    },
    fields: {
      slug: PropTypes.string,
    },
  }),
};

BlogArticleListItem.defaultProps = {
  post: null,
};
