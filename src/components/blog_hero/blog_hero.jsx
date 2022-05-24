import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as classes from "./blog_hero.module.scss";

function BlogHero({ title, date, image }) {
  return (
    <header className={classes.hero}>
      <GatsbyImage image={image} />
      <div className={classes.hero_inner}>
        <div className={classes.hero_text_wrapper}>
          <h1 className={classes.hero_h1}>{title}</h1>
          <h2 className={classes.hero_h2}>{date}</h2>
        </div>
      </div>
    </header>
  );
}

BlogHero.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.shape({}),
};

BlogHero.defaultProps = {
  title: null,
  date: null,
  image: null,
};

export default BlogHero;
