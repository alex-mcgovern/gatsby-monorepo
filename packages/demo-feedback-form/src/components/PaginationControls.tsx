import React, { useCallback } from "react";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import {
  Box,
  Button,
  Card,
  SelectSingle,
} from "@alexmcgovern/boondoggle.design";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

interface PaginationControlsProps {
  canLoadNext?: boolean;
  canLoadPrevious?: boolean;
  pageNbCurrent?: number;
  indexOfFirstInCursor?: number;
  indexOfLastInCursor?: number;
  loadNext?: () => void;
  loadPrevious?: () => void;
  setCommentsPerPage?: (perPage: number) => void;
  totalNbComments?: number;
  totalNbPages?: number;
}

export function PaginationControls({
  canLoadNext,
  canLoadPrevious,
  pageNbCurrent,
  indexOfFirstInCursor = 0,
  indexOfLastInCursor = 0,
  loadNext,
  loadPrevious,
  setCommentsPerPage,
  totalNbComments,
  totalNbPages,
  ...rest
}: PaginationControlsProps) {
  const updatePerPage = useCallback(
    (newValue: DropdownItem) => {
      if (setCommentsPerPage) {
        setCommentsPerPage(Number(newValue.value));
      }
    },
    [setCommentsPerPage]
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
         * Next/previous buttons
         * ----------------------------------------------- */}

        <Button
          appearance="primary"
          size="lg_square"
          disabled={!canLoadNext}
          iconTrailing={faAngleLeft}
          onClick={loadNext}
          name="load-next"
          data-testid="load-next"
        />
        <Button
          appearance="primary"
          size="lg_square"
          disabled={!canLoadPrevious}
          iconTrailing={faAngleRight}
          onClick={loadPrevious}
          name="load-previous"
          data-testid="load-previous"
        />

        {/** --------------------------------------------
         * Per page
         * ----------------------------------------------- */}

        <SelectSingle
          size="lg"
          placeholder="5"
          items={PER_PAGE_DROPDOWN_ITEMS}
          onValueChange={updatePerPage}
          /** Hidden for space, but also low-tier mobile devices less likely
           * to handle large numbers of dom updates efficiently */
          display={{ mobile: "none", tablet: "block" }}
        />

        {/** --------------------------------------------
         * Pagination state display
         * ----------------------------------------------- */}

        <Box marginLeft="auto" fontStyle="body_sm">
          <div>
            Page <b>{pageNbCurrent ? pageNbCurrent + 1 : 1}</b> of{" "}
            <b>{totalNbPages}</b>
          </div>

          <div>
            <b> {indexOfFirstInCursor + 1}</b>—<b>{indexOfLastInCursor + 1} </b>{" "}
            of <b>{totalNbComments}</b>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
