import React from "react";
import { createUrlPathFromArray } from "../../../../utils/create_url_from_path_array/create_url_path_from_array";
import { Box } from "../../../atoms/box/box";
import { Tag } from "../../../atoms/tag/tag";

interface IBlogCategoriesList {
  categories: IBlogCategory[];
  currentCategoryTitle?: string;
}

const BLOG_LINK = createUrlPathFromArray(["blog"]);

export default function BlogCategoriesList({
  categories,
  currentCategoryTitle,
}: IBlogCategoriesList) {
  if (categories && categories.length > 0)
    return (
      <Box
        customisation={{
          display: "flex",
          flexWrap: "wrap",
          marginY: "spacing3",
          gap: "spacing1",
        }}
      >
        {categories.map((category) => {
          const isActive = category.categoryTitle === currentCategoryTitle;
          const categoryLink = createUrlPathFromArray([
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
              iconTrailing={isActive ? "times" : undefined}
            />
          );
        })}
      </Box>
    );
  return null;
}
