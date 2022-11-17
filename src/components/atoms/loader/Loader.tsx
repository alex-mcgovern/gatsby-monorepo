import React from "react";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetSprinklesArgs } from "../../../styles/functional_classnames.css";
import { BoxNew } from "../box_new/box_new";
import * as styles from "./Loader.css";

export interface LoaderProps {
  size: SizeProp;
  customisation: GetSprinklesArgs;
}

export const Loader = ({ size, customisation }: LoaderProps) => {
  return (
    <BoxNew
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...customisation}
    >
      <FontAwesomeIcon size={size} icon="spinner" className={styles.iconSpin} />
    </BoxNew>
  );
};
