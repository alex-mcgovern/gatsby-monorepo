import type {
  AriaRole,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import React, { forwardRef } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "../Box";
import { Label } from "../Label";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { getFocusRingStyles } from "../__css__/recipes/get_focus_ring_styles.css";
import * as styles from "./input.css";

export interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "width" | "height" | "style"
    >,
    GetSprinklesArgs {
  autoComplete?: HTMLInputElement["autocomplete"];
  /** Allow custom prop getter. Enables compatibility with DownshiftJS */
  getInputProps?(...args: unknown[]): unknown;
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
  /** Name of the form control. Submitted with the form as part of a name/value pair */
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
  variant?: styles.InputVariants;
  /** Allows directly assigning a value when the input is acting as a controlled element. */
  value?: string;
  // Whether the field is required.
  required?: boolean;
  type?: HTMLInputTypeAttribute;
}

export const Input = forwardRef(
  (
    {
      autoComplete,
      customisation,
      iconLeading,
      iconTrailing,
      id,
      isDisabled,
      isLabelVisible,
      label,
      name,
      onChange,
      placeholder,
      role,
      type,
      value,
      variant,
      ...rest
    }: InputProps,
    ref
  ) => {
    const inputWrapperStyles = [
      styles.getInputWrapperStyles({
        ...variant,
      }),
      getFocusRingStyles(),
      getSprinkles({ ...customisation }),
    ];

    return (
      <Box>
        {label && id && (
          <Label isLabelVisible={isLabelVisible} label={label} id={id} />
        )}
        <fieldset
          className={inputWrapperStyles.join(" ")}
          role={role}
          disabled={isDisabled}
        >
          {iconLeading && (
            <FontAwesomeIcon
              className={styles.leadingIcon}
              icon={iconLeading}
            />
          )}
          <input
            value={value}
            type={type}
            autoComplete={autoComplete}
            disabled={isDisabled}
            className={styles.inputElement}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            id={id}
            ref={ref}
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
  }
);
