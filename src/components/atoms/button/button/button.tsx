import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { Link } from "gatsby";
import { getButtonA11yStyles } from "../../../../styles/recipes/get_accessibility_styles.css";
import "../../../../utils/font_awesome";
import ButtonInnerContent from "../button_inner_content/button_inner_content";
import { button } from "./button.css";

interface ButtonProps {
  to?: string;
  title?: string | number;
  leadingIcon?: IconProp;
  isDisabled?: boolean;
  trailingIcon?: IconProp;
  variant?: "primary" | "secondary";
  size?: TSizeProp;
  onClick?(...args: unknown[]): unknown;
}

export default function Button({
  to,
  title,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  onClick,
  isDisabled,
}: ButtonProps) {
  const isInternalLink = to && /^\/(?!\/)/.test(to);

  const buttonStyle = classNames([
    button({
      color: variant,
      size: size,
      rounded: true,
    }),
    getButtonA11yStyles({}),
  ]);

  if (!isDisabled && to && isInternalLink) {
    return (
      <Link className={buttonStyle} to={to} onClick={onClick}>
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
      <a className={buttonStyle} href={to} onClick={onClick}>
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
      type="button"
      className={buttonStyle}
      disabled={isDisabled}
      onClick={onClick}
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
};
