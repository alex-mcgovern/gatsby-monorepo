import React from "react";
import PropTypes from "prop-types";
import Worklet from "./worklet";

export default function Hero({ prop }) {
  if (CSS.paintWorklet) {
    CSS.paintWorklet.addModule(Worklet);
  }
  return <div className="worklet-canvas" />;
}

Hero.propTypes = {
  prop: PropTypes.string,
};

Hero.defaultProps = {
  prop: null,
};
