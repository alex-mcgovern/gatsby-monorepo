import React from "react";
import { Card, Loader } from "@alexmcgovern/boondoggle.design";
import { checkArrayHasLength } from "@alexmcgovern/utils";
import type { TickFormatter } from "@visx/axis";
import { curveNatural } from "@visx/curve";
import type { TextProps } from "@visx/text/lib/types";
import { AnimatedGrid, AnimatedLineSeries, Axis, XYChart } from "@visx/xychart";
import { VISX_CHART_THEME } from "../VISX_CHART_THEME";
import type { CommentShape } from "../types";

export interface FeedbackGraphProps {
  comments?: Array<CommentShape>;
  isLoading?: boolean;
}

/** ---------------------------------------------
 * Data accessor functions for Area Series
 * ----------------------------------------------- */

const xAccessor = (comment: CommentShape) => {
  return new Date(comment.created.seconds * 1000);
};

const yAccessor = (comment: CommentShape) => {
  return comment.rating;
};

/** ---------------------------------------------
 * Getter functions for tick values
 * ----------------------------------------------- */

const getYAxisTickFormat: TickFormatter<number> = (tickValue: number) => {
  return Math.floor(tickValue).toString();
};

const getXAxisTickFormat: TickFormatter<Date> = (tickValue: Date) => {
  const date = tickValue.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
  });
  const time = tickValue.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${date} ${time}`;
};

/** ---------------------------------------------
 * Getter functions for label props
 * ----------------------------------------------- */

const getXAxisLabelProps = (): Partial<TextProps> => {
  return {
    verticalAnchor: "start",
  };
};

/** -----------------------------------------------------------------------------
 * Main component
 * ------------------------------------------------------------------------------- */

export function FeedbackGraph({
  comments,
  isLoading,
  ...rest
}: FeedbackGraphProps) {
  /**
   * Ensure chart remains mounted when new comment data isLoading,
   * enabling smooth animation between data sets
   */

  if (!checkArrayHasLength(comments)) {
    return <Card textAlign="center">No feedback to graph.</Card>;
  }

  if (isLoading) {
    return <Loader {...rest} size="4x" width="100%" minHeight="25vh" />;
  }

  return (
    <XYChart
      captureEvents={false}
      height={320}
      theme={VISX_CHART_THEME}
      xScale={{ type: "band", reverse: true }}
      yScale={{ domain: [0, 5], type: "linear" }}
      {...rest}
    >
      {/** --------------------------------------------
       * Axis & grid
       * ----------------------------------------------- */}

      <Axis
        label="Rating"
        orientation="left"
        labelOffset={8}
        numTicks={5}
        tickFormat={getYAxisTickFormat}
      />
      <Axis
        label="Created"
        labelOffset={32}
        orientation="bottom"
        numTicks={5}
        tickFormat={getXAxisTickFormat}
        tickLabelProps={getXAxisLabelProps}
      />

      <AnimatedGrid columns={false} numTicks={5} />

      {/** --------------------------------------------
       * Graph data
       * ----------------------------------------------- */}

      <AnimatedLineSeries
        curve={curveNatural}
        data={comments}
        dataKey="line-series-background"
        xAccessor={xAccessor}
        yAccessor={yAccessor}
      />
    </XYChart>
  );
}
