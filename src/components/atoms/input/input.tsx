import React, { AriaRole } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_accessibility_styles.css";
import Box from "../box/box";
import * as styles from "./input.css";

interface InputProps {
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
  onChange(...args: unknown[]): unknown;
  placeholder?: string;
  role?: AriaRole;
  size?: "sm" | "sm" | "lg";
  value?: string;
  width?: TFunctionalClassNames["width"];
}

export default function Input({
  placeholder,
  iconLeading,
  id,
  onChange,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  width,
  value,
  isLabelVisible,
  label,
  size,
  role,
  ...rest
}: InputProps) {
  const inputWrapperStyles = [
    styles.getInputWrapperStyles({
      size,
    }),
    getFocusRingStyles(),
    getFunctionalClassNames({ width }),
  ];

  return (
    <Box
      margin={margin}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginX={marginX}
      marginY={marginY}
    >
      {isLabelVisible && (
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={inputWrapperStyles.join(" ")} role={role}>
        {iconLeading && (
          <FontAwesomeIcon className={styles.icon} icon={iconLeading} />
        )}
        <input
          value={value}
          className={styles.inputElement}
          placeholder={placeholder}
          onChange={onChange}
          title={label}
          id={id}
          {...rest}
        />
      </div>
    </Box>
  );
}

Input.defaultProps = {
  placeholder: "",
  iconLeading: "",
  size: "sm",
  onChange: () => {},
};
