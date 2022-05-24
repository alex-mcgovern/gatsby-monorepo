import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "../../../utils/font_awesome";
import * as classes from "./button.module.scss";

export default function Button({
  to,
  title,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  onClick,
  isDisabled,
}) {
  const isInternalLink = /^\/(?!\/)/.test(to);

  const buttonClassNames = classNames(classes.button, {
    [classes.button_variant_primary]: variant === "primary",
    [classes.button_variant_secondary]: variant === "secondary",
    [classes.button_size_sm]: size === "sm",
    [classes.button_size_lg]: size === "lg",
    [classes.button_is_disabled]: isDisabled,
  });

  if (!isDisabled && to && isInternalLink) {
    return (
      <Link className={buttonClassNames} to={to} onClick={onClick}>
        {leadingIcon && <FontAwesomeIcon icon={leadingIcon} />}
        {title}
        {trailingIcon && <FontAwesomeIcon icon={trailingIcon} />}
      </Link>
    );
  }
  if (!isDisabled && to && !isInternalLink) {
    return (
      <a className={buttonClassNames} href={to} onClick={onClick}>
        {leadingIcon && <FontAwesomeIcon icon={leadingIcon} />}
        {title}
        {trailingIcon && <FontAwesomeIcon icon={trailingIcon} />}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={buttonClassNames}
      disabled={isDisabled}
      href={to}
      onClick={onClick}
    >
      {leadingIcon && <FontAwesomeIcon icon={leadingIcon} />}
      {title}
      {trailingIcon && <FontAwesomeIcon icon={trailingIcon} />}
    </button>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  leadingIcon: PropTypes.string,
  isDisabled: PropTypes.bool,
  trailingIcon: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  leadingIcon: null,
  trailingIcon: null,
  to: null,
  isDisabled: false,
  title: null,
  variant: "primary",
  size: null,
  onClick: () => {},
};
