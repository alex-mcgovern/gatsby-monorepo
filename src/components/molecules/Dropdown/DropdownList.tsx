import React, { useContext } from "react";
import checkHasLength from "../../../utils/map_if_has_length/map_if_has_length";
import { BoxNew } from "../../atoms/box_new/box_new";
import { DownshiftContext } from "./DownshiftContext";
import * as styles from "./DropdownList.css";
import DropdownListItem from "./DropdownListItem";

interface DropdownListProps {
  isOpen?: boolean;
  getItemProps?(...args: unknown[]): {};
  size?: TSizeProp;
  inputValue: string | null;
  dropdownItems: IDownshiftItem[];
  highlightedIndex: number | null;
  selectedItem?: IDownshiftItem | null;
}

export const DropdownList = ({ size }: DropdownListProps) => {
  const { getMenuProps, isOpen, items } = useContext(DownshiftContext);

  return (
    <BoxNew as="ul" className={styles.dropdownWrapper} {...getMenuProps()}>
      {isOpen &&
        checkHasLength(items) &&
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
    </BoxNew>
  );
};
