import dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";
import path from "path";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            options: {
              maxWidth: 630,
            },
            resolve: "gatsby-remark-images",
          },
          {
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
            resolve: "gatsby-remark-responsive-iframe",
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: path.resolve("markdown-blog-posts"),
      },
    },
    {
      resolve: "gatsby-plugin-create-blog-pagination",
      options: {
        itemsPerPage: 12,
      },
    },
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-vanilla-extract",
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
  siteMetadata: {
    author: {
      name: "Alex McGovern",
      summary: "who lives and works in London building beautiful things.",
    },
    description: "Personal website.",
    siteUrl: "https://gatsbystarterblogsource.gatsbyjs.io/",
    social: {
      twitter: "@lex_mcgovern",
    },
    title: "Alex McGovern",
  },
};

export default config;
