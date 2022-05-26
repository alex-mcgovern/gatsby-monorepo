import React from "react";
import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";
import Button from "../../atoms/button/button/button";
import ButtonWrapper from "../../atoms/button/button_wrapper/button_wrapper";
import SingleSelect from "../single_select/single_select/single_select";
import * as classes from "./sticky_nav.module.scss";

const POKEDEX_LINK = createUrlPathFromArray(["en", "pokedex", "1"]);
const DROPDOWN_INDEX = [{ value: "Multilingual Pokedex", link: POKEDEX_LINK }];

export default function StickyNav() {
  return (
    <nav className={classes.sticky_nav}>
      <div className={classes.sticky_nav_inner}>
        <ButtonWrapper>
          <Button leadingIcon="house" to="/" title="Home" />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            leadingIcon="house"
            variant="secondary"
            to="/blog"
            title="Blog"
          />

          <SingleSelect value="Projects" searchIndex={DROPDOWN_INDEX} />
          <Button to="/" title="Connect" />
        </ButtonWrapper>
      </div>
    </nav>
  );
}
