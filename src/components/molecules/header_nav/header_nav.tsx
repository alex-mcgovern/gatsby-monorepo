import React, { useContext } from "react";
import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";
import { ThemeContext } from "../../../context/theme_context";
import { BOX_PROPS_CONTAINED } from "../../../utils/shared_props/box_props";
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
  {
    value: "BobUI Design system",
    label: "BobUI Design system",
    link: DESIGN_SYSTEM_LINK,
  },
  { value: "Firebase Kanban", label: "Firebase Kanban", link: KANBAN_LINK },
  {
    value: "Multilingual Pokedex",
    label: "Multilingual Pokedex",
    link: POKEDEX_LINK,
  },
];

export default function StickyNav() {
  const { dark, toggleDark } = useContext(ThemeContext);

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
        {...BOX_PROPS_CONTAINED}
      >
        <Button iconLeading="house" size="sm" to="/" title="Home" />

        <Box display="flex" alignItems="center" gap="spacing2">
          <Button title="Blog" to="/blog" size="sm" appearance="tertiary" />

          <SingleSelect
            dropdownItems={DROPDOWN_INDEX}
            size="sm"
            value="Projects"
            appearance="tertiary"
          />
          <Button size="sm" to="/" title="Connect" appearance="tertiary" />
          <Button
            iconLeading={dark ? "sun" : "moon"}
            onClick={toggleDark}
            size="sm"
            appearance="tertiary"
          />
        </Box>
      </Box>
    </Box>
  );
}
