import React, { useCallback, useContext } from "react";
import { Box, Button, ListItem } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { deleteDoc } from "firebase/firestore";
import type { CommentShape } from "../types";
import { StarsDisplay } from "./StarsDisplay";

export function Comment({
  displayName,
  email,
  created,
  description,
  rating,
  documentRef,
  author_uid,
}: CommentShape) {
  const { user } = useContext(FirebaseContext) || {};

  const handleDelete = useCallback(async () => {
    return deleteDoc(documentRef).catch((error) => {
      /** ToDo(feedback-form/Comment): Render potential errors nicely in frontend */
      console.error(error);
    });
  }, [documentRef]);

  return (
    <ListItem
      title={`${displayName} (${email}) says...`}
      subtitle={new Date(created.seconds * 1000).toLocaleString()}
      description={description}
    >
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
    </ListItem>
  );
}
