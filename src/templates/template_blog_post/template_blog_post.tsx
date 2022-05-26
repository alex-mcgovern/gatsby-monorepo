import * as React from "react";
import { Link, graphql } from "gatsby";
import { ImageDataLike, getImage } from "gatsby-plugin-image";
import Button from "../../components/atoms/button/button/button";
import ButtonWrapper from "../../components/atoms/button/button_wrapper/button_wrapper";
import Layout from "../../components/layout/layout/layout";
import LayoutMaxWidthContainer from "../../components/layout/layout_max_width_container/layout_max_width_container";
import LayoutSectionOuter from "../../components/layout/layout_section_outer/layout_section_outer";
import BlogHero from "../../components/molecules/blog/blog_hero/blog_hero";
import Bio from "../../components/molecules/header/bio/bio";
import Seo from "../../components/seo";
import * as classes from "./template_blog_post.module.scss";

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
  console.log(data);
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
        <BlogHero
          date={post.frontmatter.date}
          image={image}
          title={post.frontmatter.title}
        />
        <article
          className={classes.blog_post}
          itemScope
          itemType="http://schema.org/Article"
        >
          <LayoutSectionOuter>
            <section
              dangerouslySetInnerHTML={{ __html: html }}
              itemProp="articleBody"
            />
            <hr />
            <footer></footer>
          </LayoutSectionOuter>
        </article>
        <nav className={classes.blog_post_nav}>
          <ButtonWrapper isSpaceBetween>
            <Button
              to={previous?.fields?.slug}
              title={previous?.frontmatter?.title}
            />
            <Button to={next?.fields?.slug} title={next?.frontmatter?.title} />
          </ButtonWrapper>
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
