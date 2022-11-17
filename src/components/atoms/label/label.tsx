import React from "react";
import * as styles from "./label.css";

interface LabelProps {
  label: string;
  id: string;
  isLabelVisible?: boolean;
}

export const Label = ({ label, id, isLabelVisible }: LabelProps) => {
  if (isLabelVisible) {
    return (
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    );
  }
  return null;
};
