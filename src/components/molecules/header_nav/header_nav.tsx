import React, { useContext } from "react";
import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";
import { ThemeContext } from "../../../context/theme_context";
import Box from "../../atoms/box/box";
import Button from "../../atoms/button/button/button";
import SingleSelect from "../single_select/single_select/single_select";

const POKEDEX_LINK = createUrlPathFromArray(["en", "pokedex", "1"]);
const KANBAN_LINK = createUrlPathFromArray(["projects", "firebase_kanban"]);
const DROPDOWN_INDEX = [
  { value: "Multilingual Pokedex", link: POKEDEX_LINK },
  { value: "Firebase Kanban", link: KANBAN_LINK },
];

export default function StickyNav() {
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };

  return (
    <Box as="nav" display="flex" justifyContent="center" width="100%">
      <Box
        display="flex"
        marginY="spacing3"
        justifyContent="space-between"
        width="gridWidth"
      >
        <Button leadingIcon="house" size="sm" to="/" title="Home" />

        <Box display="flex" alignItems="center">
          <Button title="Blog" to="/blog" size="sm" variant="tertiary" />

          <SingleSelect
            searchIndex={DROPDOWN_INDEX}
            size="sm"
            value="Projects"
            variant="tertiary"
          />
          <Button size="sm" to="/" title="Connect" variant="tertiary" />
          <Button
            leadingIcon={darkMode ? "sun" : "moon"}
            onClick={onClick}
            size="sm"
            variant="tertiary"
          />
        </Box>
      </Box>
    </Box>
  );
}
