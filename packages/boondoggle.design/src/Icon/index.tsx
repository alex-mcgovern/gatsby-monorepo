import React from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Box } from "../Box";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import * as styles from "./icon.css";

export interface IconProps
  extends GetSprinklesArgs,
    Omit<
      FontAwesomeIconProps,
      | "border"
      | "color"
      | "display"
      | "fontSize"
      | "fontStyle"
      | "fontWeight"
      | "height"
      | "overflow"
      | "textDecoration"
      | "width"
    > {
  icon: IconProp;
}

export function Icon({ icon, className, ...rest }: IconProps) {
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  return (
    <Box {...atomProps}>
      <FontAwesomeIcon
        icon={icon}
        className={clsx(styles.icon, className)}
        {...otherProps}
      />
    </Box>
  );
}
