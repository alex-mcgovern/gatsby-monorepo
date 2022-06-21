import React from "react";
import {
  RESPONSIVE_MAX_WIDTH_PROPS,
  SECTION_PROPS,
} from "../../../utils/shared_props/box_props";
import Box, { IBox } from "../../atoms/box/box";
import Typography from "../../atoms/typography/typography";
import MetricGraphCard from "./components/metric_graph_card";
import useWebVitals from "./components/use_web_vitals";

interface SectionHomepagePerformanceProps {}

const BOX_PROPS: IBox = {
  padding: "spacing2",
  backgroundColor: "neutral_ui_base",
  borderRadius: "md",
  boxShadow: "shadowLight",
  aspectRatio: "square",
};

const SectionHomepagePerformance = ({}: SectionHomepagePerformanceProps) => {
  const { CLS, FCP, FID, LCP, TTFB } = useWebVitals() || {};

  return (
    <Box
      {...RESPONSIVE_MAX_WIDTH_PROPS}
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
          color="primary_text_lowContrast"
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
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}
        <Box {...BOX_PROPS}>
          <MetricGraphCard
            thresholds={{ green: 2.5, amber: 4 }}
            label="FCP"
            unit={"seconds"}
            min={0}
            max={8}
            value={FCP && (FCP / 1000).toFixed(2)}
          />
        </Box>

        {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}
        <Box {...BOX_PROPS}>
          <MetricGraphCard
            thresholds={{ green: 100, amber: 300 }}
            label="FID"
            unit={"ms"}
            min={0}
            max={500}
            value={FID && FID.toFixed(2)}
          />
        </Box>

        {/* ——————————————————————————————————————————————
        //      FCP: FIRST CONTENTFUL PAINT             
        // —————————————————————————————————————————————— */}
        <Box {...BOX_PROPS}>
          <MetricGraphCard
            thresholds={{ green: 2.5, amber: 4 }}
            label="LCP"
            unit={"seconds"}
            min={0}
            max={8}
            value={LCP && (LCP / 1000).toFixed(2)}
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
