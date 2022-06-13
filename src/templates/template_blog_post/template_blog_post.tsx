import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import AlternatingLayout from "../../components/atoms/alternating_layout/alternating_layout";
import Button from "../../components/atoms/button/button/button";
import Box from "../../components/layout/box/box";
import Layout from "../../components/layout/layout/layout";
import LayoutMaxWidthContainer from "../../components/layout/layout_max_width_container/layout_max_width_container";
import Seo from "../../components/seo";

interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      excerpt: string;
      html: string;
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
    html,
  } = post;

  const siteTitle = site?.siteMetadata?.title || `Title`;
  const {} = data;
  const image = cover && getImage(cover);

  return (
    <Layout title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={description || excerpt}
      />
      <LayoutMaxWidthContainer>
        <Box as="section" marginY="spacing10">
          <AlternatingLayout ratio="2_1">
            <Box as="header" outline="dashed" marginY="spacing10">
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.description}</p>
              <h2>{post.frontmatter.date}</h2>
            </Box>
            <Box outline="dashed">
              {image && (
                <GatsbyImage alt={post.frontmatter.title} image={image} />
              )}
            </Box>
          </AlternatingLayout>
        </Box>
        <article itemScope itemType="http://schema.org/Article">
          <Box
            as="section"
            marginY="spacing3"
            marginY="spacing10"
            outline="dashed"
          >
            <section
              dangerouslySetInnerHTML={{ __html: html }}
              itemProp="articleBody"
            />
            <hr />
            <footer></footer>
          </Box>
        </article>
        <nav>
          <Box
            marginY="spacing3"
            display="flex"
            justifyContent={"space-between"}
            gap="spacing3"
            outline="dashed"
          >
            <Button
              leadingIcon="angle-left"
              to={previous?.fields?.slug}
              title={previous?.frontmatter?.title}
            />
            <Button
              trailingIcon="angle-right"
              to={next?.fields?.slug}
              title={next?.frontmatter?.title}
            />
          </Box>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          ></ul>
        </nav>
      </LayoutMaxWidthContainer>
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
      html
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
