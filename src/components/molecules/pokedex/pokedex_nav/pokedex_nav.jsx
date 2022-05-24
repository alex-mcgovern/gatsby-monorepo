import React from "react";
import PropTypes from "prop-types";
import Button from "../../../atoms/button/button";
import Search from "../../search/search/search";
import SingleSelect from "../../single_select/single_select/single_select";
import * as classes from "./pokedex_nav.module.scss";

export default function PokedexNav({
  searchIndex,
  languagePretty,
  placeholder,
  languageIndex,
}) {
  return (
    <div className={classes.pokedex_nav}>
      <div className={classes.pokedex_nav_button}>
        <Button
          variant="secondary"
          leadingIcon="angle-left"
          to="/en/pokedex"
          title="All pokemon"
        />
      </div>
      <div className={classes.pokedex_nav_search}>
        <Search searchIndex={searchIndex} placeholder={placeholder} />
      </div>
      <div className={classes.pokedex_nav_button}>
        <SingleSelect value={languagePretty} searchIndex={languageIndex} />
      </div>
    </div>
  );
}

PokedexNav.propTypes = {
  placeholder: PropTypes.string,
  pageContext: PropTypes.shape({
    subNavData: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

PokedexNav.defaultProps = {
  placeholder: "Search for another pokemon",
  pageContext: {
    subNavData: [],
  },
};
