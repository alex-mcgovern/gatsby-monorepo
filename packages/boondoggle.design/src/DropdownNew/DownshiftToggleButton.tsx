/* eslint-disable react/no-children-prop */
import type { LegacyRef } from "react";
import React, { forwardRef, useContext } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import { invalidInput } from "../__css__/common/invalid_input_styles.css";
import { DownshiftContext } from "./DownshiftContext";

export interface DownshiftToggleButtonProps extends ButtonProps {
  invalid?: boolean;
}

export const DownshiftToggleButton = forwardRef(
  (
    {
      children,
      id,
      appearance = "select",
      iconTrailing = faAngleDown,
      justifyContent = "space-between",
      invalid,
      ...rest
    }: DownshiftToggleButtonProps,
    ref
  ) => {
    const { getToggleButtonProps } = useContext(DownshiftContext);

    const dropdownToggleButtonClassNames = clsx({
      [invalidInput]: invalid,
    });

    return (
      <Button
        {...rest}
        className={dropdownToggleButtonClassNames}
        appearance={appearance}
        iconTrailing={iconTrailing}
        justifyContent={justifyContent}
        {...getToggleButtonProps({
          ref: ref as LegacyRef<HTMLButtonElement>,
          id,
        })}
      >
        {children}
      </Button>
    );
  }
);
