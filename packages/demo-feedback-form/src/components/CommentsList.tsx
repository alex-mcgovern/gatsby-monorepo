import React from "react";
import { Box, Card, Loader } from "@alexmcgovern/boondoggle.design";
import type { FirestoreError } from "firebase/firestore";
import type { CommentShape } from "../types";
import { Comment } from "./Comment";

export interface CommentsListProps {
  comments?: Array<CommentShape>;
  isLoading?: boolean;
  error?: FirestoreError;
}

export function CommentsList({
  comments,
  isLoading,
  error,
  ...rest
}: CommentsListProps) {
  if (isLoading) {
    return <Loader {...rest} size="4x" width="100%" minHeight="25vh" />;
  }

  if (error) {
    return <Card textAlign="center">{error.message}</Card>;
  }

  if (Array.isArray(comments) && comments.length > 0) {
    return (
      <Box {...rest} display="grid" gap="spacing2" gridTemplateColumns="1x">
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

  return <Card textAlign="center">No feedback to display yet.</Card>;
}
