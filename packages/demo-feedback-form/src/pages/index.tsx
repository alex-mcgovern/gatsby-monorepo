import React, { useContext, useMemo } from "react";
import { Box, Button } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { Link } from "gatsby";
import { CommentsList } from "../components/CommentsList";
import { FeedbackFormDialog } from "../components/FeedbackFormDialog";
import { FeedbackGraph } from "../components/FeedbackGraph";
import { PaginationControls } from "../components/PaginationControls";
import { usePaginatedComments } from "../hooks/usePaginatedComments";

export default function FeedbackForm() {
  const { user } = useContext(FirebaseContext);

  /**
   * State passed to `Link` to login page, to return user here
   * after sign in.
   */
  const linkState = useMemo(() => {
    return { returnTo: "/" };
  }, []);

  /**
   * Get comments from firestore, with pagination controls
   */
  const {
    canLoadNewerComments,
    canLoadOlderComments,
    comments,
    commentsCount,
    commentsError,
    commentsLoading,
    loadNewerComments,
    loadOlderComments,
    paginationState,
    totalPages,
  } = usePaginatedComments({ commentsPerPage: 20 });

  return (
    <Box as="section" marginY="spacing5">
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

      {user ? (
        <FeedbackFormDialog />
      ) : (
        <Button width="max-content" as={Link} to="/login" state={linkState}>
          Log in to leave feedback
        </Button>
      )}

      <hr />

      <Box
        marginY="spacing3"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box as="h3" fontStyle="h4">
          Performance overview
        </Box>

        <PaginationControls
          totalPages={totalPages}
          paginationState={paginationState}
          comments={comments}
          commentsLoading={commentsLoading}
          canLoadOlderComments={canLoadOlderComments}
          canLoadNewerComments={canLoadNewerComments}
          loadOlderComments={loadOlderComments}
          loadNewerComments={loadNewerComments}
        />
      </Box>

      <FeedbackGraph comments={comments} paginationState={paginationState} />

      <hr />
      <Box
        marginY="spacing3"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box as="h3" fontStyle="h4">
          All comments ({commentsCount})
        </Box>

        <PaginationControls
          totalPages={totalPages}
          paginationState={paginationState}
          comments={comments}
          commentsLoading={commentsLoading}
          canLoadOlderComments={canLoadOlderComments}
          canLoadNewerComments={canLoadNewerComments}
          loadOlderComments={loadOlderComments}
          loadNewerComments={loadNewerComments}
        />
      </Box>

      <CommentsList
        comments={comments}
        commentsError={commentsError}
        commentsLoading={commentsLoading}
      />
    </Box>
  );
}
