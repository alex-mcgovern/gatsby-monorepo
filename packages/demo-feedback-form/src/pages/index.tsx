import React, { useContext } from "react";
import { Box, Button } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { CommentsList } from "../components/CommentsList";
import { FeedbackFormDialog } from "../components/FeedbackFormDialog";
import { FeedbackGraph } from "../components/FeedbackGraph";
import { PaginationControls } from "../components/PaginationControls";
import { usePaginatedComments } from "../utils/usePaginatedComments";
import { useScrollToTop } from "../utils/useScrollToTop";

const LINK_STATE = { returnTo: "/" };

export default function FeedbackForm() {
  const { firebaseApp, user } = useContext(FirebaseContext) || {};

  /**
   * Get comments from firestore, with pagination controls
   */
  const {
    canLoadPrevious,
    canLoadNext,
    documents,
    totalNbComments,
    setPerPage,
    error,
    loading,
    firstItemIndex,
    lastItemIndex,
    currentPage,
    loadNext,
    loadPrevious,
    totalNbPages,
  } = usePaginatedComments({
    commentsPerPage: 5,
    firebaseApp,
  });

  /**
   * Scroll to top on change of total comment count, or page count.
   */
  const scrollRef = useScrollToTop({
    currentPage,
    totalNbComments,
  });

  return (
    <Box as="section" marginY="spacing5" position="relative">
      <Box as="header">
        {/** --------------------------------------------
         * Page header
         * ----------------------------------------------- */}

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

        {/** --------------------------------------------
         * Login / leave feedback button
         * ----------------------------------------------- */}

        {user ? (
          <FeedbackFormDialog />
        ) : (
          <Button
            as={Link}
            iconLeading={faRightToBracket}
            state={LINK_STATE}
            to="/login"
            width="max-content"
          >
            Log in to leave feedback
          </Button>
        )}
      </Box>

      {/** -----------------------------------------------------------------------------
       * Controls
       * ------------------------------------------------------------------------------- */}
      <hr ref={scrollRef} />

      <PaginationControls
        canLoadNext={canLoadNext}
        canLoadPrevious={canLoadPrevious}
        currentPage={currentPage}
        firstItemIndex={firstItemIndex}
        lastItemIndex={lastItemIndex}
        loadNext={loadNext}
        loadPrevious={loadPrevious}
        totalNbComments={totalNbComments}
        totalNbPages={totalNbPages}
        setPerPage={setPerPage}
      />

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

      <FeedbackGraph documents={documents} />

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

      {documents && (
        <CommentsList documents={documents} error={error} loading={loading} />
      )}
    </Box>
  );
}
