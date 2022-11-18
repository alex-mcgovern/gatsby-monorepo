import React, { useContext } from "react";
import { Box } from "../Box";
import { DownshiftContext } from "./DownshiftContext";
import * as styles from "./DropdownList.css";
import DropdownListItem from "./DropdownListItem";
import type { DropdownItem } from "./types";

interface DropdownListProps {
  isOpen?: boolean;
  getItemProps?(...args: unknown[]): {};
  size?: TSizeProp;
  inputValue: string | null;
  dropdownItems: DropdownItem[];
  highlightedIndex: number | null;
  selectedItem?: DropdownItem | null;
}

export function DropdownList({ size }: DropdownListProps) {
  const { getMenuProps, isOpen, items } = useContext(DownshiftContext);

  return (
    <Box as="ul" className={styles.dropdownWrapper} {...getMenuProps()}>
      {isOpen &&
        items &&
        items.length > 0 &&
        items.map((item, index) => {
          return (
            <DropdownListItem
              size={size}
              index={index}
              key={item.value}
              item={item}
            />
          );
        })}
    </Box>
  );
}
