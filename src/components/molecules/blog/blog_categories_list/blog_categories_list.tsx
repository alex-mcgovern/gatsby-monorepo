import React from "react";
import { createUrlPathFromArray } from "../../../../../utils/create_url_path_from_array";
import Box from "../../../atoms/box/box";
import Button from "../../../atoms/button/button/button";

interface IBlogCategoriesList {
  categories: {
    categoryTitle: string;
    categoryLink: string;
  };
  currentCategoryTitle?: string;
}

export default function BlogCategoriesList({
  categories,
  currentCategoryTitle,
}: IBlogCategoriesList) {
  if (categories && categories.length > 0)
    return (
      <Box display="flex" gap="spacing1" marginY="spacing3">
        {categories.map((category) => {
          const isActive = category.categoryTitle === currentCategoryTitle;
          const categorySlug = createUrlPathFromArray([
            "blog",
            category.categorySlug,
          ]);
          return (
            <Button
              variant={isActive ? "primary" : "secondary"}
              title={category.categoryTitle}
              to={categorySlug}
            />
          );
        })}
      </Box>
    );
  return null;
}
