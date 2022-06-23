import React from "react";
import { createUrlPathFromArray } from "../../../../../utils/create_url_from_path_array/create_url_path_from_array";
import Box from "../../../atoms/box/box";
import Button from "../../../atoms/button/button";

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
        display="flex"
        gap="spacing1"
        marginTop="spacing3"
        marginBottom="spacing6"
      >
        {categories.map((category) => {
          const isActive = category.categoryTitle === currentCategoryTitle;
          const categoryLink = createUrlPathFromArray([
            "blog",
            category.categorySlug,
          ]);

          return (
            <Button
              appearance={isActive ? "primary" : "secondary"}
              size="sm"
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
