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
    canLoadNext,
    canLoadPrevious,
    comments,
    error,
    indexOfFirstInCursor,
    indexOfLastInCursor,
    initialize,
    isLoading,
    loadNext,
    loadPrevious,
    pageNbCurrent,
    setCommentsPerPage,
    totalNbComments,
    totalNbPages,
  } = usePaginatedComments({
    commentsPerPage: 5,
    firebaseApp,
  });

  /**
   * Scroll to top on change of total comment count, or page count.
   */
  const scrollRef = useScrollToTop({
    pageNbCurrent,
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
          <FeedbackFormDialog callbackOnFormSubmit={initialize} />
        ) : (
          <Button
            as={Link}
            name="log-in-to-leave-feedback"
            iconLeading={faRightToBracket}
            state={LINK_STATE}
            size="lg"
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
        pageNbCurrent={pageNbCurrent}
        indexOfFirstInCursor={indexOfFirstInCursor}
        indexOfLastInCursor={indexOfLastInCursor}
        loadNext={loadNext}
        loadPrevious={loadPrevious}
        totalNbComments={totalNbComments}
        totalNbPages={totalNbPages}
        setCommentsPerPage={setCommentsPerPage}
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

      <FeedbackGraph comments={comments} />

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

      {comments && (
        <CommentsList comments={comments} error={error} isLoading={isLoading} />
      )}
    </Box>
  );
}
