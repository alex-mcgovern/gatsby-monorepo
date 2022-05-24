import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import * as classes from "./single_select_dropdown_list_item.module.scss";

export default function SingleSelectDropdownListItem({
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

SingleSelectDropdownListItem.propTypes = {
  getItemProps: PropTypes.func,

  index: PropTypes.number,
  highlightedIndex: PropTypes.number,
  selectedItem: PropTypes.shape({}),
  item: PropTypes.shape({}),
};

SingleSelectDropdownListItem.defaultProps = {
  getItemProps: () => {},

  index: null,
  highlightedIndex: null,
  selectedItem: null,
  item: null,
};
