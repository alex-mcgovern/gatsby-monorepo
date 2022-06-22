import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { TFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import Input from "../../../atoms/input/input";

interface SearchInputProps {
  getInputProps(...args: unknown[]): unknown;
  getRootProps(...args: unknown[]): unknown;
  iconLeading?: IconProp;
  id: string;
  isLabelVisible?: boolean;
  label: string;
  margin?: TFunctionalClassNames["margin"];
  marginBottom?: TFunctionalClassNames["marginBottom"];
  marginLeft?: TFunctionalClassNames["marginLeft"];
  marginRight?: TFunctionalClassNames["marginRight"];
  marginTop?: TFunctionalClassNames["marginTop"];
  marginX?: TFunctionalClassNames["marginY"];
  marginY?: TFunctionalClassNames["marginX"];
  placeholder?: string;
  size?: "sm" | "sm" | "lg";
  value?: string;
  width?: TFunctionalClassNames["width"];
}

export default function SearchInput({
  getInputProps,
  getRootProps,
  iconLeading,
  id,
  isLabelVisible,
  label,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  placeholder,
  size,
  value,
  width,
  ...rest
}: SearchInputProps) {
  return (
    <Input
      id={id}
      size={size}
      isLabelVisible={isLabelVisible}
      label={label}
      margin={margin}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginX={marginX}
      marginY={marginY}
      placeholder={placeholder}
      role="search"
      value={value}
      width={width}
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
  iconLeading: "search",
  size: "sm",
};
