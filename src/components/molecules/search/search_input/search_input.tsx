import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styles from "./search_input.css";

interface SearchInputProps {
  getInputProps(...args: unknown[]): unknown;
  getRootProps(...args: unknown[]): unknown;
  placeholder?: string;
  leadingIcon?: IconProp;
  size?: "sm" | "md" | "lg";
}

export default function SearchInput({
  getInputProps,
  placeholder,
  leadingIcon,
  getRootProps,
  size,
}: SearchInputProps) {
  const inputStyles = styles.getInputWrapperStyles({
    size,
  });

  return (
    <div className={inputStyles}>
      {leadingIcon && (
        <FontAwesomeIcon className={styles.icon} icon={leadingIcon} />
      )}

      <input
        className={styles.inputElement}
        placeholder={placeholder}
        {...getInputProps()}
        {...getRootProps()}
      />
    </div>
  );
}

SearchInput.defaultProps = {
  getRootProps: () => {},
  getInputProps: () => {},
  placeholder: "Search",
  leadingIcon: "search",
  size: "md",
};
