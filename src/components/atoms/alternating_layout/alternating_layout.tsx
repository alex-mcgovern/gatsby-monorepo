import React from "react";
import classNames from "classnames";
import * as classes from "./alternating_layout.module.scss";

interface AlternatingLayoutProps {
  children?: React.ReactNode;
  ratio?: "2_1" | "1_2";
}

export default function AlternatingLayout({
  children,
  ratio
}: AlternatingLayoutProps) {
  const alternatingLayoutClassNames = classNames(classes.alternating_layout, {
    [classes.ratio_2_1]: ratio === "2_1",
    [classes.ratio_1_2]: ratio === "1_2",
  });
  return <div className={alternatingLayoutClassNames}>{children}</div>;
}

AlternatingLayout.defaultProps = {
  children: null,
  ratio: null,
};
