import React from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  GetSprinklesArgs,
  getSprinkles,
} from "../../../styles/functional_classnames.css";
import { BoxNew } from "../box_new/box_new";

interface IconProps
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

export const Icon = ({ icon, ...rest }: IconProps) => {
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  return (
    <BoxNew {...atomProps}>
      <FontAwesomeIcon icon={icon} {...otherProps} />
    </BoxNew>
  );
};
