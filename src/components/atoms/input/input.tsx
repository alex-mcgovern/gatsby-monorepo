import React, { AriaRole, HTMLInputTypeAttribute } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FunctionalClassNames,
  geFunctionalClassNames,
} from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_focus_ring_styles.css";
import { Box } from "../box/box";
import * as styles from "./input.css";

export interface InputCustomisation {
  margin?: FunctionalClassNames["margin"];
  marginBottom?: FunctionalClassNames["marginBottom"];
  marginLeft?: FunctionalClassNames["marginLeft"];
  marginRight?: FunctionalClassNames["marginRight"];
  marginTop?: FunctionalClassNames["marginTop"];
  marginX?: FunctionalClassNames["marginY"];
  marginY?: FunctionalClassNames["marginX"];
  width?: FunctionalClassNames["width"];
}

export interface IInputProps {
  /** Customisation exposes utility-first styles as props. */
  customisation?: InputCustomisation;
  /** FontAwesome icon shown on the left side of input. */
  iconLeading?: IconProp;
  /** FontAwesome icon shown on the right side of input. */
  iconTrailing?: IconProp;
  /** Used as the html ID. */
  id: string;
  /** Whether to show the label. (Label value will also be used as accessible `name` on the input element.) */
  isLabelVisible?: boolean;
  /** Whether to show the label. (Label value will also be used as accessible `name` on the input element.) */
  isDisabled?: boolean;
  /** Name of the form control. Submitted with the form as part of a name/value pair*/
  name: string;
  /** Label text. (Will also be used as accessible `name` on the input element.) */
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
  // Whether the field is required.
  required?: boolean;
  type: HTMLInputTypeAttribute;
}

export const Input = ({
  placeholder,
  iconLeading,
  iconTrailing,
  id,
  name,
  type,
  onChange,
  customisation,
  value,
  isLabelVisible,
  isDisabled,
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
    geFunctionalClassNames({ ...customisation }),
  ];

  return (
    <Box customisation={customisation}>
      {isLabelVisible && (
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <fieldset
        className={inputWrapperStyles.join(" ")}
        role={role}
        disabled={isDisabled}
      >
        {iconLeading && (
          <FontAwesomeIcon className={styles.leadingIcon} icon={iconLeading} />
        )}
        <input
          value={value}
          type={type}
          disabled={isDisabled}
          className={styles.inputElement}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          id={id}
          {...rest}
        />
        {iconTrailing && (
          <FontAwesomeIcon
            className={styles.trailingIcon}
            icon={iconTrailing}
          />
        )}
      </fieldset>
    </Box>
  );
};

Input.defaultProps = {
  placeholder: "",
  iconLeading: "",
  size: "sm",
  onChange: () => {},
};
