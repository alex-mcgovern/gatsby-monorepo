import React from "react";
import * as classes from "./layout_section_outer.module.scss";

interface LayoutSectionOuterProps {
  children?: React.ReactNode;
}

export default function LayoutSectionOuter({
  children
}: LayoutSectionOuterProps) {
  return <section className={classes.section}>{children}</section>;
}

LayoutSectionOuter.defaultProps = {
  children: null,
};
