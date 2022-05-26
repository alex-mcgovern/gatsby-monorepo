import React from "react";
import PropTypes from "prop-types";
import Button from "../../../atoms/button/button/button";
import Section from "../../../section/section_outer";
import { buttonWrapperStyle } from "./pokedex_navigation.module.scss";

function PokedexNavigation({ currentLang, currentPage, pageCount }) {
  const firstPath = `/${currentLang}/pokedex/1`;
  const previousPath = `/${currentLang}/pokedex/${Number(currentPage) - 1}`;
  const nextPath = `/${currentLang}/pokedex/${Number(currentPage) + 1}`;
  const lastPath = `/${currentLang}/pokedex/${pageCount}`;
  return (
    <Section>
      <div className={buttonWrapperStyle}>
        <Button
          variant="secondary"
          leadingIcon="angles-left"
          to={firstPath}
          title="First"
        />
        <Button
          variant="secondary"
          leadingIcon="angle-left"
          to={previousPath}
          title="Previous"
        />
        <Button
          variant="secondary"
          trailingIcon="angle-right"
          to={nextPath}
          title="Next"
        />
        <Button
          variant="secondary"
          trailingIcon="angles-right"
          to={lastPath}
          title="Last"
        />
      </div>
    </Section>
  );
}

PokedexNavigation.propTypes = {
  currentLang: PropTypes.string,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
};

PokedexNavigation.defaultProps = {
  currentLang: "en",
  currentPage: 0,
  pageCount: 0,
};

export default PokedexNavigation;
