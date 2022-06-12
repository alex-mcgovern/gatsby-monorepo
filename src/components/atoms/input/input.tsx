import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";
import * as styles from "./input.css";

interface InputProps {
  id?: string;
  onChange(...args: unknown[]): unknown;
  placeholder?: string;
  width?: TFunctionalClassNames["width"];
  leadingIcon?: IconProp;
  size?: "sm" | "md" | "lg";
  value?: string;
}

export default function Input({
  placeholder,
  leadingIcon,
  id,
  onChange,
  width,
  value,
  size,
  ...rest
}: InputProps) {
  const inputStyles = [
    styles.getInputWrapperStyles({
      size,
    }),
    getFunctionalClassNames({ width }),
  ];

  return (
    <div className={inputStyles.join(" ")}>
      {leadingIcon && (
        <FontAwesomeIcon className={styles.icon} icon={leadingIcon} />
      )}

      <input
        value={value}
        className={styles.inputElement}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        {...rest}
      />
    </div>
  );
}

Input.defaultProps = {
  placeholder: "",
  leadingIcon: "",
  size: "md",
  onChange: () => {},
};
