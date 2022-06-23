import * as React from "react";
import DesktopAnimation from "../../../../images/svg/animations/animation_v5.svg";
import { BOX_PROPS_CONTAINED } from "../../../../utils/shared_props/box_props";
import Box from "../../../atoms/box/box";
import Button from "../../../atoms/button/button";
import RemarkMarkdown from "../../../util_components/remark_markdown/remark_markdown";
import { animationWrapper } from "./section_homepage_hero.css";

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
      }}
      {...BOX_PROPS_CONTAINED}
    >
      <Box dataSal="slide-up">
        <RemarkMarkdown htmlAst={bio} />

        <Box marginY="spacing3" display="flex" gap="spacing1">
          <Button
            iconTrailing="arrow-right"
            title="Get in touch"
            to="/contact/"
            size="lg"
          />
          <Button
            // iconTrailing="arrow-right"
            title="Read an intro blog post"
            to="/hello-world/"
            appearance="secondary"
            size="lg"
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
