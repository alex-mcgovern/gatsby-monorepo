import type {
  DetailedHTMLProps,
  LegacyRef,
  TextareaHTMLAttributes,
} from "react";
import React, { forwardRef } from "react";
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
      "color" | "ref"
    > {
  size?: VariantInteractiveElementSizeEnum;
  name: string;
  errorMessage?: string;
  invalid?: boolean;
}

export const TextArea = forwardRef(
  (
    { size = "md", invalid, errorMessage, ...rest }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement> | undefined
  ) => {
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
          ref={ref}
          {...otherProps}
        />
        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
