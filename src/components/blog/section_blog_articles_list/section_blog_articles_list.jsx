import React from "react";
import PropTypes from "prop-types";
import Section from "../../section/section";
import BlogArticleListItem from "../blog_article_list_item/blog_article_list_item";
import * as classes from "./section_blog_articles_list.module.scss";

function SectionBlogPostList({ posts }) {
  return (
    <Section>
      <h3>I'm trying to write more often...</h3>
      <ol className={classes.post_list}>
        {posts.map((post) => {
          return <BlogArticleListItem key={post.fields.slug} post={post} />;
        })}
      </ol>
    </Section>
  );
}

SectionBlogPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
};

SectionBlogPostList.defaultProps = {
  posts: null,
};

export default SectionBlogPostList;
