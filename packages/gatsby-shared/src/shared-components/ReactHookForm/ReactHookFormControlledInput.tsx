import React from "react";
import type { InputProps } from "@alexmcgovern/boondoggle.design";
import { Input } from "@alexmcgovern/boondoggle.design";
import type { Validate } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

export interface ReactHookFormControlledInputProps extends InputProps {
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
export function ReactHookFormControlledInput({
  name,
  errorMessage,
  required,
  validateFunction,
  ...rest
}: ReactHookFormControlledInputProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
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
      ref={ref}
      {...rest}
    />
  );
}