import React from "react";
import classNames from "classnames";
import * as classes from "./responsive_grid.module.scss";

interface ResponsiveGridProps {
  children: React.ReactNode[];
  split?: number;
}

export default function ResponsiveGrid({
  split,
  children,
}: ResponsiveGridProps) {
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
