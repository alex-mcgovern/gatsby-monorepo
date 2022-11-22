import React from "react";
import { Box } from "../Box";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";

export interface LabelProps extends GetSprinklesArgs {
  label: string;
  htmlFor: string;
}

export function Label({ label, htmlFor, ...rest }: LabelProps) {
  return (
    <Box
      as="label"
      color="neutral_text_lowContrast"
      display="block"
      fontSize="body_md"
      fontWeight="medium"
      marginBottom="spacing0"
      htmlFor={htmlFor}
      {...rest}
    >
      {label}
    </Box>
  );
}
