import React, { useCallback, useContext } from "react";
import { Box, Button, Card } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { deleteDoc } from "firebase/firestore";
import type { CommentShape } from "../types";
import { StarsDisplay } from "./StarsDisplay";

export function Comment({
  email,
  created,
  description,
  rating,
  documentRef,
  author_uid,
  // intentionally destructured & unused until display name added to firebase auth
  // eslint-disable-next-line unused-imports/no-unused-vars
  displayName,
  ...rest
}: CommentShape) {
  const { user } = useContext(FirebaseContext) || {};

  const handleDelete = useCallback(async () => {
    if (!documentRef) return;

    deleteDoc(documentRef).catch((error) => {
      /** ToDo(feedback-form/Comment): Render potential errors nicely in frontend */
      console.error(error);
    });
  }, [documentRef]);

  return (
    <Card {...rest}>
      <Box as="header">
        <Box fontSize="body_lg" fontWeight="medium">
          {email}
        </Box>

        {created && (
          <Box
            color="neutral_text_lowContrast"
            fontSize="body_sm"
            fontWeight="medium"
          >
            {new Date(created.seconds * 1000).toLocaleString("en-GB")}
          </Box>
        )}
      </Box>

      <hr />

      {description && <Box as="p">{description}</Box>}

      <hr />

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <StarsDisplay rating={rating} />
        {user?.uid === author_uid && (
          <Button
            appearance="tertiary"
            color="neutral"
            onClick={handleDelete}
            iconTrailing={faTrashCan}
          >
            Delete
          </Button>
        )}
      </Box>
    </Card>
  );
}
