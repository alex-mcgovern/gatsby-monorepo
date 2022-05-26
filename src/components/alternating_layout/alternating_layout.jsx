import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./alternating_layout.module.scss";

export default function AlternatingLayout({ children, ratio }) {
  const alternatingLayoutClassNames = classNames(classes.alternating_layout, {
    [classes.ratio_2_1]: ratio === "2_1",
    [classes.ratio_1_2]: ratio === "1_2",
  });
  return <div className={alternatingLayoutClassNames}>{children}</div>;
}

AlternatingLayout.propTypes = {
  children: PropTypes.node,
  ratio: PropTypes.oneOf([null, "2_1", "1_2"]),
};

AlternatingLayout.defaultProps = {
  children: null,
  ratio: null,
};
