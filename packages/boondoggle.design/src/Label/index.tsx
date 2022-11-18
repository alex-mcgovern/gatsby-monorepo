import React from "react";
import * as styles from "./label.css";

export interface LabelProps {
  label: string;
  id: string;
  isLabelVisible?: boolean;
}

export function Label({ label, id, isLabelVisible }: LabelProps) {
  if (isLabelVisible) {
    return (
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    );
  }
  return null;
}
