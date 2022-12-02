import React, { useCallback, useContext } from "react";
import type { ButtonProps } from "@alexmcgovern/boondoggle.design";
import { Box, Button, ThemeContext } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import {
  faBook,
  faHouseUser,
  faMoon,
  faRightFromBracket,
  faRightToBracket,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const NAV_BUTTON_COMMON_PROPS: ButtonProps = {
  appearance: "uiLink",
  color: "neutral",
};

export function Header() {
  const { dark, toggleDark } = useContext(ThemeContext);
  const { user, firebaseAuth } = useContext(FirebaseContext) || {};

  const handleSignOut = useCallback(() => {
    return firebaseAuth?.signOut();
  }, [firebaseAuth]);

  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      paddingY="spacing2"
    >
      {/** -----------------------------------------------------------------------------
       * LEFT HAND SIDE
       * ------------------------------------------------------------------------------- */}
      <Button
        {...NAV_BUTTON_COMMON_PROPS}
        as={Link}
        iconLeading={faBook}
        to="/"
      >
        First editions
      </Button>

      {/** -----------------------------------------------------------------------------
       * RIGHT HAND SIDE
       * ------------------------------------------------------------------------------- */}
      <Box as="menu" display="flex" alignItems="center" gap="spacing2">
        {/** Log in/out */}
        {firebaseAuth && user ? (
          <Button
            {...NAV_BUTTON_COMMON_PROPS}
            onClick={handleSignOut}
            iconLeading={faRightFromBracket}
          >
            Log out
          </Button>
        ) : (
          <Button
            {...NAV_BUTTON_COMMON_PROPS}
            as={Link}
            to="/login"
            iconLeading={faRightToBracket}
          >
            Log in
          </Button>
        )}

        {/** Light/dark mode toggle */}
        <Button
          iconLeading={dark ? faSun : faMoon}
          id="header-dark-mode-button"
          onClick={toggleDark}
          size="md_square"
          {...NAV_BUTTON_COMMON_PROPS}
        />
      </Box>
    </Box>
  );
}
