import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { Link } from "gatsby";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../../styles/functional_classnames.css";
import { getButtonA11yStyles } from "../../../../styles/recipes/get_accessibility_styles.css";
import { resetButton } from "../../../../styles/resets/reset_button.css";
import "../../../../utils/font_awesome";
import ButtonInnerContent from "../button_inner_content/button_inner_content";
import { button } from "./button.css";

interface ButtonProps {
  to?: string;
  id?: string;
  title?: string | number;
  leadingIcon?: IconProp;
  display?: TFunctionalClassNames["display"];
  isDisabled?: boolean;
  trailingIcon?: IconProp;
  variant?: "primary" | "secondary";
  size?: TSizeProp;
  onClick?(...args: unknown[]): unknown;
  width?: TFunctionalClassNames["width"];
  type?: "submit" | "button";
}

export default function Button({
  to,
  title,
  variant,
  id,
  display,
  width,
  size,
  leadingIcon,
  trailingIcon,
  onClick,
  isDisabled,
  type,
  ...rest
}: ButtonProps) {
  const isInternalLink = to && /^\/(?!\/)/.test(to);

  const buttonStyle = classNames([
    resetButton,
    button({
      color: variant,
      size,
    }),
    getFunctionalClassNames({
      display,
      width,
    }),
    getButtonA11yStyles({}),
  ]);

  if (!isDisabled && to && isInternalLink) {
    return (
      <Link className={buttonStyle} to={to} onClick={onClick} id={id} {...rest}>
        <ButtonInnerContent
          leadingIcon={leadingIcon}
          trailingIcon={trailingIcon}
          title={title}
        />
      </Link>
    );
  }
  if (!isDisabled && to && !isInternalLink) {
    return (
      <a className={buttonStyle} href={to} onClick={onClick} id={id} {...rest}>
        <ButtonInnerContent
          leadingIcon={leadingIcon}
          trailingIcon={trailingIcon}
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
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        title={title}
      />
    </button>
  );
}
Button.defaultProps = {
  variant: "primary",
  size: "md",
  type: "button",
};
