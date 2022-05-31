import React from "react";
import Box from "../../layout/box/box";
import { responsiveGrid } from "./responsive_grid.css";

interface ResponsiveGridProps {
  children: React.ReactNode[];
  split?: 2 | 3 | 4;
}

export default function ResponsiveGrid({
  split,
  children,
}: ResponsiveGridProps) {
  const gridStyle = responsiveGrid({
    split,
  });

  return (
    <ul className={gridStyle}>
      {children.map((child) => {
        return (
          <Box outline="dashed" as="li">
            {child}
          </Box>
        );
      })}
    </ul>
  );
}
