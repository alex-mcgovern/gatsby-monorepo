import React, { useCallback } from "react";
import type {
  DropdownItem,
  SelectSingleProps,
} from "@alexmcgovern/boondoggle.design";
import { SelectSingle } from "@alexmcgovern/boondoggle.design";
import { useController, useFormContext } from "react-hook-form";

export interface ReactHookFormControlledSingleSelectProps
  extends SelectSingleProps {
  errorMessage: string;
}

/** React Hook Form connected version of `SelectSingle`. Uses `useFormContext`
 * to access Hook Form's methods so can be deeply nested. */
export function ReactHookFormControlledSingleSelect({
  name,

  ...rest
}: ReactHookFormControlledSingleSelectProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  const handleChange = useCallback(
    (item: DropdownItem) => {
      return onChange(item.value);
    },
    [onChange]
  );

  return (
    <SelectSingle
      ref={ref}
      invalid={!!error}
      onValueChange={handleChange}
      name={name}
      {...rest}
    />
  );
}
