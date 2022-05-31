import React from "react";
import { alternatingLayout } from "./alternating_layout.css";

interface AlternatingLayoutProps {
  children?: React.ReactNode;
  ratio?: "1_2" | "1_3" | "2_1" | "3_1" | "5_7" | "7_5";
}

export default function AlternatingLayout({
  children,
  ratio,
}: AlternatingLayoutProps) {
  const alternatingLayoutStyle = alternatingLayout({
    ratio,
  });

  return <div className={alternatingLayoutStyle}>{children}</div>;
}

AlternatingLayout.defaultProps = {
  children: null,
  ratio: null,
};
