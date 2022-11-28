import React, { useContext } from "react";
import { Box } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { CommentsList } from "../components/CommentsList";
import { FeedbackGraph } from "../components/FeedbackGraph";
import { PaginationControls } from "../components/PaginationControls";
import { usePaginatedComments } from "../utils/usePaginatedComments";
import { useScrollToTop } from "../utils/useScrollToTop";

export default function FeedbackForm() {
  const { firebaseApp } = useContext(FirebaseContext) || {};

  /**
   * Get comments from firestore, with pagination controls
   */
  const paginationState = usePaginatedComments({
    commentsPerPage: 5,
    firebaseApp,
  });

  /**
   * Scroll to top on change of total comment count, or page count.
   */
  const scrollRef = useScrollToTop(paginationState);

  return (
    <Box as="section" marginY="spacing5" position="relative">
      {/** -----------------------------------------------------------------------------
       * Page header
       * ------------------------------------------------------------------------------- */}
      <Box as="header">
        <Box as="h1">We welcome your feedback</Box>

        <Box as="h2" fontStyle="body_md" fontWeight="normal">
          We hope you had a good experience. Please take one minute to share
          your feedback by clicking on the button below.
        </Box>

        <Box as="p">
          Note: You must be logged in to leave feedback. All feedback is
          publicly visible. You can edit or delete your feedback after you have
          posted it.
        </Box>
      </Box>

      {/** -----------------------------------------------------------------------------
       * Controls
       * ------------------------------------------------------------------------------- */}
      <hr ref={scrollRef} />

      <PaginationControls {...paginationState} />

      {/** -----------------------------------------------------------------------------
       * Graph
       * ------------------------------------------------------------------------------- */}

      <Box
        marginY="spacing3"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box as="h3" fontStyle="h4">
          Feedback performance
        </Box>
      </Box>

      <FeedbackGraph documents={paginationState.documents} />

      <hr />

      {/** -----------------------------------------------------------------------------
       * All comments
       * ------------------------------------------------------------------------------- */}
      <Box
        marginY="spacing3"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box as="h3" fontStyle="h4">
          All feedback
        </Box>
      </Box>

      {paginationState.documents && (
        <CommentsList
          documents={paginationState.documents}
          error={paginationState.error}
          loading={paginationState.loading}
        />
      )}
    </Box>
  );
}
