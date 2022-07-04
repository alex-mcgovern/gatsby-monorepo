import React from "react";
import { Metric } from "web-vitals";
import { vars } from "../../../../../styles/theme.css";
import getDuration from "../../../../../utils/get_duration/get_duration";
import { Box } from "../../../../atoms/box/box";

interface IMetricGraphCard {
  metric?: Metric;
  min: number;
  max: number;
  displayUnit?: "seconds" | "ms" | "numeric";
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
  metric,
  max,
  displayUnit,
  min,
  thresholds,
}: IMetricGraphCard) {
  if (!metric || !metric.value) {
    return <Box>Is loading</Box>;
  }
  const strokeWidth = 12;
  const percentage = getPercentageInRange(metric.value, min, max);
  const greenPercentage = getPercentageInRange(thresholds.green, min, max);
  const amberPercentage = getPercentageInRange(thresholds.amber, min, max);

  let displayValue: string = metric.value.toString();

  if (displayUnit === "ms" || displayUnit === "seconds") {
    displayValue = getDuration({ inputDuration: metric.value, displayUnit });
  }
  if (displayUnit === "numeric") {
    displayValue = metric.value.toFixed(2);
  }

  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;

  const greenStyle = {
    stroke: vars.color.semantic_green,
    // strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - greenPercentage) / 100) * diameter}px`,
  };

  const amberStyle = {
    stroke: vars.color.semantic_yellow,
    // strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - amberPercentage) / 100) * diameter}px`,
  };

  const progressStyle = {
    stroke: vars.color.accent_fg_2,
    // strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };

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
          stroke: vars.color.semantic_red,
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
          fill: vars.color.accent_fg_2,
          fontSize: "12px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {metric.name}
      </text>
      <text
        className="CircularProgressbar-text"
        x={50}
        y={50}
        style={{
          fill: vars.color.accent_fg_2,
          fontSize: "24px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {displayValue}
      </text>
      <text
        className="CircularProgressbar-text"
        x={50}
        y={66}
        style={{
          fill: vars.color.accent_fg_2,
          fontSize: "8px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {displayUnit}
      </text>
    </svg>
  );
}

MetricGraphCard.defaultProps = {
  value: null,
};
