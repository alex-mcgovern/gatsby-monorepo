import type { GatsbyConfig } from "gatsby";

const path = require("path");

const TARGET_LANGUAGE_LIST = ["en", "fr", "de", "es"];

// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hi, I'm Alex`,
    author: {
      name: `Alex McGovern`,
      summary: `who lives and works in London building beautiful things.`,
    },
    description: `Personal website.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `lxmcgvrnsmth`,
    },
  },
  plugins: [
    /* ——————————————————————————————————————————————————————————————————————————————
    //      CUSTOM PLUGINS                                                          
    // —————————————————————————————————————————————————————————————————————————————— */

    /* ——————————————————————————————————————————————
    //      MULTILINGUAL POKEDEX PROJECT DATA SOURCE
    // —————————————————————————————————————————————— */

    {
      resolve: "gatsby-source-pokeapi",
      options: {
        numberOfPokemonToSource: 151,
        targetLanguageList: TARGET_LANGUAGE_LIST,
        targetGameVersion: "x", // "fr", "de", "es" languages not available in earlier versions
        enableDebugLogging: false,
      },
    },
    {
      resolve: "gatsby-plugin-create-pokedex",
      options: {
        targetLanguageList: TARGET_LANGUAGE_LIST,
        itemsPerPage: 12,
        enableDebugLogging: false,
      },
    },

    /* ——————————————————————————————————————————————————————————————————————————————
    //      DESIGN SYSTEM DOCUMENTATION                                             
    // —————————————————————————————————————————————————————————————————————————————— */

    `gatsby-plugin-create-design-docs`,

    /* ——————————————————————————————————————————————
    //      BLOG PAGINATION PAGE CREATION           
    // —————————————————————————————————————————————— */

    {
      resolve: "gatsby-plugin-create-blog-pagination",
      options: {
        itemsPerPage: 12,
      },
    },

    /* ——————————————————————————————————————————————————————————————————————————————
    //      COMMUNITY PLUGINS
    // —————————————————————————————————————————————————————————————————————————————— */

    {
      resolve: `gatsby-plugin-vanilla-extract`,
      options: {
        identifiers: `debug`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal-fixed`,
      options: {
        threshold: 0.001, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "-80px 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },

    /* ——————————————————————————————————————————————————————————————————————————————
    //      GATSBY PLUGINS                                                          
    // —————————————————————————————————————————————————————————————————————————————— */

    `gatsby-plugin-image`,

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/svg/,
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images`),
      },
    },
    /* ——————————————————————————————————————————————
    //      BLOG POSTS
    //      .md files processed with `gatsby-transformer-remark`,
    // —————————————————————————————————————————————— */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`content/blog`),
        name: `blog`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation`,
        path: path.resolve(`src/components`),
      },
    },
    `gatsby-plugin-mdx`,

    /* ——————————————————————————————————————————————
    //      INSTAGRAM GALLERY DATA SOURCE
    // —————————————————————————————————————————————— */
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_API_KEY,
      },
    },
    /* ——————————————————————————————————————————————————————————————————————————————
    //      TRANSFORMER PLUGINS                                                     
    // —————————————————————————————————————————————————————————————————————————————— */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return {
                  ...node.frontmatter,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                };
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

export default config;
