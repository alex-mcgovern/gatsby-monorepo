import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as classes from "./blog_hero.module.scss";

interface BlogHeroProps {
  title: string;
  date?: string;
  image?: IGatsbyImageData;
}

export default function BlogHero({ title, date, image }: BlogHeroProps) {
  return (
    <header className={classes.hero}>
      <div className={classes.hero_inner}>
        {image && <GatsbyImage alt={title} image={image} />}
        <div className={classes.hero_text_wrapper}>
          <h1 className={classes.hero_h1}>{title}</h1>
          <h2 className={classes.hero_h2}>{date}</h2>
        </div>
      </div>
    </header>
  );
}
