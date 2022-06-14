import React from "react";
import Typography, { ITypography } from "../../atoms/typography/typography";
import Box, { IBox } from "../../layout/box/box";
import CircularProgressBar from "../../molecules/circular_progress_bar/circular_progress_bar";
import MetricGraphCard from "./components/metric_graph_card";
import reportHandler from "./components/report_handler";
import useWebVitals from "./components/use_web_vitals";

interface HomepageSectionPerformanceProps {}

const BOX_PROPS: IBox = {
  padding: "spacing3",
  background: { lightMode: "white", darkMode: "gray3" },
  borderRadius: "md",
  boxShadow: "shadowDark",
  aspectRatio: "square",
};

const HomepageSectionPerformance = ({}: HomepageSectionPerformanceProps) => {
  const { CLS, FCP, FID, LCP, TTFB } = useWebVitals() || {};

  console.log({ CLS, FCP, FID, LCP, TTFB });
  return (
    <Box
      as="section"
      marginY="spacing6"
      display="grid"
      gap="spacing6"
      alignItems="center"
      gridTemplateColumns={{
        desktop: "1_1",
        tablet: "1",
      }}
    >
      <Box marginY="spacing10">
        <h3>I love building performant web.</h3>
        <p>
          These are the stats for this site. Not looking good? Send me an email!
        </p>
      </Box>

      <Box
        marginY="spacing3"
        display="grid"
        gridTemplateColumns="1_1"
        gap="spacing3"
      >
        <Box {...BOX_PROPS}>
          <MetricGraphCard
            thresholds={{ green: 0.1, amber: 0.25 }}
            label="CLS"
            min={0}
            max={5}
            value={CLS && CLS.toFixed(2)}
          />
        </Box>

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
      </Box>
    </Box>
  );
};

export default HomepageSectionPerformance;
