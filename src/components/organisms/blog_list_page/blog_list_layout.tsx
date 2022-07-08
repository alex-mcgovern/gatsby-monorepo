import React from "react";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../../utils/shared_props/box_props";
import { Box } from "../../atoms/box/box";
import { Typography } from "../../atoms/typography/typography";
import BlogCategoriesList from "../../molecules/blog/blog_categories_list/blog_categories_list";
import { ListItem } from "../../molecules/list_item/list_item";
import { Pagination } from "../../molecules/pagination/pagination";

const PAGINATION_BASE_PATH = "blog";

interface BlogListLayoutProps {
  currentPage: number;
  pageCount: number;
  allCategories: IBlogCategory[];
  currentCategoryTitle?: string;
  siteTitle: string;
  posts: IMarkdownRemarkBlogPost[];
}

export default function BlogListLayout({
  currentPage,
  pageCount,
  allCategories,
  currentCategoryTitle,
  siteTitle,
  posts,
}: BlogListLayoutProps) {
  return (
    <Box
      as="section"
      customisation={{
        ...BOX_CUSTOMISATION_SECTION_SPACING,
      }}
    >
      <Typography as="h1">Blog</Typography>

      <Box as="header" customisation={{}}>
        <Typography as="p">
          Stuff that I've done, or am interested in. Part brain-dump, part
          tutorial, part experience journal.
        </Typography>
        <BlogCategoriesList
          categories={allCategories}
          currentCategoryTitle={currentCategoryTitle}
        />
      </Box>
      <hr />
      <Box
        as="section"
        customisation={{
          marginTop: "spacing4",
          display: "grid",
          gap: "spacing2",
          gridTemplateColumns: { desktop: "3x", tablet: "2x", mobile: "1x" },
        }}
      >
        {posts &&
          posts.length > 0 &&
          posts.map((post) => {
            return (
              <ListItem
                customisation={{ marginTop: "spacing3" }}
                aspectRatio="wide"
                title={post.frontmatter.title || post.fields.slug}
                subtitle={post.frontmatter.date}
                description={post.frontmatter.description || post.excerpt}
                link={post.fields.slug}
              />
            );
          })}
      </Box>

      {pageCount && pageCount > 1 && (
        <Pagination
          basePath={PAGINATION_BASE_PATH}
          currentPage={currentPage}
          pageCount={pageCount}
        />
      )}
    </Box>
  );
}
