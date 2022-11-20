import type { ReactNode, Ref } from "react";
import React, { forwardRef } from "react";
import clsx from "clsx";
import { Box } from "../Box";
import type { ButtonProps } from "../Button";
import type { DropdownItem } from "../Dropdown/types";
import type { VariantInteractiveElementSizeEnum } from "../__css__/common/variant_interactive_element_size.css";
import * as styles from "./DownshiftListItem.css";

export interface DownshiftListItemInnerProps {
  isDropdownItemSelected?: boolean;
  item: DropdownItem;
  size?: ButtonProps["size"];
}

export interface DownshiftListItemProps {
  isHighlighted: boolean;
  size?: VariantInteractiveElementSizeEnum;
  item: DropdownItem;
  isDropdownItemSelected?: boolean;
  children: ReactNode;
}

export const DownshiftListItem = forwardRef(
  (
    {
      item,
      size,
      isHighlighted,
      isDropdownItemSelected,
      children,
      ...rest
    }: DownshiftListItemProps,
    ref
  ) => {
    const linkClassNames = clsx(
      styles.getListItemStyles({
        size,
      }),
      {
        [styles.isHighlighted]: isHighlighted,
        [styles.isSelected]: isDropdownItemSelected,
      }
    );

    // const link = item.link && createInternalLink(item.link);
    // if (link) {
    //   return (
    //     <Link
    //       id={item.label}
    //       link={link}
    //       className={linkClassNames}
    //       {...rest}
    //       ref={ref as Ref<HTMLAnchorElement>}
    //     >
    //       {children}
    //     </Link>
    //   );
    // }

    return (
      <Box
        as="span"
        id={item.label}
        className={linkClassNames}
        {...rest}
        ref={ref as Ref<HTMLElement>}
      >
        {children}
      </Box>
    );
  }
);
