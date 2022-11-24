import React from "react";
import type { InputProps } from "@alexmcgovern/boondoggle.design";
import { Input } from "@alexmcgovern/boondoggle.design";
import type { Validate } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

export interface FormInputProps extends InputProps {
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
export function FormInput({
  name,
  errorMessage,
  required,
  validateFunction,

  ...rest
}: FormInputProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref, value: controlledValue },
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
    <Input
      onChange={onChange}
      onBlur={onBlur}
      invalid={!!error}
      aria-required={required}
      errorMessage={errorMessage}
      name={name}
      value={controlledValue}
      ref={ref}
      {...rest}
    />
  );
}
