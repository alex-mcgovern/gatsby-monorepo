import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./responsive_grid.module.scss";

export default function ResponsiveGrid({ split, children }) {
  const gridClassNames = classNames(classes.grid, {
    [classes.split_2]: split === 2,
    [classes.split_3]: split === 3,
  });

  return (
    <ul className={gridClassNames}>
      {children.map((child) => {
        return <li className={classes.grid_item}>{child}</li>;
      })}
    </ul>
  );
}

ResponsiveGrid.propTypes = {
  children: PropTypes.node,
  split: PropTypes.number,
};

ResponsiveGrid.defaultProps = {
  children: null,
  split: null,
};
