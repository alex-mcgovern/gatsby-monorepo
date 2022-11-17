import React from "react";
import { BoxNew } from "../../atoms/box_new/box_new";
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
    <BoxNew as="section" marginY="spacing4">
      <BoxNew as="header">
        <BoxNew as="h1">Blog</BoxNew>
        <BoxNew as="p">
          Stuff that I've done, or am interested in. Part brain-dump, part
          tutorial, part experience journal.
        </BoxNew>
      </BoxNew>
      <hr />
      <BlogCategoriesList
        categories={allCategories}
        currentCategoryTitle={currentCategoryTitle}
      />
      <BoxNew
        as="section"
        display="grid"
        gap="spacing2"
        gridTemplateColumns={{ desktop: "4x", tablet: "2x", mobile: "1x" }}
      >
        {posts &&
          posts.length > 0 &&
          posts.map((post) => {
            return (
              <ListItem
                aspectRatio="wide"
                key={post.fields.slug}
                title={post.frontmatter.title || post.fields.slug}
                subtitle={post.frontmatter.date}
                description={post.frontmatter.description || post.excerpt}
                link={post.fields.slug}
              />
            );
          })}
      </BoxNew>

      {pageCount && pageCount > 1 && (
        <Pagination
          basePath={PAGINATION_BASE_PATH}
          currentPage={currentPage}
          pageCount={pageCount}
        />
      )}
    </BoxNew>
  );
}
