import React, { useCallback, useContext, useMemo, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  Form,
  FormSlider,
  FormTextArea,
} from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import {
  faFaceMeh,
  faFaceSmile,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

interface FormDataShape {
  rating: string;
  description: string;
}

export function FeedbackFormDialog({ ...rest }) {
  /** ---------------------------------------------
   * Setup dialog state & handlers
   * ----------------------------------------------- */

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  /** ---------------------------------------------
   * Get firebase app & initialise collection
   * ----------------------------------------------- */

  const { firebaseApp, user } = useContext(FirebaseContext) || {};
  const collectionRef = useMemo(() => {
    if (firebaseApp && user) {
      return collection(
        getFirestore(firebaseApp),
        "feedback",
        "data",
        "comments"
      );
    }
    return null;
  }, [firebaseApp, user]);

  /** ---------------------------------------------
   * Handle form submission
   * ----------------------------------------------- */

  const createCommentOnFormSubmission = useCallback(
    async ({ rating, description }: FormDataShape) => {
      if (!collectionRef || !user) return null;

      return addDoc(collectionRef, {
        rating: Number.parseInt(rating, 10),
        description,
        displayName: user.displayName,
        email: user.email,
        author_uid: user.uid,
        created: Timestamp.now(),
      }).catch((error) => {
        console.error(error);
      });
    },
    [collectionRef, user]
  );

  /** ---------------------------------------------
   * Trigger for dialog
   * ----------------------------------------------- */

  const dialogTriggerNode = useMemo(() => {
    return (
      <Button size="lg" name="leave-feedback" iconLeading={faMessage}>
        Leave feedback
      </Button>
    );
  }, []);

  /** -----------------------------------------------------------------------------
   * Markup
   * ------------------------------------------------------------------------------- */

  return (
    <Box {...rest}>
      <Dialog
        callbackOnOpenChange={setIsDialogOpen}
        isOpen={isDialogOpen}
        triggerNode={dialogTriggerNode}
        title="Leave feedback"
        description="Please leave a few details on how we are doing so that we can continue to improve our service. Thanks, you rock. 🤘"
      >
        <Form
          callbackOnSuccessfulFormSubmission={closeDialog}
          handleFormSubmission={createCommentOnFormSubmission}
          submitButtonText="Submit feedback"
        >
          <FormSlider
            errorMessage="Please ensure you have made a selection."
            id="rating"
            label="Rating"
            name="rating"
            placeholder="Select a rating"
            defaultValue={[2]}
            max={5}
            iconLeading={faFaceMeh}
            iconTrailing={faFaceSmile}
            step={1}
          />
          <FormTextArea
            errorMessage="Please ensure you have entered a message."
            id="description"
            label="Leave us a message"
            name="description"
            placeholder="Add a bit of additional context about your feedback."
            required
            rows={5}
          />
        </Form>
      </Dialog>
    </Box>
  );
}
