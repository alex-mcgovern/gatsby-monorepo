import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import * as classes from "./search_result_list_item.module.scss";

export default function SearchResultListItem({
  getItemProps,
  highlightedIndex,
  index,
  item,
  selectedItem,
}) {
  const linkClassNames = classNames(classes.result_link, {
    [classes.result_is_highlighted]: highlightedIndex === index,
    [classes.result_is_selected]: selectedItem === item,
  });
  return (
    <li
      className={classes.result_wrapper}
      {...getItemProps({
        key: item.value,
        index,
        item,
      })}
    >
      <Link className={linkClassNames} to={item.link}>
        {item.value}
      </Link>
    </li>
  );
}

SearchResultListItem.propTypes = {
  getItemProps: PropTypes.func,
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  item: PropTypes.shape({
    link: PropTypes.string,
    value: PropTypes.string,
  }),
  selectedItem: PropTypes.shape({}),
};

SearchResultListItem.defaultProps = {
  getItemProps: () => {},
  highlightedIndex: null,
  index: null,
  item: null,
  selectedItem: null,
};
