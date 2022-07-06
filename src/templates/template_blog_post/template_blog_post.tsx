import * as React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import slugify from "slugify";
import { Box } from "../../components/atoms/box/box";
import { Typography } from "../../components/atoms/typography/typography";
import BlogCategoriesList from "../../components/molecules/blog/blog_categories_list/blog_categories_list";
import { ListItem } from "../../components/molecules/list_item/list_item";
import Page from "../../components/organisms/page/page";
import RemarkMarkdown from "../../components/util_components/remark_markdown/remark_markdown";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../utils/shared_props/box_props";

interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      excerpt: string;
      htmlAst: string;
      frontmatter: {
        cover?: ImageDataLike;
        date?: string;
        description?: string;
        title: string;
      };
    };
    next?: {
      fields?: {
        slug?: string;
      };
      frontmatter?: {
        title?: string;
      };
    };
    previous?: {
      fields?: {
        slug?: string;
      };
      frontmatter?: {
        title?: string;
      };
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const BlogPostTemplate = ({ data }: BlogPostTemplateProps) => {
  const { markdownRemark: post, site, previous, next } = data;
  const {
    excerpt,
    frontmatter: { description, categories },
    htmlAst,
  } = post;

  const siteTitle = site.siteMetadata.title || `Title`;

  console.log("debug categories", categories);
  const categoryLinks =
    categories?.length > 0 &&
    categories.map((categoryTitle) => {
      const categorySlug = slugify(categoryTitle, {
        lower: true,
        strict: true,
      });
      return {
        categoryTitle,
        categorySlug,
      };
    });

  return (
    <Page
      title={post.frontmatter.title || siteTitle}
      description={description || excerpt}
    >
      <Box
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        <Box as="article">
          {/** ————————————————————————————————————————————————————————————————————————————
           *      POST HEADER
           * ——————————————————————————————————————————————————————————————————————————————— */}
          <Box as="header" customisation={{}}>
            {/** ————————————————————
             *      TITLE
             * ——————————————————————— */}
            <Typography
              as="h1"
              customisation={{
                marginTop: "none",
                marginBottom: "spacing2",
              }}
            >
              {post.frontmatter.title}
            </Typography>

            {/** ————————————————————
             *      DESCRIPTION
             * ——————————————————————— */}
            <Typography
              as="h2"
              customisation={{
                fontSize: "body_lg",
                fontWeight: "normal",
                marginTop: "none",
                marginBottom: "spacing3",
              }}
            >
              {post.frontmatter.description}
            </Typography>

            <Box
              customisation={{
                display: "flex",
                alignItems: "center",
                gap: "spacing3",
              }}
            >
              {/** ————————————————————
               *      DATE
               * ——————————————————————— */}
              <Typography
                customisation={{
                  marginY: "none",
                  color: "accent_fg_1",
                }}
              >
                {post.frontmatter.date}
              </Typography>

              {/** ————————————————————
               *      CATEGORIES
               * ——————————————————————— */}
              <BlogCategoriesList categories={categoryLinks} />
            </Box>
            <hr />
          </Box>

          {/** ————————————————————————————————————————————————————————————————————————————
           *      POST BODY
           * ——————————————————————————————————————————————————————————————————————————————— */}

          <Box
            as="section"
            customisation={{
              marginY: "spacing3",
              // marginX: "auto",
            }}
          >
            {/* <section
              dangerouslySetInnerHTML={{ __html: html }}
              itemProp="articleBody"
            /> */}

            <RemarkMarkdown htmlAst={htmlAst} />
            <hr />
            <footer></footer>
          </Box>

          <Box
            customisation={{
              marginY: "spacing3",
              display: "flex",
              justifyContent: "space-between",
              gap: "spacing3",
              maxWidth: "gridSpan6",
              marginX: "auto",
            }}
            as="nav"
          >
            <ListItem
              description={previous?.frontmatter?.title}
              link={previous?.fields?.slug}
              title="Previous"
              customisation={{ width: "100%" }}
            />
            <ListItem
              description={next?.frontmatter?.title}
              link={next?.fields?.slug}
              title="Next"
              customisation={{ width: "100%", textAlign: "right" }}
            />
            {/* <Button
              iconLeading="arrow-left"
              variant={{
                size: "lg",
              }}
              to={previous?.fields?.slug}
              title={previous?.frontmatter?.title}
            />
            <Button
              iconTrailing="arrow-right"
              to={next?.fields?.slug}
              title={next?.frontmatter?.title}
            /> */}
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
