import React from "react";
import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";
import Button from "../../atoms/button/button/button";
import Box from "../../layout/box/box";
import SingleSelect from "../single_select/single_select/single_select";

const POKEDEX_LINK = createUrlPathFromArray(["en", "pokedex", "1"]);
const DROPDOWN_INDEX = [{ value: "Multilingual Pokedex", link: POKEDEX_LINK }];

export default function StickyNav() {
  return (
    <Box as="nav" display="flex" justifyContent="center" width="100%">
      <Box
        display="flex"
        margin="xs"
        justifyContent="space-between"
        width="gridWidth"
      >
        <Box outline="dashed">
          <Button leadingIcon="house" size="sm" to="/" title="Home" />
        </Box>
        <Box display="flex" gap="small">
          <Button variant="secondary" size="sm" to="/blog" title="Blog" />

          <SingleSelect
            size="sm"
            value="Projects"
            searchIndex={DROPDOWN_INDEX}
          />
          <Button size="sm" to="/" title="Connect" />
        </Box>
      </Box>
    </Box>
  );
}
