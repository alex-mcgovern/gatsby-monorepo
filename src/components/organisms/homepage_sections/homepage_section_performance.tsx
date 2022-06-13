import React from "react";
import Typography, { ITypography } from "../../atoms/typography/typography";
import Box, { IBox } from "../../layout/box/box";
import reportHandler from "./components/report_handler";
import useWebVitals from "./components/use_web_vitals";

interface HomepageSectionPerformanceProps {}

const BOX_PROPS: IBox = {
  padding: "spacing3",
  background: { lightMode: "white", darkMode: "gray3" },
  borderRadius: "md",
  boxShadow: "shadowDark",
  aspectRatio: "square",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const METRIC_LABEL_PROPS: ITypography = {
  fontSize: "body_sm",
  textTransform: "uppercase",
  display: "block",
};

const METRIC_PROPS: ITypography = {
  fontSize: "h2",
  fontWeight: "extrabold",
  textTransform: "uppercase",
  display: "block",
};

const HomepageSectionPerformance = ({}: HomepageSectionPerformanceProps) => {
  const { CLS, FCP, FID, LCP, TTFB } = useWebVitals() || {};

  console.log({ CLS, FCP, FID, LCP, TTFB });
  return (
    <Box
      as="section"
      marginY="spacing6"
      display="grid"
      gap="spacing4"
      alignItems="center"
      gridTemplateColumns={{
        desktop: "1_1",
        tablet: "1",
      }}
    >
      <Box
        marginY="spacing3"
        display="grid"
        gridTemplateColumns="1_1"
        gap="spacing3"
      >
        {CLS && (
          <Box {...BOX_PROPS}>
            <Typography {...METRIC_LABEL_PROPS}>
              Cumulative layout shift
            </Typography>
            {CLS.toFixed(2)}
          </Box>
        )}

        {FID && FID && (
          <Box {...BOX_PROPS}>
            <Typography {...METRIC_LABEL_PROPS}>First input delay</Typography>
            <Typography {...METRIC_PROPS}>{FID.toFixed(2)}</Typography>
          </Box>
        )}
        {LCP && (
          <Box {...BOX_PROPS}>
            <Typography {...METRIC_LABEL_PROPS}>
              Longest contentful paint
            </Typography>
            <Typography {...METRIC_PROPS}>{LCP.toFixed(0)}</Typography>
          </Box>
        )}

        {FCP && (
          <Box {...BOX_PROPS}>
            <Typography {...METRIC_LABEL_PROPS}>
              First contentful paint
            </Typography>
            <Typography {...METRIC_PROPS}>{FCP.toFixed(0)}</Typography>
          </Box>
        )}
      </Box>

      <Box marginY="spacing10">
        <h3>I love building performant web.</h3>
        <p>
          I ❤️ React, TypeScript, GatsbyJS, SASS, React Testing Library and
          Cypress.
        </p>
        <p>My newest shiny toy is the excellent vanilla-extract library.</p>
      </Box>
    </Box>
  );
};

export default HomepageSectionPerformance;
