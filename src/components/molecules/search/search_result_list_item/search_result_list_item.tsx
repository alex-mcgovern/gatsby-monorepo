import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import * as classes from "./search_result_list_item.module.scss";

interface SearchResultListItemProps {
  getItemProps(...args: unknown[]): unknown;
  highlightedIndex?: number;
  index: number;
  item: {
    link: string;
    value: string;
  };
  selectedItem?: {};
}

export default function SearchResultListItem({
  getItemProps,
  highlightedIndex,
  index,
  item,
  selectedItem,
}: SearchResultListItemProps) {
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

SearchResultListItem.defaultProps = {
  getItemProps: () => {},
  highlightedIndex: null,
  index: null,
  item: null,
  selectedItem: null,
};
