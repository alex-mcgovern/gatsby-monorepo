import type { ComponentPropsWithoutRef, ElementType } from "react";
import React, { createElement, forwardRef } from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import type { IconProps } from "../Icon";
import { Icon } from "../Icon";
import type { VariantInteractiveElementSizeEnum } from "../__css__/common/variant_interactive_element_size.css";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import type { VariantButtonColorEnum } from "./button-color.css";
import { getButtonStyles, iconStyle } from "./button.css";
import { buttonTheme } from "./button.theme.css";
import type { VariantButtonAppearanceEnum } from "./variantButtonAppearance.css";

// <TElement extends ElementType>

export interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    Omit<GetSprinklesArgs, "color"> {
  /** Allow polymorphism, compose `Button` as any other element or component. */
  as?: ElementType;
  /** FontAwesome icon shown on the left side of button. */
  iconLeading?: IconProps["icon"];
  /** Props for leading icon */
  iconLeadingProps?: Omit<IconProps, "icon">;
  /** FontAwesome icon shown on the right side of button. */
  iconTrailing?: IconProps["icon"];
  /** Props for trailing icon */
  iconTrailingProps?: Omit<IconProps, "icon">;
  /** Title for button, shown in the UI */
  name?: string;
  /** HTML button type, defaults to `button`. */
  type?: "button" | "submit" | "reset";
  /** Size of the button element */
  size?: VariantInteractiveElementSizeEnum;
  /** Color for the button */
  color?: VariantButtonColorEnum;
  /** Appearance for the button */
  appearance?: VariantButtonAppearanceEnum;
}

/** Renders a button component. Incorporates website-specific Gatsby link logic */
export const Button = forwardRef(
  (
    {
      appearance = "primary",
      as: element = "button",
      children,
      className: userClassName,
      color,
      disabled,
      iconLeading,
      iconLeadingProps,
      iconTrailing,
      iconTrailingProps,
      id,
      size = "md",
      type = "button",
      ...rest
    }: ButtonProps,
    ref
  ) => {
    /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const buttonClassNames = clsx(
      buttonTheme,
      getButtonStyles({ appearance, color, size }),
      getSprinkles(atomProps),
      userClassName
    );

    return createElement(
      element,
      /** Props */
      {
        ref,
        disabled,
        id,
        className: buttonClassNames,
        /** Conditionally spread `button` attributes */
        ...(element === "button" && {
          disabled,
          "aria-disabled": disabled,
          type,
        }),
        ...otherProps,
      },
      /** Child nodes */
      iconLeading && (
        <Icon className={iconStyle} icon={iconLeading} {...iconLeadingProps} />
      ),
      children,
      iconTrailing && (
        <Icon
          className={iconStyle}
          icon={iconTrailing}
          {...iconTrailingProps}
        />
      )
    );
  }
);
