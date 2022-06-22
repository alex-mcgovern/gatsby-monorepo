import React from "react";
import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";
import Box from "../../atoms/box/box";
import Button from "../../atoms/button/button";
import getPaginationArray from "./helper_functions/filter_page_array/get_pagination_array";

interface PaginationProps {
  basePath: string;
  currentPage: number;
  pageCount: number;
}

function Pagination({ basePath, currentPage, pageCount }: PaginationProps) {
  const firstPath = createUrlPathFromArray([basePath, 1]);
  const previousPath = createUrlPathFromArray([basePath, currentPage - 1]);

  const isFirstOrPrevDisabled = currentPage <= 1;

  const nextPath = createUrlPathFromArray([basePath, currentPage + 1]);
  const lastPath = createUrlPathFromArray([basePath, pageCount]);

  const isNextOrLastDisabled = currentPage >= pageCount;

  const pageArray = getPaginationArray({ pageCount, currentPage });

  return (
    <Box
      display="flex"
      as="nav"
      justifyContent={"center"}
      marginY="spacing3"
      gap="spacing3"
    >
      <Button
        appearance="secondary"
        leadingIcon="angles-left"
        to={firstPath}
        isDisabled={isFirstOrPrevDisabled}
      />
      <Button
        appearance="secondary"
        leadingIcon="arrow-left"
        to={previousPath}
        isDisabled={isFirstOrPrevDisabled}
      />
      {pageArray.length > 0 &&
        pageArray.map((page) => {
          const link = createUrlPathFromArray([basePath, page]);
          const variant = page === currentPage ? "primary" : "secondary";
          return <Button appearance={variant} to={link} title={page} />;
        })}
      <Button
        appearance="secondary"
        trailingIcon="arrow-right"
        to={nextPath}
        isDisabled={isNextOrLastDisabled}
      />
      <Button
        appearance="secondary"
        trailingIcon="angles-right"
        to={lastPath}
        isDisabled={isNextOrLastDisabled}
      />
    </Box>
  );
}

Pagination.defaultProps = {
  basePath: null,
  currentPage: 0,
  pageCount: 0,
};

export default Pagination;
