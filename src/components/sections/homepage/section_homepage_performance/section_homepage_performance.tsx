import React from "react";
import { BOX_PROPS_CONTAINED } from "../../../../utils/shared_props/box_props";
import Box, { IBox } from "../../../atoms/box/box";
import Typography from "../../../atoms/typography/typography";
import MetricGraphCard from "./components/metric_graph_card";
import useWebVitals from "./hooks/use_web_vitals";

interface SectionHomepagePerformanceProps {}

const BOX_PROPS: IBox = {
  padding: "spacing2",
  backgroundColor: "neutral_ui_base",
  borderRadius: "sm",
  boxShadow: "shadowLight",
  aspectRatio: "square",
};

const SectionHomepagePerformance = ({}: SectionHomepagePerformanceProps) => {
  const { CLS, FCP, FID, LCP, TTFB } = useWebVitals() || {};

  return (
    <Box
      {...BOX_PROPS_CONTAINED}
      margin="spacing10"
      display="grid"
      gap="spacing3"
      alignItems="center"
      gridTemplateColumns={{
        desktop: "2x",
        tablet: "1x",
      }}
    >
      <Box marginY="spacing10">
        <Typography
          fontSize="h6"
          fontWeight="medium"
          color="accent_text_lowContrast"
          // marginBottom="spacing6"
        >
          Lightweight & fast
        </Typography>
        <h3>Big sites, tiny bundles.</h3>
        <p>
          By creating highly modular components, and leveraging SSG and
          bundle-splitting, I keep performance high, even as pages climb into
          the hundreds, and complex features and dependencies are added.
        </p>
      </Box>

      <Box
        marginY="spacing3"
        display="grid"
        gridTemplateColumns="3x"
        gap="spacing3"
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
    </Box>
  );
};

export default SectionHomepagePerformance;
