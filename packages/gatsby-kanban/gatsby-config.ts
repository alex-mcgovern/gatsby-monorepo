import { siteMetadata } from "@alexmcgovern/gatsby-shared";
import dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
      },
    },
    {
      resolve: "gatsby-plugin-vanilla-extract",
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};

export default config;
