import React from "react";
import classNames from "classnames";
import * as classes from "./button_wrapper.module.scss";

interface ButtonWrapperProps {
  isCentered?: boolean;
  children: React.ReactNode;
}

export default function ButtonWrapper({
  children,
  isCentered,
}: ButtonWrapperProps) {
  const wrapperClassNames = classNames(classes.button_wrapper, {
    [classes.isCentered]: isCentered,
  });
  return <menu className={wrapperClassNames}>{children}</menu>;
}

ButtonWrapper.defaultProps = {
  isCentered: false,
};
