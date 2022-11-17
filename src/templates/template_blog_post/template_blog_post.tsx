import * as React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import slugify from "slugify";
import { BoxNew } from "../../components/atoms/box_new/box_new";
import BlogCategoriesList from "../../components/molecules/blog/blog_categories_list/blog_categories_list";
import { ListItem } from "../../components/molecules/list_item/list_item";
import RemarkMarkdown from "../../components/util_components/remark_markdown/remark_markdown";

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
    <>
      <BoxNew marginY="spacing5">
        <BoxNew as="article">
          {/** ————————————————————————————————————————————————————————————————————————————
           *      POST HEADER
           * ——————————————————————————————————————————————————————————————————————————————— */}
          <BoxNew as="header">
            {/** ————————————————————
             *      TITLE
             * ——————————————————————— */}
            <BoxNew as="h1">{post.frontmatter.title}</BoxNew>

            {/** ————————————————————
             *      DESCRIPTION
             * ——————————————————————— */}
            <BoxNew
              as="h2"
              customisation={{
                fontSize: "body_lg",
                fontWeight: "normal",
                marginTop: "none",
              }}
            >
              {post.frontmatter.description}
            </BoxNew>

            <hr />
            <BoxNew display="flex" alignItems="center" gap="spacing2">
              {/** ————————————————————
               *      DATE
               * ——————————————————————— */}
              <BoxNew
                variant={{
                  color: "accent_fg_1",
                }}
                customisation={{
                  marginY: "none",
                }}
              >
                {post.frontmatter.date}
              </BoxNew>

              {/** ————————————————————
               *      CATEGORIES
               * ——————————————————————— */}
              <BlogCategoriesList categories={categoryLinks} />
            </BoxNew>
          </BoxNew>

          {/** ————————————————————————————————————————————————————————————————————————————
           *      POST BODY
           * ——————————————————————————————————————————————————————————————————————————————— */}

          <BoxNew
            as="section"
            marginY="spacing3"
            // marginX: "auto",
          >
            {/* <section
              dangerouslySetInnerHTML={{ __html: html }}
              itemProp="articleBody"
            /> */}

            <RemarkMarkdown htmlAst={htmlAst} />
            <hr />
            <footer></footer>
          </BoxNew>

          <BoxNew
            marginY="spacing3"
            display="flex"
            justifyContent="space-between"
            gap="spacing2"
            as="nav"
          >
            <ListItem
              description={previous?.frontmatter?.title}
              link={previous?.fields?.slug}
              title="Previous"
              width="100%"
            />
            <ListItem
              description={next?.frontmatter?.title}
              link={next?.fields?.slug}
              title="Next"
              width="100%"
              textAlign="right"
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
          </BoxNew>
        </BoxNew>
      </BoxNew>
    </>
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
