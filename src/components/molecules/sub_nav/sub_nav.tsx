import React from "react";
import * as classes from "./sub_nav.module.scss";

interface SubNavProps {
  title?: string;
  children?: React.ReactNode;
}

export default function SubNav({ title, children }: SubNavProps) {
  return (
    <nav className={classes.sub_nav}>
      <div className={classes.sub_nav_inner}>
        <h1 className={classes.sub_nav_heading}>{title}</h1>
        {children && <menu className={classes.sub_nav_menu}>{children}</menu>}
      </div>
    </nav>
  );
}

SubNav.defaultProps = {
  title: null,
  children: null,
};
