import React from "react";
import type { Validate } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";
import type { SliderProps } from "../../Slider";
import { Slider } from "../../Slider";

export interface FormSliderProps extends SliderProps {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: Validate<string>;
  /** a11y label passed to `Label` component */
  label: string;
}

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export function FormSlider({
  name,
  errorMessage,
  required,
  validateFunction,

  ...rest
}: FormSliderProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      // value,
      required: required && errorMessage,
      validate: (value) => {
        if (validateFunction) {
          return validateFunction(value) || errorMessage;
        }
        return !!value;
      },
    },
    defaultValue: "",
  });

  return (
    <Slider
      onChange={onChange}
      onBlur={onBlur}
      invalid={!!error}
      aria-required={required}
      errorMessage={errorMessage}
      name={name}
      // value={controlled  Value}
      ref={ref}
      {...rest}
    />
  );
}
