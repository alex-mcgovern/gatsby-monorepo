import React from "react";
import PropTypes from "prop-types";
import { createUrlPathFromArray } from "../../../../../utils/create_url_path_from_array";
import Button from "../../../atoms/button/button";
import Search from "../../search/search/search";
import SingleSelect from "../../single_select/single_select/single_select";
import * as classes from "./pokedex_nav.module.scss";

export default function PokedexNav({
  searchIndex,
  languageISO,
  placeholder,
  languageIndex,
  isTopLevel,
}) {
  const currentLanguageUpperCase = languageISO.toUpperCase();
  const allPokemonLink = createUrlPathFromArray([languageISO, "pokedex", 1]);
  return (
    <div className={classes.pokedex_nav}>
      {!isTopLevel && (
        <div className={classes.pokedex_nav_button}>
          <Button
            variant="secondary"
            leadingIcon="angle-left"
            to={allPokemonLink}
            title="All pokemon"
          />
        </div>
      )}
      <div className={classes.pokedex_nav_search}>
        <Search searchIndex={searchIndex} placeholder={placeholder} />
      </div>
      <div className={classes.pokedex_nav_button}>
        <SingleSelect
          value={currentLanguageUpperCase}
          searchIndex={languageIndex}
        />
      </div>
    </div>
  );
}

PokedexNav.propTypes = {
  searchIndex: PropTypes.arrayOf(PropTypes.shape({})),
  languageISO: PropTypes.string,
  placeholder: PropTypes.string,
  languageIndex: PropTypes.arrayOf(PropTypes.shape({})),
  isTopLevel: PropTypes.bool,
};

PokedexNav.defaultProps = {
  searchIndex: [],
  languageISO: "",
  placeholder: "",
  languageIndex: [],
  isTopLevel: false,
};
