import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { Link } from "gatsby";
import {
  FunctionalClassNames,
  geFunctionalClassNames,
} from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_focus_ring_styles.css";
import { resetButton } from "../../../styles/resets/reset_button.css";
import { TButtonVariants, getButtonStyle } from "./button.css";
import ButtonInnerContent from "./components/button_inner_content/button_inner_content";

export interface ButtonCustomisation {
  display?: FunctionalClassNames["display"];
  width?: FunctionalClassNames["width"];
  marginTop?: FunctionalClassNames["marginTop"];
  marginBottom?: FunctionalClassNames["marginBottom"];
  justifyContent?: FunctionalClassNames["justifyContent"];
}

export type ButtonVariants = {
  appearance?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
};
export interface IButton {
  /** Variant prop controlling button appearance. Note: Auto-generated documentation for this is still a WIP, so variant styles are missing. */
  variant?: TButtonVariants;
  /** Customisation exposes utility-first styles as props. */
  customisation?: ButtonCustomisation;
  /** FontAwesome icon shown on the left side of button. */
  iconLeading?: IconProp;
  /** FontAwesome icon shown on the right side of button. */
  iconTrailing?: IconProp;
  /** Controls whether to show an animated Fontawesome spinner in the trailing icon slot. Only works with buttons with onClick handlers */
  isLoading?: boolean;
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

export const Button = ({
  to,
  title,
  id,
  customisation,
  iconLeading,
  iconTrailing,
  isLoading,
  onClick,
  isDisabled,
  type,
  variant,
  ...rest
}: IButton) => {
  const isInternalLink = to && /^\/(?!\/)/.test(to);

  const buttonStyle = classNames([
    resetButton,
    getButtonStyle(variant),
    geFunctionalClassNames({
      ...customisation,
    }),
    getFocusRingStyles({}),
  ]);

  if (!isDisabled && to && isInternalLink) {
    return (
      <Link className={buttonStyle} to={to} onClick={onClick} id={id} {...rest}>
        <ButtonInnerContent
          iconLeading={iconLeading}
          iconTrailing={iconTrailing}
          title={title}
        />
      </Link>
    );
  }
  if (!isDisabled && to && !isInternalLink) {
    return (
      <a className={buttonStyle} href={to} onClick={onClick} id={id} {...rest}>
        <ButtonInnerContent
          iconLeading={iconLeading}
          iconTrailing={iconTrailing}
          title={title}
        />
      </a>
    );
  }
  return (
    <button
      className={buttonStyle}
      disabled={isDisabled}
      onClick={onClick}
      id={id}
      type={type}
      {...rest}
    >
      <ButtonInnerContent
        iconLeading={iconLeading}
        iconTrailing={isLoading ? "spinner" : iconTrailing}
        title={title}
        isIconSpinning={isLoading}
      />
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};
