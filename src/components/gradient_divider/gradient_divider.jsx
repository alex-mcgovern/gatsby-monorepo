import React from "react";
import PropTypes from "prop-types";
import * as classes from "./gradient_divider.module.scss";

const ROOT_TEXT_OPTIONS = [
  "Hello.",
  "Yo.",
  "Ciao.",
  "Greetings.",
  "Dia duit. (Hello in Irish)",
  "// ToDo: Write greeting",
  "greeting_v4_final-1_final.ai",
];

const ALTERNATE_TEXT_OPTIONS = ["Hmmmm...", "A thought...", "Witty title."];

function GradientDivider({ isRootPath }) {
  const textOptions = isRootPath ? ROOT_TEXT_OPTIONS : ALTERNATE_TEXT_OPTIONS;

  const GradientDividerText =
    textOptions[Math.floor(Math.random() * textOptions.length)];

  return (
    <div>
      <GradientDivider className={classes.GradientDivider}>
        <div className={classes.GradientDivider_inner}>
          <div className={classes.GradientDivider_inner_h1}>
            {GradientDividerText}
          </div>
          <div className={classes.GradientDivider_inner_h2}>
            Wow. very interesting.
          </div>
          {/* <Bio /> */}
        </div>
      </GradientDivider>
    </div>
  );
}

GradientDivider.propTypes = {
  isRootPath: PropTypes.bool,
};

GradientDivider.defaultProps = {
  isRootPath: false,
};

export default GradientDivider;
