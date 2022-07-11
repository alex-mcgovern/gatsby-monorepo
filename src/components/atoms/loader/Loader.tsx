import React from "react";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionalClassNames } from "../../../styles/functional_classnames.css";
import { Box } from "../box/box";
import * as styles from "./Loader.css";

export interface LoaderProps {
  size: SizeProp;
  customisation: FunctionalClassNames;
}

export const Loader = ({ size, customisation }: LoaderProps) => {
  return (
    <Box
      customisation={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        ...customisation,
      }}
    >
      <FontAwesomeIcon size={size} icon="spinner" className={styles.iconSpin} />
    </Box>
  );
};
