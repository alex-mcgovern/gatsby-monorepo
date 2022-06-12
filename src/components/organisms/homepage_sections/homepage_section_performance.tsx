import React from "react";
import Typography from "../../atoms/typography/typography";
import Box from "../../layout/box/box";
import reportHandler from "./components/report_handler";
import useWebVitals from "./components/use_web_vitals";

interface HomepageSectionPerformanceProps {}

const HomepageSectionPerformance = ({}: HomepageSectionPerformanceProps) => {
  const { CLS, FCP, FID, LCP, TTFB } = useWebVitals() || {};

  console.log({ CLS, FCP, FID, LCP, TTFB });
  return (
    <Box
      as="section"
      marginY="spacing6"
      display="grid"
      gap="spacing3"
      alignItems="center"
      gridTemplateColumns={{
        desktop: "1_1",
        tablet: "1",
      }}
    >
      <Box
        marginY="spacing3"
        display="grid"
        gridTemplateColumns="1_1_1"
        gap="spacing3"
      >
        {CLS && (
          <Box
            padding="spacing3"
            background="white"
            borderRadius="md"
            boxShadow="shadowDark"
            aspectRatio="square"
          >
            <Typography
              fontSize="h6"
              textTransform="uppercase"
              color="navy80"
              whiteSpace="nowrap"
            >
              Cumulative layout shift
            </Typography>
            {CLS.toFixed(2)}
          </Box>
        )}

        {FID && FID && (
          <Box
            padding="spacing3"
            background="white"
            borderRadius="md"
            boxShadow="shadowDark"
            aspectRatio="square"
          >
            <Typography
              fontSize="h6"
              textTransform="uppercase"
              color="navy80"
              display="block"
            >
              First input delay
            </Typography>
            <Typography
              fontSize="h3"
              textTransform="uppercase"
              color="navy80"
              whiteSpace="nowrap"
              display="block"
            >
              {FID.toFixed(2)}
            </Typography>
          </Box>
        )}
        {LCP && (
          <Box
            padding="spacing3"
            background="white"
            borderRadius="md"
            boxShadow="shadowDark"
            aspectRatio="square"
          >
            <Typography
              fontSize="h6"
              textTransform="uppercase"
              color="navy80"
              whiteSpace="nowrap"
              display="block"
              textAlign="center"
            >
              Longest contentful paint
            </Typography>
            <Typography
              fontSize="h3"
              textTransform="uppercase"
              color="navy80"
              whiteSpace="nowrap"
              display="block"
              textAlign="center"
            >
              {LCP.toFixed(0)}
            </Typography>
            <Typography
              fontSize="h6"
              textTransform="uppercase"
              color="navy80"
              whiteSpace="nowrap"
              display="block"
              textAlign="center"
            >
              m/s
            </Typography>
          </Box>
        )}

        {FCP && (
          <Box
            padding="spacing3"
            background="white"
            borderRadius="md"
            boxShadow="shadowDark"
            aspectRatio="square"
          >
            <Typography
              fontSize="h6"
              textTransform="uppercase"
              color="navy80"
              whiteSpace="nowrap"
              display="block"
              textAlign="center"
            >
              First contentful paint
            </Typography>
            <Typography
              fontSize="h3"
              textTransform="uppercase"
              color="navy80"
              whiteSpace="nowrap"
              display="block"
              textAlign="center"
            >
              {FCP.toFixed(0)}
            </Typography>
            <Typography
              fontSize="h6"
              textTransform="uppercase"
              color="navy80"
              whiteSpace="nowrap"
              display="block"
              textAlign="center"
            >
              m/s
            </Typography>
          </Box>
        )}
      </Box>

      <Box marginY="spacing9">
        <h3>I love building for performance</h3>
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
