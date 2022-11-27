import React, { useEffect, useState } from "react";
import { Loader, vars } from "@alexmcgovern/boondoggle.design";
import type { TickFormatter } from "@visx/axis";
import { curveNatural } from "@visx/curve";
import { LinearGradient } from "@visx/gradient";
import type { TextProps } from "@visx/text/lib/types";
import { AnimatedAreaSeries, AnimatedGrid, Axis, XYChart } from "@visx/xychart";
import { VISX_CHART_THEME } from "../VISX_CHART_THEME";
import type { CommentShape } from "../types";

export interface FeedbackGraphProps {
  documents?: Array<CommentShape>;
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

export function FeedbackGraph({ documents, ...rest }: FeedbackGraphProps) {
  /**
   * Ensure chart remains mounted when new comment data loading,
   * enabling smooth animation between data sets
   */

  const [cachedComments, setCachedComments] = useState(documents);

  useEffect(() => {
    if (documents) setCachedComments(documents);
  }, [documents]);

  if (!cachedComments) return <Loader />;

  /**
   * Transition time series ticks in accordance with pagination direction
   */

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
