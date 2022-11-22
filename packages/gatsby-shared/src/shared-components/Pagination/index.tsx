import React from "react";
import { Box, Button } from "@alexmcgovern/boondoggle.design";
import { createPathFromSegmentArray } from "@alexmcgovern/utils";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { getPaginationArray } from "./helper_functions/filter_page_array/get_pagination_array";

export interface PaginationProps {
  basePath: string;
  currentPage: number;
  pageCount: number;
}

export function Pagination({
  basePath,
  currentPage,
  pageCount,
}: PaginationProps) {
  const firstPath = createPathFromSegmentArray([basePath, 1]);
  const previousPath = createPathFromSegmentArray([basePath, currentPage - 1]);

  const isFirstOrPrevDisabled = currentPage <= 1;

  const nextPath = createPathFromSegmentArray([basePath, currentPage + 1]);
  const lastPath = createPathFromSegmentArray([basePath, pageCount]);

  const isNextOrLastDisabled = currentPage >= pageCount;

  const pageArray = getPaginationArray({ pageCount, currentPage });

  return (
    <Box
      display="flex"
      justifyContent="center"
      marginY="spacing3"
      gap="spacing1"
      as="nav"
    >
      <Button
        appearance="secondary"
        size="md_square"
        iconLeading={faAnglesLeft}
        as={Link}
        to={firstPath}
        isDisabled={isFirstOrPrevDisabled}
      />

      <Button
        appearance="secondary"
        size="md_square"
        iconLeading={faAngleLeft}
        as={Link}
        to={previousPath}
        isDisabled={isFirstOrPrevDisabled}
      />

      {pageArray.length > 0 &&
        pageArray.map((page) => {
          const link = createPathFromSegmentArray([basePath, page]);
          const appearance = page === currentPage ? "primary" : "secondary";
          const id = `pagination-button-${currentPage}`;
          return (
            <Button
              id={id}
              appearance={appearance}
              size="md_square"
              to={link}
              as={Link}
            >
              {page.toString()}
            </Button>
          );
        })}

      <Button
        appearance="secondary"
        size="md_square"
        iconTrailing={faAngleRight}
        as={Link}
        to={nextPath}
        isDisabled={isNextOrLastDisabled}
      />

      <Button
        appearance="secondary"
        size="md_square"
        iconTrailing={faAnglesRight}
        as={Link}
        to={lastPath}
        isDisabled={isNextOrLastDisabled}
      />
    </Box>
  );
}
