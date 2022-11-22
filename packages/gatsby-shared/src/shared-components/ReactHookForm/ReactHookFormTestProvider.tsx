import type { JSXElementConstructor, ReactElement } from "react";
import React, { cloneElement } from "react";
import { FormProvider, useForm } from "react-hook-form";

export function ReactHookFormTestProvider({
  children,
  ...rest
}: {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}) {
  const reactHookFormMethods = useForm();

  return (
    <FormProvider {...reactHookFormMethods}>
      {cloneElement(children, {
        ...rest,
      })}
    </FormProvider>
  );
}
