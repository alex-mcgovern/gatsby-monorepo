import React from "react";
import { createUrlPathFromArray } from "../../../../../utils/create_url_path_from_array";
import Button from "../../../atoms/button/button/button";
import Box from "../../../layout/box/box";
import Search from "../../search/search/search";
import SingleSelect from "../../single_select/single_select/single_select";

interface PokedexNavProps {
  isTopLevel?: boolean;
  languageIndex?: {}[];
  languageISO: string;
  placeholder?: string;
  searchIndex?: {}[];
}

export default function PokedexNav({
  isTopLevel,
  languageIndex,
  languageISO,
  placeholder,
  searchIndex,
}: PokedexNavProps) {
  const currentLanguageUpperCase = languageISO.toUpperCase();
  const allPokemonLink = createUrlPathFromArray([languageISO, "pokedex", 1]);
  return (
    <Box
      display="flex"
      marginY="spacing3"
      justifyContent={"space-between"}
      outline="dashed"
    >
      {!isTopLevel && (
        <Button
          leadingIcon="angle-left"
          size="lg"
          to={allPokemonLink}
          trailingIcon="grip"
          variant="secondary"
        />
      )}

      <Search size="lg" searchIndex={searchIndex} placeholder={placeholder} />

      <SingleSelect
        searchIndex={languageIndex}
        size="lg"
        value={currentLanguageUpperCase}
      />
    </Box>
  );
}

PokedexNav.defaultProps = {
  searchIndex: [],
  languageISO: "",
  placeholder: "",
  languageIndex: [],
  isTopLevel: false,
};
