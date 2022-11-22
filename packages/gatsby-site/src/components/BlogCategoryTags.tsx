import React from "react";
import { Box, Tag } from "@alexmcgovern/boondoggle.design";
import { createPathFromSegmentArray } from "@alexmcgovern/utils";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface IBlogCategoriesList {
  categories: IBlogCategory[];
  currentCategoryTitle?: string;
}

const BLOG_LINK = createPathFromSegmentArray(["blog"]);

export function BlogCategoriesList({
  categories,
  currentCategoryTitle,
}: IBlogCategoriesList) {
  if (categories && categories.length > 0)
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        marginY="spacing3"
        gap="spacing1"
        alignItems="center"
      >
        <Box>Tagged:</Box>
        {categories.map((category) => {
          const isActive = category.categoryTitle === currentCategoryTitle;
          const categoryLink = createPathFromSegmentArray([
            "blog",
            category.categorySlug,
          ]);

          return (
            <Tag
              id={category.categorySlug}
              key={category.categorySlug}
              variant={{
                state: isActive ? "active" : "inactive",
              }}
              title={category.categoryTitle}
              to={isActive ? BLOG_LINK : categoryLink}
              iconTrailing={isActive ? faTimes : undefined}
            />
          );
        })}
      </Box>
    );
  return null;
}
