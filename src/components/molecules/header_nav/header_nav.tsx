import React, { useContext } from "react";
import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";
import { ThemeContext } from "../../../context/theme_context";
import Button from "../../atoms/button/button/button";
import Box from "../../layout/box/box";
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

        <Box display="flex" gap="spacing1">
          <Button variant="secondary" size="sm" to="/blog" title="Blog" />

          <SingleSelect
            size="sm"
            value="Projects"
            searchIndex={DROPDOWN_INDEX}
          />
          <Button size="sm" to="/" title="Connect" />
          <Button
            size="sm"
            to="/"
            leadingIcon={"angle-right"}
            // onClick={onClick}
          />
        </Box>
      </Box>
    </Box>
  );
}
