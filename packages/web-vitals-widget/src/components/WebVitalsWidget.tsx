import React from "react";
import { Box } from "@alexmcgovern/boondoggle.design";
import { useWebVitals } from "../hooks/useWebVitals";
import { MetricGraphCard } from "./MetricGraphCard";

/**
 * ToDo: Add better labelling and handling of non-loaded metrics
 * to WebVitalsWidget.
 */

/**
 * Thresholds for good, average, bad CWV scores. Using the same scoring
 * system as lighthouse.
 */
const CWV_TTFB_THRESHOLDS = { green: 200, amber: 500 };
const CWV_CLS_THRESHOLDS = { green: 2500, amber: 400 };
const CWV_FCP_THRESHOLDS = { green: 2500, amber: 400 };
const CWV_FID_THRESHOLDS = { green: 100, amber: 300 };
const CWV_LCP_THRESHOLDS = { green: 2500, amber: 400 };

export function WebVitalsWidget() {
  const { CLS, FCP, FID, LCP, TTFB } = useWebVitals() || {};

  return (
    <Box
      marginTop="spacing3"
      display="grid"
      gridTemplateColumns="5x"
      gap="spacing2"
      maxWidth="gridSpan6"
    >
      {/** ---------------------------------------------
       * TTFB: Time to first byte
       * ----------------------------------------------- */}

      <MetricGraphCard
        thresholds={CWV_TTFB_THRESHOLDS}
        min={0}
        displayUnit="ms"
        max={1000}
        metric={TTFB}
      />

      {/* ---------------------------------------------——
       * CLS: Cumulative layout shift
       * ---------------------------------------------—— */}

      <MetricGraphCard
        thresholds={CWV_CLS_THRESHOLDS}
        min={0}
        displayUnit="numeric"
        max={8000}
        metric={CLS}
      />

      {/* ---------------------------------------------——
       * FCP: First contentful paint
       * ---------------------------------------------—— */}

      <MetricGraphCard
        thresholds={CWV_FCP_THRESHOLDS}
        displayUnit="seconds"
        min={0}
        max={8000}
        metric={FCP}
      />

      {/* ---------------------------------------------——
       * FID: First input delay
       * ---------------------------------------------—— */}

      <MetricGraphCard
        thresholds={CWV_FID_THRESHOLDS}
        displayUnit="ms"
        min={0}
        max={500}
        metric={FID}
      />

      {/* ---------------------------------------------——
       * LCP: Longest contentful paint
       * ---------------------------------------------—— */}

      <MetricGraphCard
        thresholds={CWV_LCP_THRESHOLDS}
        displayUnit="seconds"
        min={0}
        max={8000}
        metric={LCP}
      />
    </Box>
  );
}
