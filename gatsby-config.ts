import dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";
import path from "path";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Alex McGovern`,
    author: {
      name: `Alex McGovern`,
      summary: `who lives and works in London building beautiful things.`,
    },
    description: `Personal website.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `@lex_mcgovern`,
    },
  },
  plugins: [
    /* ——————————————————————————————————————————————————————————————————————————————
    //      CUSTOM PLUGINS                                                          
    // —————————————————————————————————————————————————————————————————————————————— */

    /* ——————————————————————————————————————————————————————————————————————————————
    //      DESIGN SYSTEM DOCUMENTATION                                             
    // —————————————————————————————————————————————————————————————————————————————— */

    /* ——————————————————————————————————————————————
    //      AUTOGENERATE TYPES & INTERFACE DOCUMENTATION
    // —————————————————————————————————————————————— */

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `global-types`,
    //     path: path.resolve(`src/global.d.ts`),
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `styles`,
    //     path: path.resolve(`src/styles`),
    //   },
    // },

    // {
    //   resolve: "gatsby-transformer-react-docgen-typescript-v2",
    // },

    /* ——————————————————————————————————————————————
    //      CREATE DOCUMENTATION PAGES
    // —————————————————————————————————————————————— */

    // `gatsby-plugin-create-design-docs`,

    /** —————————————————————————————————————————————————————————————————————————————
     * STYLING
     * ——————————————————————————————————————————————————————————————————————————————— */
    {
      resolve: `gatsby-plugin-vanilla-extract`,
      // options: {
      //   identifiers: `debug`,
      // },
    },

    /** —————————————————————————————————————————————————————————————————————————————
     * VENDOR SOFTWARE
     * ——————————————————————————————————————————————————————————————————————————————— */
    // {
    //   resolve: "gatsby-source-hubspot-forms",
    //   options: {
    //     apiKey: process.env.HUBSPOT_API_KEY,
    //   },
    // },

    /* ——————————————————————————————————————————————————————————————————————————————
    //      GATSBY PLUGINS                                                          
    // —————————————————————————————————————————————————————————————————————————————— */

    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images`),
      },
    },

    /* ——————————————————————————————————————————————
    //      PROJECT DOCUMENTATION                 
    //      .md files processed with `gatsby-transformer-remark`,
    // —————————————————————————————————————————————— */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`content/docs`),
        name: `docs`,
      },
    },

    /* ——————————————————————————————————————————————
    //      COMPONENT DOCUMENTATION                 
    //      .mdx files processed with `gatsby-plugin-mdx`,
    // —————————————————————————————————————————————— */
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `documentation`,
    //     path: path.resolve(`src/components`),
    //   },
    // },
    // `gatsby-plugin-mdx`,

    /* ——————————————————————————————————————————————————————————————————————————————
    //      TRANSFORMER PLUGINS                                                     
    // —————————————————————————————————————————————————————————————————————————————— */

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },

    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

export default config;
