import React, { useCallback, useContext, useMemo } from "react";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import {
  Box,
  Button,
  Card,
  SelectSingle,
} from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import {
  faAngleLeft,
  faAngleRight,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import type { UsePaginatedCommentsStateShape } from "../utils/usePaginatedComments";
import { FeedbackFormDialog } from "./FeedbackFormDialog";

const PER_PAGE_DROPDOWN_ITEMS: Array<DropdownItem> = [
  {
    label: "5 per page",
    value: "5",
  },
  {
    label: "10 per page",
    value: "10",
  },
  {
    label: "25 per page",
    value: "25",
  },
  {
    label: "50 per page",
    value: "50",
  },
];

export function PaginationControls({
  canLoadNext,
  canLoadPrevious,
  currentPage,
  firstItemIndex = 0,
  lastItemIndex = 0,
  loadNext,
  loadPrevious,
  setPerPage,
  totalNbComments,
  totalNbPages,
  ...rest
}: Partial<UsePaginatedCommentsStateShape>) {
  const { user } = useContext(FirebaseContext) || {};

  /**
   * State passed to `Link` to login page, to return user here
   * after sign in.
   */
  const linkState = useMemo(() => {
    return { returnTo: "/" };
  }, []);

  const updatePerPage = useCallback(
    (newValue: DropdownItem) => {
      if (setPerPage) {
        setPerPage(Number(newValue.value));
      }
    },
    [setPerPage]
  );

  return (
    <Box
      position="sticky"
      top="0"
      paddingTop="spacing1"
      background="neutral_background_raised"
      zIndex="1"
      {...rest}
    >
      <Card
        boxShadow="lg"
        display="flex"
        gap="spacing1"
        alignItems="center"
        flexWrap="wrap"
      >
        {/** --------------------------------------------
         * Login / leave feedback button
         * ----------------------------------------------- */}

        {user ? (
          <FeedbackFormDialog />
        ) : (
          <Button
            size="lg"
            as={Link}
            iconLeading={faRightToBracket}
            state={linkState}
            to="/login"
            width="max-content"
          >
            Log in to leave feedback
          </Button>
        )}

        {/** --------------------------------------------
         * Pagination state display
         * ----------------------------------------------- */}

        <Box marginLeft="auto">
          <div>
            Page <b>{currentPage ? currentPage + 1 : 1}</b> of{" "}
            <b>{totalNbPages}</b>
          </div>

          <div>
            <b> {firstItemIndex + 1}</b>—<b>{lastItemIndex + 1} </b> of{" "}
            <b>{totalNbComments}</b>
          </div>
        </Box>

        {/** --------------------------------------------
         * Per page
         * ----------------------------------------------- */}

        <SelectSingle
          size="lg"
          placeholder="5"
          items={PER_PAGE_DROPDOWN_ITEMS}
          onValueChange={updatePerPage}
        />

        {/** --------------------------------------------
         * Next/previous buttons
         * ----------------------------------------------- */}

        <Button
          size="lg"
          appearance="primary"
          disabled={!canLoadNext}
          iconLeading={faAngleLeft}
          onClick={loadNext}
        >
          Older
        </Button>

        <Button
          size="lg"
          appearance="primary"
          disabled={!canLoadPrevious}
          iconTrailing={faAngleRight}
          onClick={loadPrevious}
        >
          Newer
        </Button>
      </Card>
    </Box>
  );
}
