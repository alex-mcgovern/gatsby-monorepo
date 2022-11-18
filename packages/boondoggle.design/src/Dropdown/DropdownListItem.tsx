import React, { useContext } from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { resetButton } from "../__css__/resets/reset_button.css";
import { DownshiftContext } from "./DownshiftContext";
import * as styles from "./DropdownListItem.css";
import { DropdownItem } from "./types";

interface DropdownListItemProps {
  selectItem(...args: unknown[]): unknown;
  getItemProps(...args: unknown[]): {};
  highlightedIndex: number | null;
  index: number;
  size?: TSizeProp;
  item: DropdownItem;
  selectedItem?: DropdownItem | null;
}

export default function DropdownListItem({
  item,
  size,
  index,
}: DropdownListItemProps) {
  const dropdownStyles = styles.getDropdownStyles({
    size,
  });

  const { getItemProps, selectedItem } = useContext(DownshiftContext);

  const linkClassNames = clsx(dropdownStyles, resetButton, {
    // [styles.isHighlighted]: highlightedIndex === index,
    [styles.isSelected]: selectedItem === item,
  });

  return (
    <li className={styles.resultWrapper}>
      {item.link ? (
        <Link className={linkClassNames} to={item.link}>
          {item.value}
        </Link>
      ) : (
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
      )}
    </li>
  );
}
