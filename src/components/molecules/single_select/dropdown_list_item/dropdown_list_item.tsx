import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { resetButton } from "../../../../styles/resets/reset_button.css";
import * as styles from "./dropdown_list_item.css";

interface DropdownListItemProps {
  selectItem(...args: unknown[]): unknown;
  getItemProps(...args: unknown[]): unknown;
  highlightedIndex: number | null;
  index: number;
  size?: "sm" | "md" | "lg";
  item: IDownshiftItem;
  selectedItem?: {};
}

export default function DropdownListItem({
  getItemProps,
  highlightedIndex,
  index,
  item,
  size,
  selectedItem,
  selectItem,
}: DropdownListItemProps) {
  const dropdownStyles = styles.getDropdownStyles({
    size,
  });

  const linkClassNames = classNames(dropdownStyles, resetButton, {
    [styles.isHighlighted]: highlightedIndex === index,
    [styles.isSelected]: selectedItem === item,
  });

  // const onClick = () => {
  //   alert("yas");
  //   return selectItem(item);
  // };

  return (
    <li className={styles.resultWrapper}>
      {item.link && (
        <Link className={linkClassNames} to={item.link}>
          {item.value}
        </Link>
      )}
      <button
        type="button"
        className={linkClassNames}
        {...getItemProps({
          key: item.value,
          index,
          item,
        })}
      >
        {item.label}
      </button>
    </li>
  );
}

DropdownListItem.defaultProps = {
  selectItem: () => {},
  getItemProps: () => {},
  index: null,
  highlightedIndex: null,
  selectedItem: null,
  item: null,
};
