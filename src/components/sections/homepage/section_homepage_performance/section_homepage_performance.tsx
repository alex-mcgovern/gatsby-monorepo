import React from "react";
import { Box, BoxProps } from "../../../atoms/box/box";
import MetricGraphCard from "./components/metric_graph_card";
import useWebVitals from "./hooks/use_web_vitals";

interface SectionHomepagePerformanceProps {}

const BOX_PROPS: BoxProps = {
  variant: {
    backgroundColor: "neutral_ui_1",
    borderRadius: "sm",
  },
  customisation: {
    padding: "spacing2",
    boxShadow: "md",
    aspectRatio: "square",
  },
};

const SectionHomepagePerformance = ({}: SectionHomepagePerformanceProps) => {
  const { CLS, FCP, FID, LCP, TTFB } = useWebVitals() || {};

  return (
    <Box
      customisation={{
        marginTop: "spacing3",
        display: "grid",
        gridTemplateColumns: "5x",
        gap: "spacing2",
        maxWidth: "gridSpan6",
      }}
    >
      {/* ——————————————————————————————————————————————
        //      TTFB: Time to first byte
        // —————————————————————————————————————————————— */}

      <MetricGraphCard
        thresholds={{ green: 200, amber: 500 }}
        min={0}
        displayUnit={"ms"}
        max={1000}
        metric={TTFB}
      />

      {/* ——————————————————————————————————————————————
        //      CLS: CUMULATIVE LAYOUT SHIFT
        // —————————————————————————————————————————————— */}

      <MetricGraphCard
        thresholds={{ green: 2500, amber: 400 }}
        min={0}
        displayUnit={"numeric"}
        max={8000}
        metric={CLS}
      />

      {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}

      <MetricGraphCard
        thresholds={{ green: 2500, amber: 400 }}
        displayUnit={"seconds"}
        min={0}
        max={8000}
        metric={FCP}
      />

      {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}

      <MetricGraphCard
        thresholds={{ green: 100, amber: 300 }}
        displayUnit="ms"
        min={0}
        max={500}
        metric={FID}
      />

      {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}

      <MetricGraphCard
        thresholds={{ green: 2500, amber: 400 }}
        displayUnit="seconds"
        min={0}
        max={8000}
        metric={LCP}
      />

      {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}
      {/*
          <MetricGraphCard
            thresholds={{ green: 0.1, amber: 0.25 }}
            label="CLS"
            min={0}
            max={5}
            value={CLS && CLS.toFixed(2)}
          />
        </Box> */}
    </Box>
  );
};

export default SectionHomepagePerformance;
