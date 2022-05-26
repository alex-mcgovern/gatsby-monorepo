import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./search_input.module.scss";

export default function SearchInput({
  getInputProps,
  placeholder,
  leadingIcon,
  size,
}) {
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

SearchInput.propTypes = {
  getInputProps: PropTypes.func,
  placeholder: PropTypes.string,
  leadingIcon: PropTypes.string,
  size: PropTypes.oneOf(["lg", "md", "sm"]),
};

SearchInput.defaultProps = {
  getInputProps: () => {},
  placeholder: "Search",
  leadingIcon: "search",
  size: "md",
};
