import React from "react";
import {
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../../../../utils/shared_props/box_props";
import { Box, IBox } from "../../../atoms/box/box";
import { Typography } from "../../../atoms/typography/typography";
import MetricGraphCard from "./components/metric_graph_card";
import useWebVitals from "./hooks/use_web_vitals";

interface SectionHomepagePerformanceProps {}

const BOX_PROPS: IBox = {
  customisation: {
    padding: "spacing2",
    backgroundColor: "neutral_bg_3",
    borderRadius: "sm",
    boxShadow: "shadowLight",
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
        gap: "spacing3",
      }}
    >
      {/* ——————————————————————————————————————————————
        //      TTFB: Time to first byte
        // —————————————————————————————————————————————— */}
      <Box {...BOX_PROPS}>
        <MetricGraphCard
          thresholds={{ green: 200, amber: 500 }}
          min={0}
          displayUnit={"ms"}
          max={1000}
          metric={TTFB}
        />
      </Box>
      {/* ——————————————————————————————————————————————
        //      CLS: CUMULATIVE LAYOUT SHIFT
        // —————————————————————————————————————————————— */}
      <Box {...BOX_PROPS}>
        <MetricGraphCard
          thresholds={{ green: 2500, amber: 400 }}
          min={0}
          max={8000}
          metric={CLS}
        />
      </Box>
      {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}
      <Box {...BOX_PROPS}>
        <MetricGraphCard
          thresholds={{ green: 2500, amber: 400 }}
          displayUnit={"seconds"}
          min={0}
          max={8000}
          metric={FCP}
        />
      </Box>

      {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}
      <Box {...BOX_PROPS}>
        <MetricGraphCard
          thresholds={{ green: 100, amber: 300 }}
          displayUnit="ms"
          min={0}
          max={500}
          metric={FID}
        />
      </Box>

      {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}
      <Box {...BOX_PROPS}>
        <MetricGraphCard
          thresholds={{ green: 2500, amber: 400 }}
          displayUnit="seconds"
          min={0}
          max={8000}
          metric={LCP}
        />
      </Box>

      {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}
      {/* <Box {...BOX_PROPS}>
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
