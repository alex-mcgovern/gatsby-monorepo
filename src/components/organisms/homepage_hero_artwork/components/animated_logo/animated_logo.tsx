import React from "react";
import { vars } from "../../../../../styles/theme.css";
import Box, { IBox } from "../../../../atoms/box/box";
import Button from "../../../../atoms/button/button";
import { logoWrapper, outerShape } from "./animated_logo.css";

interface IAnimatedLogo {
  value: number;
  min: number;
  max: number;

  unit?: string;
  label: string;
  thresholds: {
    green: number;
    amber: number;
  };
}

export default function AnimatedLogo({
  value,
  label,
  max,
  unit,
  min,
  thresholds,
}: IAnimatedLogo) {
  return (
    <svg
      type="image/svg+xml"
      viewBox="0 0 24 24"
      className={logoWrapper}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="24" height="24" fill="white" /> */}
      <path
        className={outerShape}
        stroke="black"
        stroke-width="3"
        stroke-linejoin="bevel"
      >
        <animate
          attributeName="d"
          values={`
            M4 8L12 12L4 16;
            M4 16L8 8L12 16;
        `}
          keyTimes="0; 0.5;"
          calcMode="spline"
          keySplines="0.42 0 1 1; 0.42 0 1 1;"
          dur="5s"
          fill="freeze"
        />
      </path>
      <path d="M21 20L12 20" stroke="black" stroke-width="3" />
    </svg>
  );
}

AnimatedLogo.defaultProps = {
  value: null,
};
