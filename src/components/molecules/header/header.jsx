import React from "react";
import PropTypes from "prop-types";
import LayoutDecorativeArrows from "../../layout/layout_decorative_arrows/layout_decorative_arrows.tsx";
import * as classes from "./header.module.scss";

const ROOT_TEXT_OPTIONS = [
  "Hello.",
  "Yo.",
  "Ciao.",
  "Greetings.",
  "Dia duit. (That means hello in Irish)",
  "// ToDo: Write greeting",
];

const ALTERNATE_TEXT_OPTIONS = ["Hmmmm...", "A thought...", "Witty title."];

function Header({ isRootPath }) {
  const textOptions = isRootPath ? ROOT_TEXT_OPTIONS : ALTERNATE_TEXT_OPTIONS;

  const heroText = textOptions[Math.floor(Math.random() * textOptions.length)];

  return (
    <header className={classes.hero}>
      <div className={classes.hero_inner}>
        <LayoutDecorativeArrows />
        <div className={classes.hero_inner_text}>
          <h1 className={classes.hero_inner_h1}>Alex McGovern Smith</h1>
          <h2 className={classes.hero_inner_h2}>{heroText}</h2>
        </div>
        <LayoutDecorativeArrows />
      </div>
      <div className={classes.hero_placeholder} />
    </header>
  );
}

Header.propTypes = {
  isRootPath: PropTypes.bool,
};

Header.defaultProps = {
  isRootPath: false,
};

export default Header;
