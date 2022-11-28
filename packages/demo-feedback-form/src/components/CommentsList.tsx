import React from "react";
import { Box, Loader } from "@alexmcgovern/boondoggle.design";
import type { FirestoreError } from "firebase/firestore";
import type { CommentShape } from "../types";
import { Comment } from "./Comment";

export interface CommentsListProps {
  documents: Array<CommentShape>;
  loading?: boolean;
  error?: FirestoreError;
}

export function CommentsList({
  documents,
  loading,
  error,
  ...rest
}: CommentsListProps) {
  if (loading) {
    return <Loader {...rest} size="3x" width="100%" minHeight="75vh" />;
  }

  if (error) {
    return (
      <Box {...rest}>
        <Box as="h1">Error</Box>
        <Box as="section">
          <Box as="h3" fontSize="body_lg" fontWeight="normal">
            {error.message}
          </Box>
        </Box>
      </Box>
    );
  }

  if (Array.isArray(documents) && documents.length > 0) {
    return (
      <Box {...rest} display="grid" gap="spacing2" gridTemplateColumns="1x">
        {documents.map((comment) => {
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

  return <Box {...rest}>No documents. Probably something is broken. 🤔</Box>;
}
