import type { LegacyRef } from "react";
import React, { forwardRef } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Label } from "../Label";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { getFocusRingStyles } from "../__css__/recipes/get_focus_ring_styles.css";
import { resetButton } from "../__css__/resets/reset_button.css";
import * as styles from "./button.css";
import type { ButtonVariants } from "./button.css";

export interface ButtonProps {
  /** Variant p rop controlling button appearance. Note: Auto-generated documentation for this is still a WIP, so variant styles are missing. */
  variant?: ButtonVariants;
  /** Customisation exposes utility-first styles as props. */
  customisation?: GetSprinklesArgs;
  /** FontAwesome icon shown on the left side of button. */
  iconLeading?: IconProp;
  /** FontAwesome icon shown on the right side of button. */
  iconTrailing?: IconProp;
  /** Controls whether to show an animated Fontawesome spinner in the trailing icon slot. Only works with buttons with onClick handlers */
  isLoading?: boolean;
  /** Whether to show the label. (Label value will also be used as accessible `name` on the input element.) */
  isLabelVisible?: boolean;
  /** Label text. (Will also be used as accessible `name` on the input element.) */
  label?: string;
  /** Used as the html ID. */
  id?: string;
  /** If `true`, the component is disabled. */
  isDisabled?: boolean;
  /** Callback on click. */
  onClick?(...args: unknown[]): unknown;
  /** The string shown in the button. */
  title?: string;
  /** The string URI to link to. Supports relative and absolute URIs. */
  to?: string;
  /** Allow overriding html button type attribute. */
  type?: "submit" | "button";
}

export const Button = forwardRef(
  (
    {
      to,
      title,
      label,
      id,
      customisation,
      iconLeading,
      iconTrailing,
      isLoading,
      isLabelVisible,
      onClick,
      isDisabled,
      type,
      variant,
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const buttonStyle = clsx([
      resetButton,
      styles.getButtonStyle(variant),
      getFocusRingStyles({}),
      getSprinkles({
        ...customisation,
      }),
    ]);

    const trailingIconClassnames = clsx(styles.iconTrailing, {
      [styles.iconSpin]: isLoading,
    });

    return (
      <>
        {label && id && (
          <Label isLabelVisible={isLabelVisible} label={label} id={id} />
        )}
        <button
          className={buttonStyle}
          disabled={isDisabled}
          onClick={onClick}
          // to={to}
          id={id}
          type={type}
          ref={ref as LegacyRef<HTMLButtonElement>}
          {...rest}
        >
          {iconLeading && (
            <FontAwesomeIcon
              className={styles.iconLeading}
              size={variant?.size}
              icon={iconLeading}
            />
          )}
          {title && <span>{title}</span>}
          {iconTrailing && (
            <FontAwesomeIcon
              className={trailingIconClassnames}
              size={variant?.size}
              icon={isLoading ? "spinner" : iconTrailing}
            />
          )}
        </button>
      </>
    );
  }
);
