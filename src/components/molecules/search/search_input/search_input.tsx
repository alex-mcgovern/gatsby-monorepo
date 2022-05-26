import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import * as classes from "./search_input.module.scss";

interface SearchInputProps {
  getInputProps(...args: unknown[]): unknown;
  placeholder?: string;
  leadingIcon?: IconProp;
  size?: "lg" | "md" | "sm";
}

export default function SearchInput({
  getInputProps,
  placeholder,
  leadingIcon,
  size,
}: SearchInputProps) {
  const inputClassNames = classNames(classes.input_wrapper, {
    [classes.size_lg]: size === "lg",
    [classes.size_md]: size === "md",
    [classes.size_sm]: size === "sm",
  });
  return (
    <div className={inputClassNames}>
      {leadingIcon && (
        <FontAwesomeIcon className={classes.input_icon} icon={leadingIcon} />
      )}

      <input
        className={classes.input_inner}
        placeholder={placeholder}
        {...getInputProps()}
      />
    </div>
  );
}

SearchInput.defaultProps = {
  getInputProps: () => {},
  placeholder: "Search",
  leadingIcon: "search",
  size: "md",
};
