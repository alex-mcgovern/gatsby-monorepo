import React, { AriaRole } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_focus_ring_styles.css";
import { Box } from "../box/box";
import * as styles from "./input.css";

export interface IInputCustomisation {
  margin?: TFunctionalClassNames["margin"];
  marginBottom?: TFunctionalClassNames["marginBottom"];
  marginLeft?: TFunctionalClassNames["marginLeft"];
  marginRight?: TFunctionalClassNames["marginRight"];
  marginTop?: TFunctionalClassNames["marginTop"];
  marginX?: TFunctionalClassNames["marginY"];
  marginY?: TFunctionalClassNames["marginX"];
  width?: TFunctionalClassNames["width"];
}

export interface IInputProps {
  /** Customisation exposes utility-first styles as props. */
  customisation?: IInputCustomisation;
  /** FontAwesome icon shown on the left side of input. */
  iconLeading?: IconProp;
  /** FontAwesome icon shown on the right side of input. */
  iconTrailing?: IconProp;
  /** Used as the html ID. */
  id: string;
  /** Whether to show the label. (Label value will also be used as accessible `title` on the input element.) */
  isLabelVisible?: boolean;
  /** Label text. (Will also be used as accessible `title` on the input element.) */
  label: string;
  /** Callback on input change. */
  onChange?(...args: unknown[]): unknown;
  /** Text shown before user has interacted with the input. */
  placeholder?: string;
  /** Aria role to use for the input (e.g. `search`). */
  role?: AriaRole;
  /** Variant prop controlling input appearance. Note: Auto-generated documentation for this is still a WIP, so variant styles are missing. */
  variant?: styles.TInputVariants;
  /** Allows directly assigning a value when the input is acting as a controlled element. */
  value?: string;
}

export const Input = ({
  placeholder,
  iconLeading,
  iconTrailing,
  id,
  onChange,
  customisation,
  value,
  isLabelVisible,
  label,
  variant,
  role,
  ...rest
}: IInputProps) => {
  const inputWrapperStyles = [
    styles.getInputWrapperStyles({
      ...variant,
    }),
    getFocusRingStyles(),
    getFunctionalClassNames({ ...customisation }),
  ];

  return (
    <Box customisation={customisation}>
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
        {iconTrailing && (
          <FontAwesomeIcon className={styles.icon} icon={iconTrailing} />
        )}
      </div>
    </Box>
  );
};

Input.defaultProps = {
  placeholder: "",
  iconLeading: "",
  size: "sm",
  onChange: () => {},
};
