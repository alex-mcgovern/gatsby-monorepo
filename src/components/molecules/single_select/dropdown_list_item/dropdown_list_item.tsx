import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import * as styles from "./dropdown_list_item.css";

interface DropdownListItemProps {
  getItemProps(...args: unknown[]): unknown;
  highlightedIndex: number | null;
  index: number;
  size: "sm" | "md" | "lg";
  item: {
    link: string;
    value: string;
  };
  selectedItem?: {};
}

export default function DropdownListItem({
  getItemProps,
  highlightedIndex,
  index,
  item,
  size,
  selectedItem,
}: DropdownListItemProps) {
  const dropdownStyles = styles.getDropdownStyles({
    size,
  });

  const linkClassNames = classNames(dropdownStyles, {
    [styles.isHighlighted]: highlightedIndex === index,
    [styles.isSelected]: selectedItem === item,
  });

  return (
    <li
      className={styles.resultWrapper}
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

DropdownListItem.defaultProps = {
  getItemProps: () => {},
  index: null,
  highlightedIndex: null,
  selectedItem: null,
  item: null,
};
