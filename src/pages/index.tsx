import React from "react";
import { graphql } from "gatsby";
import Page from "../components/organisms/page/page";
import SectionHomepageBio from "../components/sections/homepage/section_homepage_hero/section_homepage_hero";
import { SectionFeaturedProjects } from "../components/sections/section_featured_projects/section_featured_projects";
import { SectionLatestBlogPosts } from "../components/sections/section_latest_blog_posts/section_latest_blog_posts";

interface IHomepageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Homepage = ({ data }: IHomepageProps) => {
  const { site } = data;
  const siteTitle = site.siteMetadata.title || "Title";

  return (
    <Page title={siteTitle}>
      <SectionHomepageBio />
      <SectionLatestBlogPosts />
      <SectionFeaturedProjects />
    </Page>
  );
};

export default Homepage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
