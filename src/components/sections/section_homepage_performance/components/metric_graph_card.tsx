import React from "react";
import { vars } from "../../../../styles/theme.css";
import Box, { IBox } from "../../../atoms/box/box";

interface IMetricGraphCard {
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

const getPercentageInRange = (value: number, min: number, max: number) => {
  const range = max - min;
  const percentage = (value - min) / range;
  return percentage * 100;
};

export default function MetricGraphCard({
  value,
  label,
  max,
  unit,
  min,
  thresholds,
}: IMetricGraphCard) {
  const strokeWidth = 12;
  const percentage = getPercentageInRange(value, min, max);
  const greenPercentage = getPercentageInRange(thresholds.green, min, max);
  const amberPercentage = getPercentageInRange(thresholds.amber, min, max);

  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;

  const greenStyle = {
    stroke: vars.color.semanticGreen,
    // strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - greenPercentage) / 100) * diameter}px`,
  };

  const amberStyle = {
    stroke: vars.color.semanticYellow,
    // strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - amberPercentage) / 100) * diameter}px`,
  };

  const progressStyle = {
    stroke: vars.color.primary_text_highContrast,
    // strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };
  if (!value) {
    return <Box>Is loading</Box>;
  }

  return (
    <svg
      className={"CircularProgressbar"}
      viewBox="0 0 100 100"
      // width={100}
      // height={100}
    >
      <path
        className="CircularProgressbar-trail"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: vars.color.semanticRed,
        }}
      />

      <path
        className="CircularProgressbar-green"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={amberStyle}
      />
      <path
        className="CircularProgressbar-green"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={greenStyle}
      />

      <path
        className="CircularProgressbar-path"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={progressStyle}
      />

      <text
        className="CircularProgressbar-text"
        x={50}
        y={33}
        style={{
          fill: vars.color.primary_text_highContrast,
          fontSize: "12px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {label}
      </text>
      <text
        className="CircularProgressbar-text"
        x={50}
        y={50}
        style={{
          fill: vars.color.primary_text_highContrast,
          fontSize: "24px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {value}
      </text>
      <text
        className="CircularProgressbar-text"
        x={50}
        y={66}
        style={{
          fill: vars.color.primary_text_highContrast,
          fontSize: "8px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {unit}
      </text>
    </svg>
  );
}

MetricGraphCard.defaultProps = {
  value: null,
};
