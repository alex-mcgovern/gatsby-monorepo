import type { LegacyRef, ReactNode } from "react";
import React, { forwardRef, useContext } from "react";
import clsx from "clsx";
import { Box } from "../Box";
import { DownshiftContext } from "./DownshiftContext";
import * as styles from "./DownshiftMenu.css";

interface DownshiftMenuProps {
  children: ReactNode;
}

export const DownshiftMenu = forwardRef(
  ({ children, ...rest }: DownshiftMenuProps, ref) => {
    const { getMenuProps, isOpen } = useContext(DownshiftContext);

    const dropdownWrapperStyles = clsx(styles.dropdownListWrapper, {
      [styles.dropdownWrapperClosed]: !isOpen,
    });

    /**
     * Note: `DownshiftMenu` *must* not be in a conditional render, or
     * downshift's `getMenuProps` will be unable to apply a ref and throw an error
     */
    return (
      <Box
        // as="ul"
        className={dropdownWrapperStyles}
        {...getMenuProps({ ...rest, ref: ref as LegacyRef<HTMLElement> })}
      >
        {children}
      </Box>
    );
  }
);
