import type {
  AriaRole,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  Ref,
} from "react";
import React, { forwardRef } from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { InputErrorMessage } from "../InputErrorMessage";
import { Label } from "../Label";
import { focusedStateStyle } from "../__css__/common/focus_ring_styles.css";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import * as styles from "./input.css";

export interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "width" | "height" | "style" | "color"
    >,
    GetSprinklesArgs {
  autoComplete?: HTMLInputElement["autocomplete"];
  /** Allow custom prop getter. Enables compatibility with DownshiftJS */
  getInputProps?(...args: unknown[]): unknown;
  /** FontAwesome icon shown on the left side of input. */
  iconLeading?: IconProps["icon"];
  /** Props for leading icon */
  iconLeadingProps?: Omit<IconProps, "icon">;
  /** FontAwesome icon shown on the right side of input. */
  iconTrailing?: IconProps["icon"];
  /** Props for trailing icon */
  iconTrailingProps?: Omit<IconProps, "icon">;
  /** Used as the html ID. */
  id: string;
  /** Controls `aria-required` and input `required` attributes. */
  required?: boolean;
  /** Allow controlling components to set error styles, `aria-invalid` prop and display error message. */
  invalid?: boolean;
  /** Whether to show the label. (Label value will also be used as accessible `name` on the input element.) */
  isDisabled?: boolean;
  /** Name of the form control. Submitted with the form as part of a name/value pair */
  name: string;
  /** Message shown when `invalid=true`. May originate from controlling library, like `react-hook-form` */
  errorMessage?: string;
  /** Label text. (Will also be used as accessible `name` on the input element.) */
  label?: string;
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
  type?: HTMLInputTypeAttribute;
}

export const Input = forwardRef(
  (
    {
      autoComplete,
      errorMessage,
      iconLeading,
      iconLeadingProps,
      iconTrailing,
      iconTrailingProps,
      id,
      invalid,
      isDisabled,
      label,
      name,
      onChange,
      placeholder,
      required,
      role,
      type,
      value,
      variant,
      ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const inputWrapperStyles = [
      styles.getInputWrapperStyles({
        ...variant,
      }),
      focusedStateStyle,
      getSprinkles({ ...atomProps }),
    ];

    return (
      <Box>
        {label && id && <Label label={label} htmlFor={id} />}
        <fieldset
          className={inputWrapperStyles.join(" ")}
          role={role}
          disabled={isDisabled}
        >
          {iconLeading && (
            <Icon
              className={styles.leadingIcon}
              icon={iconLeading}
              {...iconLeadingProps}
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
            aria-invalid={invalid}
            aria-required={required}
            name={name}
            id={id}
            ref={ref}
            {...otherProps}
          />
          {iconTrailing && (
            <Icon
              className={styles.trailingIcon}
              icon={iconTrailing}
              {...iconTrailingProps}
            />
          )}
        </fieldset>

        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
