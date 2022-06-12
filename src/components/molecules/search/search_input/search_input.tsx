import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { TFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import Input from "../../../atoms/input/input";
import * as styles from "./search_input.css";

interface SearchInputProps {
  getInputProps(...args: unknown[]): unknown;
  getRootProps(...args: unknown[]): unknown;
  placeholder?: string;
  leadingIcon?: IconProp;
  width?: TFunctionalClassNames["width"];
  size?: "sm" | "md" | "lg";
  value?: string;
}

export default function SearchInput({
  getInputProps,
  placeholder,
  leadingIcon,
  width,
  value,
  getRootProps,
  size,
  ...rest
}: SearchInputProps) {
  return (
    <Input
      width={width}
      value={value}
      placeholder={placeholder}
      {...getInputProps()}
      {...getRootProps()}
      {...rest}
    />
  );
}

SearchInput.defaultProps = {
  getRootProps: () => {},
  getInputProps: () => {},
  placeholder: "Search",
  leadingIcon: "search",
  size: "md",
};
