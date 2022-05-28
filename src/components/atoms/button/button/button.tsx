import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { Link } from "gatsby";
import "../../../../utils/font_awesome";
import ButtonInnerContent from "../button_inner_content/button_inner_content";
import * as classes from "./button.module.scss";

interface ButtonProps {
  to?: string;
  title?: string | number;
  leadingIcon?: IconProp;
  isDisabled?: boolean;
  trailingIcon?: IconProp;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
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

  const buttonClassNames = classNames(classes.button, {
    [classes.variant_primary]: variant === "primary",
    [classes.variant_secondary]: variant === "secondary",
    [classes.size_sm]: size === "sm",
    [classes.size_lg]: size === "lg",
  });

  if (!isDisabled && to && isInternalLink) {
    return (
      <Link className={buttonClassNames} to={to} onClick={onClick}>
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
      <a className={buttonClassNames} href={to} onClick={onClick}>
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
      className={buttonClassNames}
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
