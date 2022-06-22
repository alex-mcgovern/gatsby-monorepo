import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_accessibility_styles.css";
import { resetButton } from "../../../styles/resets/reset_button.css";
import { button } from "./button.css";
import ButtonInnerContent from "./components/button_inner_content/button_inner_content";
import { IButton } from "./i_button";

export default function Button({
  to,
  title,
  appearance,
  id,
  display,
  width,
  size,
  iconLeading,
  iconTrailing,
  onClick,
  isDisabled,
  type,
  ...rest
}: IButton) {
  const isInternalLink = to && /^\/(?!\/)/.test(to);

  const buttonStyle = classNames([
    resetButton,
    button({
      appearance,
      size,
    }),
    getFunctionalClassNames({
      display,
      width,
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
        iconTrailing={iconTrailing}
        title={title}
      />
    </button>
  );
}
Button.defaultProps = {
  appearance: "primary",
  size: "sm",
  type: "button",
};
