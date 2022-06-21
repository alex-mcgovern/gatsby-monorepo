import * as React from "react";
import DesktopScreen from "../../../images/svg/ui_mockups/desktop_screen_2.svg";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import Box from "../../atoms/box/box";
import HomepageArtworkPhoneScreen from "./components/phone_screen/phone_screen";
import * as styles from "./homepage_hero_artwork.css";

interface IBioProps {}

const HomepageHeroArtwork = ({}: IBioProps) => {
  const imageClassnames = getFunctionalClassNames({});
  return (
    <Box
      dataSal="slide-up"
      display="grid"
      gap="spacing6"
      alignItems="center"
      color="primary_border_interactive_focus"
      gridAutoFlow="dense"
      gridTemplateColumns={{
        mobile: "1x",
        tablet: "6x",
      }}
    >
      <div
        className={styles.desktopMockup}
        data-sal="zoom-in"
        data-sal-delay="200"
      >
        <DesktopScreen />
      </div>
      {/* <div
        className={styles.terminalMockup}
        data-sal="zoom-in"
        data-sal-delay="600"
      ></div> */}
      {/* <div
        className={styles.phoneMockup}
        data-sal="zoom-in"
        data-sal-delay="400"
      >
        <HomepageArtworkPhoneScreen />
      </div> */}
    </Box>
  );
};

export default HomepageHeroArtwork;
