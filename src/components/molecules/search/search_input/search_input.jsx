import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import * as classes from "./search_input.module.scss";

export default function SearchInput({
  getInputProps,
  placeholder,
  leadingIcon,
}) {
  return (
    <div className={classes.input_wrapper}>
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
  leadingIcon: PropTypes.leadingIcon,
};

SearchInput.defaultProps = {
  getInputProps: () => {},
  placeholder: "Search",
  leadingIcon: "search",
};
