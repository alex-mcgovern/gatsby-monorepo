import React from "react";
import { createUrlPathFromArray } from "../../../../../utils/create_url_path_from_array";
import Button from "../../../atoms/button/button/button";
import Search from "../../search/search/search";
import SingleSelect from "../../single_select/single_select/single_select";
import * as classes from "./pokedex_nav.module.scss";

interface PokedexNavProps {
  searchIndex?: {}[];
  languageISO: string;
  placeholder?: string;
  languageIndex?: {}[];
  isTopLevel?: boolean;
}

export default function PokedexNav({
  searchIndex,
  languageISO,
  placeholder,
  languageIndex,
  isTopLevel,
}: PokedexNavProps) {
  const currentLanguageUpperCase = languageISO.toUpperCase();
  const allPokemonLink = createUrlPathFromArray([languageISO, "pokedex", 1]);
  return (
    <div className={classes.pokedex_nav}>
      {!isTopLevel && (
        <div className={classes.pokedex_nav_button}>
          <Button
            size="lg"
            variant="secondary"
            leadingIcon="angle-left"
            trailingIcon="grip"
            to={allPokemonLink}
          />
        </div>
      )}
      <div className={classes.pokedex_nav_search}>
        <Search size="lg" searchIndex={searchIndex} placeholder={placeholder} />
      </div>
      <div className={classes.pokedex_nav_button}>
        <SingleSelect
          size="lg"
          value={currentLanguageUpperCase}
          searchIndex={languageIndex}
        />
      </div>
    </div>
  );
}

PokedexNav.defaultProps = {
  searchIndex: [],
  languageISO: "",
  placeholder: "",
  languageIndex: [],
  isTopLevel: false,
};
