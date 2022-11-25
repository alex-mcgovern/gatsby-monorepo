import type { CSSProperties } from "react";
import React, { useMemo } from "react";
import { vars } from "@alexmcgovern/boondoggle.design";
import { transformDuration } from "@alexmcgovern/utils";
import type { Metric } from "web-vitals";
import { getPercentageOfRange } from "../utils/getPercentageOfRange";

/**
 * ToDo: Make metric graph card more readable
 * ToDo: Add tests to metric graph card
 */
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

/** ---------------------------------------------
 * Static styles
 * ----------------------------------------------- */

const RED_PATH_SEGMENT_STYLE: CSSProperties = {
  stroke: vars.color.semantic_red_lowContrast,
};

const METRIC_TEXT_STYLE: CSSProperties = {
  fill: vars.color.accent_text_highContrast,
  fontSize: "8px",
  dominantBaseline: "central",
  textAnchor: "middle",
};

/** -----------------------------------------------------------------------------
 * Main component
 * ------------------------------------------------------------------------------- */

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

  const percentage =
    metric?.value && getPercentageOfRange(metric.value, min, max);

  if (percentage && percentage < yellowPercentage) {
    progressColor = vars.color.semantic_yellow_highContrast;
  }

  if (percentage && percentage < greenPercentage) {
    progressColor = vars.color.semantic_green_highContrast;
  }

  if (displayUnit === "ms" || displayUnit === "seconds") {
    displayValue =
      metric &&
      transformDuration({
        inputDuration: metric?.value,
        displayUnit,
      });
  }

  if (displayUnit === "numeric") {
    displayValue = metric?.value.toFixed(2);
  }

  progressStyle = useMemo(() => {
    return {
      stroke: progressColor,
      // strokeLinecap: "round",
      strokeDasharray: `${DIAMETER}px ${DIAMETER}px`,
      strokeDashoffset:
        percentage && `${((100 - percentage) / 100) * DIAMETER}px`,
    };
  }, [percentage, progressColor]);

  return (
    <svg className="CircularProgressbar" viewBox="0 0 100 100">
      <path
        className="CircularProgressbar-trail"
        d={PATH_DESCRIPTION}
        strokeWidth={STROKE_WIDTH}
        fillOpacity={0}
        style={RED_PATH_SEGMENT_STYLE}
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
        style={METRIC_TEXT_STYLE}
      >
        {metric?.name}
      </text>
      <text
        className="CircularProgressbar-text"
        x={50}
        y={50}
        style={METRIC_TEXT_STYLE}
      >
        {displayValue || "No data"}
      </text>
      <text
        className="CircularProgressbar-text"
        x={50}
        y={66}
        style={METRIC_TEXT_STYLE}
      >
        {displayUnit}
      </text>
    </svg>
  );
}
