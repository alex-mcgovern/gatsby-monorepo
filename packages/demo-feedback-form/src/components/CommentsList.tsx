import React from "react";
import { Box, Loader } from "@alexmcgovern/boondoggle.design";
import type { FirestoreError } from "firebase/firestore";
import type { CommentShape } from "../types";
import { Comment } from "./Comment";

interface CommentsListProps {
  documents: Array<CommentShape>;
  loading: boolean;
  error?: FirestoreError;
}

export function CommentsList({ documents, loading, error }: CommentsListProps) {
  if (loading) {
    return <Loader size="3x" width="100%" minHeight="75vh" />;
  }

  if (error) {
    return (
      <Box>
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
      <Box display="grid" gap="spacing2" gridTemplateColumns="1x">
        {documents.map((comment) => {
          return <Comment {...comment} key={comment.documentRef.id} />;
        })}
      </Box>
    );
  }

  return <Box>No documents. Probably something is broken. 🤔</Box>;
}
