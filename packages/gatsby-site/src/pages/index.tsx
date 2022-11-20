import React from "react";
import { HomeBio } from "../components/HomeBio";
import { HomeFeaturedProjects } from "../components/HomeFeaturedProjects";
import { HomeLatestBlogPosts } from "../components/HomeLatestBlogPosts";

export default function Homepage() {
  return (
    <>
      <HomeBio />

      <hr />

      <HomeLatestBlogPosts />

      <HomeFeaturedProjects />
    </>
  );
}
