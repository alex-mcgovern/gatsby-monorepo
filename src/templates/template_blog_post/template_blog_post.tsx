import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import Box from "../../components/atoms/box/box";
import Button from "../../components/atoms/button/button";
import Typography from "../../components/atoms/typography/typography";
import Layout from "../../components/organisms/global_layout/global_layout";
import Seo from "../../components/seo";
import RemarkMarkdown from "../../components/util_components/remark_markdown/remark_markdown";
import { getFunctionalClassNames } from "../../styles/functional_classnames.css";
import { RESPONSIVE_MAX_WIDTH_PROPS } from "../../utils/shared_props/box_props";

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
    site?: {
      siteMetadata: {
        title?: string;
      };
    };
  };
}

const BlogPostTemplate = ({ data }: BlogPostTemplateProps) => {
  const { markdownRemark: post, site, previous, next } = data;
  const {
    excerpt,
    frontmatter: { cover, description },
    htmlAst,
  } = post;

  const siteTitle = site?.siteMetadata?.title || `Title`;
  const {} = data;
  const image = cover && getImage(cover);
  const imageClassNames = getFunctionalClassNames({
    borderRadius: "md",
    overflow: "hidden",
    boxShadow: "shadowLight",
    aspectRatio: "wide",
    marginBottom: "spacing3",
  });

  return (
    <Layout title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={description || excerpt}
      />
      <Box
        display="grid"
        {...RESPONSIVE_MAX_WIDTH_PROPS}
        gap="spacing3"
        alignItems="flex-start"
        gridTemplateColumns={{ mobile: "1x", tablet: "2_1", desktop: "3_1" }}
        marginY="spacing20"
      >
        {/* —————————————————————————————————————————————————————————————————————————————
        //      ARTICLE BODY                                                            
        // —————————————————————————————————————————————————————————————————————————————— */}
        <Box as="article" itemScope itemType="http://schema.org/Article">
          <Box as="section">
            <Box as="header" marginBottom="spacing10">
              <Button
                variant="tertiary"
                leadingIcon="arrow-left"
                title="Back to blog"
                to="/blog"
              />
              {/* Blog title */}
              <Typography as="h1" fontSize="h2" marginBottom="spacing1">
                {post.frontmatter.title}
              </Typography>

              {/* Date */}
              <Typography
                fontSize="h6"
                marginBottom="spacing6"
                fontWeight="medium"
                color="primary_text_lowContrast"
              >
                {post.frontmatter.date}
              </Typography>

              {/* Image */}
              {image && (
                <GatsbyImage
                  className={imageClassNames}
                  alt={post.frontmatter.title}
                  image={image}
                />
              )}
            </Box>
          </Box>

          <Box as="section" marginY="spacing3">
            {/* <section
              dangerouslySetInnerHTML={{ __html: html }}
              itemProp="articleBody"
            /> */}

            <RemarkMarkdown htmlAst={htmlAst} />
            <hr />
            <footer></footer>
          </Box>

          <Box
            marginY="spacing3"
            display="flex"
            justifyContent={"space-between"}
            gap="spacing3"
            as="nav"
          >
            <Button
              leadingIcon="arrow-left"
              to={previous?.fields?.slug}
              title={previous?.frontmatter?.title}
            />
            <Button
              trailingIcon="arrow-right"
              to={next?.fields?.slug}
              title={next?.frontmatter?.title}
            />
          </Box>
        </Box>
        {/* —————————————————————————————————————————————
        //      CATEGORIES NAV                          
        // —————————————————————————————————————————————— */}
        <Box
          backgroundColor="neutral_ui_base"
          padding="spacing3"
          borderRadius="sm"
        >
          <Button variant="secondary" to="/" title="Back to home" />
          <Button variant="secondary" to="/" title="Back to home" />
        </Box>
      </Box>
    </Layout>
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
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
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
