import React, { useEffect, useState } from "react";
import { Loader, vars } from "@alexmcgovern/boondoggle.design";
import type { TickFormatter } from "@visx/axis";
import { curveNatural } from "@visx/curve";
import { LinearGradient } from "@visx/gradient";
import type { TextProps } from "@visx/text/lib/types";
import {
  AnimatedAreaSeries,
  AnimatedAxis,
  AnimatedGrid,
  XYChart,
} from "@visx/xychart";
import { VISX_CHART_THEME } from "../constants/VISX_CHART_THEME";
import type { PaginationStateShape } from "../hooks/usePaginatedComments";
import type { CommentShape } from "../types";

interface FeedbackGraphProps {
  comments?: Array<CommentShape>;
  paginationState: PaginationStateShape;
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
  return tickValue.toISOString().substr(11, 5);
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
  paginationState,
}: FeedbackGraphProps) {
  /**
   * Ensure chart remains mounted when new comment data loading,
   * enabling smooth animation between data sets
   */
  const [cachedComments, setCachedComments] = useState(comments);

  useEffect(() => {
    if (comments) setCachedComments(comments);
  }, [comments]);

  if (!cachedComments) return <Loader />;

  /**
   * Transition time series ticks in accordance with pagination direction
   */
  const xAxisTicksAnimationTrajectory =
    paginationState.current > paginationState.previous ? "min" : "max";

  return (
    <XYChart
      captureEvents={false}
      height={320}
      theme={VISX_CHART_THEME}
      /**
       * Disabling perf warnings for these props as abstracting this meant dealing with some knotty
       * typings. (This AirBnB library is a bit over-engineered 🤔)
       */
      // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
      xScale={{ type: "band", reverse: true }}
      // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
      yScale={{ domain: [0, 5], type: "linear" }}
    >
      {/** --------------------------------------------
       * Set up elements for render
       * ----------------------------------------------- */}

      <LinearGradient
        id="line-series-background-gradient"
        from={vars.color.accent_secondary_base}
        to={vars.color.accent_background_base}
      />

      {/** --------------------------------------------
       * Axis & grid
       * ----------------------------------------------- */}
      <AnimatedAxis
        label="Rating"
        orientation="left"
        labelOffset={8}
        animationTrajectory="min"
        numTicks={5}
        tickFormat={getYAxisTickFormat}
      />
      <AnimatedAxis
        animationTrajectory={xAxisTicksAnimationTrajectory}
        label="Created"
        labelOffset={32}
        orientation="bottom"
        tickFormat={getXAxisTickFormat}
        tickLabelProps={getXAxisLabelProps}
      />

      <AnimatedGrid columns={false} numTicks={5} />

      {/** --------------------------------------------
       * Graph data
       * ----------------------------------------------- */}

      {cachedComments && (
        <AnimatedAreaSeries
          curve={curveNatural}
          data={cachedComments}
          dataKey="line-series-background"
          fill="url('#line-series-background-gradient')"
          xAccessor={xAccessor}
          yAccessor={yAccessor}
        />
      )}
    </XYChart>
  );
}
