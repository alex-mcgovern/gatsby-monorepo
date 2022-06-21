import * as React from "react";
import DesktopAnimation from "../../../images/svg/animations/animation_v5.svg";
import { RESPONSIVE_MAX_WIDTH_PROPS } from "../../../utils/shared_props/box_props";
import Box from "../../atoms/box/box";
import Button from "../../atoms/button/button";
import RemarkMarkdown from "../../util_components/remark_markdown/remark_markdown";
import { animationWrapper } from "./section_homepage.css";

interface IBioProps {
  bio: string;
}

const SectionHomepageBio = ({ bio }: IBioProps) => {
  return (
    <Box
      paddingTop="spacing24"
      paddingBottom="spacing16"
      display="grid"
      gap="spacing3"
      alignItems="center"
      gridTemplateColumns={{
        mobile: "1x",
        tablet: "1_2",
        desktop: "1_3",
      }}
      {...RESPONSIVE_MAX_WIDTH_PROPS}
    >
      <Box dataSal="slide-up">
        <RemarkMarkdown htmlAst={bio} />

        <Box marginY="spacing3" display="flex" gap="spacing1">
          <Button
            trailingIcon="arrow-right"
            title="Get in touch"
            to="/contact/"
          />
          <Button
            // trailingIcon="arrow-right"
            title="Read an intro blog post"
            to="/hello-world/"
            variant="secondary"
          />
        </Box>
      </Box>
      <Box color="primary_ui_base" dataSal="zoom-in" dataSalDelay={400}>
        <DesktopAnimation className={animationWrapper} />
      </Box>
    </Box>
  );
};

export default SectionHomepageBio;
