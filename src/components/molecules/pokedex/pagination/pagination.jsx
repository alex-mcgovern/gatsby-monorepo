import React from "react";
import PropTypes from "prop-types";
import { createUrlPathFromArray } from "../../../../../utils/create_url_path_from_array";
import Button from "../../../atoms/button/button/button.tsx";
import LayoutSectionOuter from "../../../layout/layout_section_outer/layout_section_outer";
import getPaginationArray from "./helper_functions/filter_page_array/filter_page_array";
import { buttonWrapperStyle } from "./pagination.module.scss";

function Pagination({ basePath, currentPage, pageCount }) {
  const firstPath = createUrlPathFromArray([basePath, 1]);
  const previousPath = createUrlPathFromArray([basePath, currentPage - 1]);

  const isFirstOrPrevDisabled = currentPage <= 1;

  const nextPath = createUrlPathFromArray([basePath, currentPage + 1]);
  const lastPath = createUrlPathFromArray([basePath, pageCount]);

  const isNextOrLastDisabled = currentPage >= pageCount;

  const pageArray = getPaginationArray({ pageCount, currentPage });

  return (
    <LayoutSectionOuter>
      <div className={buttonWrapperStyle}>
        <Button
          variant="secondary"
          leadingIcon="angles-left"
          to={firstPath}
          isDisabled={isFirstOrPrevDisabled}
        />
        <Button
          variant="secondary"
          leadingIcon="angle-left"
          to={previousPath}
          isDisabled={isFirstOrPrevDisabled}
        />
        {pageArray.length > 0 &&
          pageArray.map((page) => {
            const link = createUrlPathFromArray([basePath, page]);
            const variant = page === currentPage ? "primary" : "secondary";
            return <Button variant={variant} to={link} title={page} />;
          })}
        <Button
          variant="secondary"
          trailingIcon="angle-right"
          to={nextPath}
          isDisabled={isNextOrLastDisabled}
        />
        <Button
          variant="secondary"
          trailingIcon="angles-right"
          to={lastPath}
          isDisabled={isNextOrLastDisabled}
        />
      </div>
    </LayoutSectionOuter>
  );
}

Pagination.propTypes = {
  basePath: PropTypes.string,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
};

Pagination.defaultProps = {
  basePath: null,
  currentPage: 0,
  pageCount: 0,
};

export default Pagination;
