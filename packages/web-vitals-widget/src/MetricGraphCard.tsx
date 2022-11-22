import React, { useMemo } from "react";
import { vars } from "@alexmcgovern/boondoggle.design";
import { transformDuration } from "@alexmcgovern/utils";
import type { Metric } from "web-vitals";
import { getPercentageOfRange } from "./getPercentageOfRange";

interface MetricGraphCardProps {
  metric?: Metric;
  min: number;
  max: number;
  displayUnit?: "seconds" | "ms" | "numeric";
  thresholds: {
    green: number;
    amber: number;
  };
}

/** Base values for our SVG  */
const STROKE_WIDTH = 4;
const RADIUS = 50 - STROKE_WIDTH / 2;
const DIAMETER = Math.PI * 2 * RADIUS;

/** Describe the path for our partial circle graph  */
const PATH_DESCRIPTION = `
    M 50,50 m 0,-${RADIUS}
    a ${RADIUS},${RADIUS} 0 1 1 0,${2 * RADIUS}
    a ${RADIUS},${RADIUS} 0 1 1 0,-${2 * RADIUS}
  `;

export function MetricGraphCard({
  metric,
  max,
  displayUnit,
  min,
  thresholds,
}: MetricGraphCardProps) {
  const greenPercentage = getPercentageOfRange(thresholds.green, min, max);
  const yellowPercentage = getPercentageOfRange(thresholds.amber, min, max);

  /** Get path attributes for the segment that illustrates range for "good" score. */
  const lowContrastGreenPathAttrs = useMemo(() => {
    return {
      stroke: vars.color.semantic_green_lowContrast,
      strokeDasharray: `${DIAMETER}px ${DIAMETER}px`,
      strokeDashoffset: `${((100 - greenPercentage) / 100) * DIAMETER}px`,
    };
  }, [greenPercentage]);

  /** Get path attributes for the segment that illustrates range for "okay" score. */
  const lowContrastYellowPathAttrs = useMemo(() => {
    return {
      stroke: vars.color.semantic_yellow_lowContrast,
      strokeDasharray: `${DIAMETER}px ${DIAMETER}px`,
      strokeDashoffset: `${((100 - yellowPercentage) / 100) * DIAMETER}px`,
    };
  }, [yellowPercentage]);

  let displayValue = metric?.value.toString();

  let progressColor = vars.color.semantic_red_highContrast;
  let progressStyle = {};

  if (metric) {
    const percentage =
      metric?.value && getPercentageOfRange(metric.value, min, max);

    if (percentage && percentage < yellowPercentage) {
      progressColor = vars.color.semantic_yellow_highContrast;
    }

    if (percentage && percentage < greenPercentage) {
      progressColor = vars.color.semantic_green_highContrast;
    }

    if (displayUnit === "ms" || displayUnit === "seconds") {
      displayValue = transformDuration({
        inputDuration: metric.value,
        displayUnit,
      });
    }

    if (displayUnit === "numeric") {
      displayValue = metric.value.toFixed(2);
    }

    progressStyle = {
      stroke: progressColor,
      // strokeLinecap: "round",
      strokeDasharray: `${DIAMETER}px ${DIAMETER}px`,
      strokeDashoffset: `${((100 - percentage) / 100) * DIAMETER}px`,
    };
  }

  return (
    <svg
      className="CircularProgressbar"
      viewBox="0 0 100 100"
      // width={100}
      // height={100}
    >
      <path
        className="CircularProgressbar-trail"
        d={PATH_DESCRIPTION}
        strokeWidth={STROKE_WIDTH}
        fillOpacity={0}
        style={{
          stroke: vars.color.semantic_red_lowContrast,
        }}
      />

      <path
        className="CircularProgressbar-green"
        d={PATH_DESCRIPTION}
        strokeWidth={STROKE_WIDTH}
        fillOpacity={0}
        style={lowContrastYellowPathAttrs}
      />
      <path
        className="CircularProgressbar-green"
        d={PATH_DESCRIPTION}
        strokeWidth={STROKE_WIDTH}
        fillOpacity={0}
        style={lowContrastGreenPathAttrs}
      />

      <path
        className="CircularProgressbar-path"
        d={PATH_DESCRIPTION}
        strokeWidth={STROKE_WIDTH}
        fillOpacity={0}
        style={progressStyle}
      />

      <text
        className="CircularProgressbar-text"
        x={50}
        y={33}
        style={{
          fill: vars.color.accent_text_highContrast,
          fontSize: "12px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {metric?.name}
      </text>
      <text
        className="CircularProgressbar-text"
        x={50}
        y={50}
        style={{
          fill: vars.color.accent_text_highContrast,
          fontSize: "24px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {displayValue || "No data"}
      </text>
      <text
        className="CircularProgressbar-text"
        x={50}
        y={66}
        style={{
          fill: vars.color.accent_text_highContrast,
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
