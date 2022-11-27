import type { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import React from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { focusedStateStyle } from "../../styles/common/focus_ring_styles.css";
import type { VariantInteractiveElementSizeEnum } from "../../styles/common/variant_interactive_element_size.css";
import type { GetSprinklesArgs } from "../../styles/getSprinkles.css";
import { getSprinkles } from "../../styles/getSprinkles.css";
import { Box } from "../Box";
import { getInputWrapperStyles } from "../Input/index.css";
import { InputErrorMessage } from "../InputErrorMessage";

export interface TextAreaProps
  extends GetSprinklesArgs,
    Omit<
      DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >,
      "color"
    > {
  size?: VariantInteractiveElementSizeEnum;
  name: string;
  errorMessage?: string;
  invalid?: boolean;
}

export function TextArea({
  size = "md",
  invalid,
  errorMessage,
  ...rest
}: TextAreaProps) {
  /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  const inputWrapperStyles = clsx(
    getInputWrapperStyles({
      size,
    }),
    focusedStateStyle,
    getSprinkles({ ...atomProps })
  );

  return (
    <Box>
      <textarea
        aria-invalid={invalid}
        className={inputWrapperStyles}
        {...otherProps}
      />
      {invalid && errorMessage && <InputErrorMessage message={errorMessage} />}
    </Box>
  );
}
