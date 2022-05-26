import React from "react";
import PropTypes from "prop-types";
import ResponsiveGrid from "../../atoms/responsive_grid/responsive_grid";
import BlogArticleListItem from "../blog_article_list_item/blog_article_list_item";

function SectionBlogPostList({ posts }) {
  return (
    <ResponsiveGrid split={3}>
      {posts.map((post) => {
        return (
          <BlogArticleListItem
            variant="wide"
            key={post.fields.slug}
            post={post}
          />
        );
      })}
    </ResponsiveGrid>
  );
}

SectionBlogPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
};

SectionBlogPostList.defaultProps = {
  posts: null,
};

export default SectionBlogPostList;
