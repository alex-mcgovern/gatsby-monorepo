import React, { useCallback } from "react";
import type {
  DropdownItem,
  SelectSingleProps,
} from "@alexmcgovern/boondoggle.design";
import { SelectSingleCreatable } from "@alexmcgovern/boondoggle.design";
import { useController, useFormContext } from "react-hook-form";

export interface ReactHookFormControlledSingleSelectCreatableProps
  extends SelectSingleProps {
  errorMessage: string;
}

/** React Hook Form connected version of `SelectSingle`. Uses `useFormContext`
 * to access Hook Form's methods so can be deeply nested. */
export function ReactHookFormControlledSingleSelectCreatable({
  name,

  ...rest
}: ReactHookFormControlledSingleSelectCreatableProps) {
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
      return onChange(item?.value);
    },
    [onChange]
  );

  return (
    <SelectSingleCreatable
      ref={ref}
      invalid={!!error}
      onValueChange={handleChange}
      name={name}
      {...rest}
    />
  );
}
