import React from "react";
import { createUrlPathFromArray } from "../../../../../utils/create_url_path_from_array";
import Box from "../../../atoms/box/box";
import Button from "../../../atoms/button/button";

interface IBlogCategoriesList {
  categories: {
    categoryTitle: string;
    categoryLink: string;
  };
  currentCategoryTitle?: string;
}

const BLOG_SLUG = createUrlPathFromArray(["blog"]);

export default function BlogCategoriesList({
  categories,
  currentCategoryTitle,
}: IBlogCategoriesList) {
  if (categories && categories.length > 0)
    return (
      <Box
        display="flex"
        gap="spacing1"
        marginTop="spacing3"
        marginBottom="spacing6"
      >
        {categories.map((category) => {
          const isActive = category.categoryTitle === currentCategoryTitle;
          const categorySlug = createUrlPathFromArray([
            "blog",
            category.categorySlug,
          ]);
          return (
            <Button
              variant={isActive ? "primary" : "secondary"}
              size="sm"
              title={category.categoryTitle}
              to={isActive ? BLOG_SLUG : categorySlug}
              trailingIcon={isActive ? "times" : undefined}
            />
          );
        })}
      </Box>
    );
  return null;
}
