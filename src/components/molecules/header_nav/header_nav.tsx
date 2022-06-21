import React, { useContext } from "react";
import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";
import { ThemeContext } from "../../../context/theme_context";
import { RESPONSIVE_MAX_WIDTH_PROPS } from "../../../utils/shared_props/box_props";
import Box from "../../atoms/box/box";
import Button from "../../atoms/button/button";
import SingleSelect from "../single_select/single_select/single_select";

const POKEDEX_LINK = createUrlPathFromArray(["en", "pokedex", "1"]);
const KANBAN_LINK = createUrlPathFromArray(["projects", "firebase-kanban"]);
const DESIGN_SYSTEM_LINK = createUrlPathFromArray([
  "projects",
  "design-system",
]);
const DROPDOWN_INDEX = [
  { value: "Multilingual Pokedex", link: POKEDEX_LINK },
  { value: "Firebase Kanban", link: KANBAN_LINK },
  { value: "Design system", link: DESIGN_SYSTEM_LINK },
];

export default function StickyNav() {
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };

  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="center"
      width="100%"
      // position="absolute"
      marginBottom="offSetHeader"
    >
      <Box
        display="flex"
        marginY="spacing3"
        justifyContent="space-between"
        width="gridWidth"
        {...RESPONSIVE_MAX_WIDTH_PROPS}
      >
        <Button leadingIcon="house" size="md" to="/" title="Home" />

        <Box display="flex" alignItems="center" gap="spacing2">
          <Button title="Blog" to="/blog" size="md" variant="tertiary" />

          <SingleSelect
            searchIndex={DROPDOWN_INDEX}
            size="md"
            value="Projects"
            variant="tertiary"
          />
          <Button size="md" to="/" title="Connect" variant="tertiary" />
          <Button
            leadingIcon={darkMode ? "sun" : "moon"}
            onClick={onClick}
            size="md"
            variant="tertiary"
          />
        </Box>
      </Box>
    </Box>
  );
}
