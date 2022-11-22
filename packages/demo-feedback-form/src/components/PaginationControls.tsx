import React from "react";
import { Box, Button } from "@alexmcgovern/boondoggle.design";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import type { PaginationStateShape } from "../hooks/usePaginatedComments";

interface PaginationControlsProps {
  totalPages: number;
  paginationState: PaginationStateShape;
  comments: unknown;
  commentsLoading: boolean;
  canLoadOlderComments: boolean;
  canLoadNewerComments: boolean;
  loadOlderComments: () => void;
  loadNewerComments: () => void;
}

export function PaginationControls({
  totalPages,
  paginationState,
  comments,
  commentsLoading,
  canLoadOlderComments,
  canLoadNewerComments,
  loadOlderComments,
  loadNewerComments,
}: PaginationControlsProps) {
  return (
    <Box marginLeft="auto" display="flex" gap="spacing0">
      {/* <div>
        Page <b>{paginationState.current}</b> of <b>{totalPages}</b>
      </div> */}
      <Button
        appearance="secondary"
        disabled={!comments || commentsLoading || !canLoadOlderComments}
        iconLeading={faAngleLeft}
        onClick={loadOlderComments}
      >
        Older
      </Button>
      <Button
        appearance="secondary"
        disabled={!comments || commentsLoading || !canLoadNewerComments}
        iconTrailing={faAngleRight}
        onClick={loadNewerComments}
      >
        Newer
      </Button>
    </Box>
  );
}
