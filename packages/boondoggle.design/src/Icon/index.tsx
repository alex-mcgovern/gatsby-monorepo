import React from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "../Box";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";

export interface IconProps
  extends Omit<
      FontAwesomeIconProps,
      | "width"
      | "height"
      | "textDecoration"
      | "overflow"
      | "fontWeight"
      | "fontSize"
      | "display"
    >,
    GetSprinklesArgs {
  icon: IconProp;
}

export function Icon({ icon, ...rest }: IconProps) {
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  return (
    <Box {...atomProps}>
      <FontAwesomeIcon icon={icon} {...otherProps} />
    </Box>
  );
}
