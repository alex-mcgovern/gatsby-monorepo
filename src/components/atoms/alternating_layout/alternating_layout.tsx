import React from "react";
import classNames from "classnames";
import * as classes from "./alternating_layout.module.scss";

interface AlternatingLayoutProps {
  children?: React.ReactNode;
  ratio?: "1_2" | "1_3" | "2_1" | "3_1" | "5_7" | "7_5";
}

export default function AlternatingLayout({
  children,
  ratio,
}: AlternatingLayoutProps) {
  const alternatingLayoutClassNames = classNames(classes.alternating_layout, {
    [classes.ratio_1_2]: ratio === "1_2",
    [classes.ratio_1_3]: ratio === "1_3",
    [classes.ratio_2_1]: ratio === "2_1",
    [classes.ratio_3_1]: ratio === "3_1",
    [classes.ratio_5_7]: ratio === "5_7",
    [classes.ratio_7_5]: ratio === "7_5",
  });
  return <div className={alternatingLayoutClassNames}>{children}</div>;
}

AlternatingLayout.defaultProps = {
  children: null,
  ratio: null,
};
