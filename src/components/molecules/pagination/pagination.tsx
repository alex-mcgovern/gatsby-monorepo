import React from "react";
import { createUrlPathFromArray } from "../../../utils/create_url_from_path_array/create_url_path_from_array";
import { Box } from "../../atoms/box/box";
import { Button } from "../../atoms/button/button";
import getPaginationArray from "./helper_functions/filter_page_array/get_pagination_array";

export interface PaginationProps {
  basePath: string;
  currentPage: number;
  pageCount: number;
}

export const Pagination = ({
  basePath,
  currentPage,
  pageCount,
}: PaginationProps) => {
  const firstPath = createUrlPathFromArray([basePath, 1]);
  const previousPath = createUrlPathFromArray([basePath, currentPage - 1]);

  const isFirstOrPrevDisabled = currentPage <= 1;

  const nextPath = createUrlPathFromArray([basePath, currentPage + 1]);
  const lastPath = createUrlPathFromArray([basePath, pageCount]);

  const isNextOrLastDisabled = currentPage >= pageCount;

  const pageArray = getPaginationArray({ pageCount, currentPage });

  return (
    <Box
      customisation={{
        display: "flex",
        justifyContent: "center",
        marginY: "spacing3",
        gap: "spacing1",
      }}
      as="nav"
    >
      <Button
        id="pagination-button-first"
        variant={{ appearance: "secondary" }}
        iconLeading="angles-left"
        to={firstPath}
        isDisabled={isFirstOrPrevDisabled}
      />
      <Button
        id="pagination-button-previous"
        variant={{ appearance: "secondary" }}
        iconLeading="arrow-left"
        to={previousPath}
        isDisabled={isFirstOrPrevDisabled}
      />
      {pageArray.length > 0 &&
        pageArray.map((page) => {
          const link = createUrlPathFromArray([basePath, page]);
          const appearance = page === currentPage ? "primary" : "secondary";
          const id = `pagination-button-${currentPage}`;
          return (
            <Button
              id={id}
              variant={{ appearance }}
              to={link}
              title={page.toString()}
            />
          );
        })}
      <Button
        id="pagination-button-next"
        variant={{ appearance: "secondary" }}
        iconTrailing="arrow-right"
        to={nextPath}
        isDisabled={isNextOrLastDisabled}
      />
      <Button
        id="pagination-button-last"
        variant={{ appearance: "secondary" }}
        iconTrailing="angles-right"
        to={lastPath}
        isDisabled={isNextOrLastDisabled}
      />
    </Box>
  );
};

Pagination.defaultProps = {
  basePath: null,
  currentPage: 0,
  pageCount: 0,
};

export default Pagination;
