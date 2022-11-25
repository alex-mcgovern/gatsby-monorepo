import React from "react";
import { Box, Loader } from "@alexmcgovern/boondoggle.design";
import type { FirestoreError } from "firebase/firestore";
import type { CommentShape } from "../types";
import { Comment } from "./Comment";

interface CommentsListProps {
  comments: Array<CommentShape>;
  commentsLoading: boolean;
  commentsError?: FirestoreError;
}

export function CommentsList({
  comments,
  commentsLoading,
  commentsError,
}: CommentsListProps) {
  if (commentsLoading) {
    return <Loader size="3x" width="100%" minHeight="75vh" />;
  }

  if (commentsError) {
    return (
      <Box>
        <Box as="h1">Error</Box>
        <Box as="section">
          <Box as="h3" fontSize="body_lg" fontWeight="normal">
            {commentsError.message}
          </Box>
        </Box>
      </Box>
    );
  }

  if (Array.isArray(comments) && comments.length > 0) {
    return (
      <Box display="grid" gap="spacing2">
        {comments.map((comment) => {
          return (
            <Comment
              {...comment}
              key={`${comment.author_uid}-${comment.created.seconds}`}
            />
          );
        })}
      </Box>
    );
  }

  return <Box>No comments. Probably something is broken. 🤔</Box>;
}
