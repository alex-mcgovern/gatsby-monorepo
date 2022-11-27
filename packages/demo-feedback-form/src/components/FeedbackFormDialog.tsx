import React, { useCallback, useContext, useMemo, useState } from "react";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import { Button, Dialog } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import {
  Form,
  FormSingleSelect,
  FormTextArea,
} from "@alexmcgovern/gatsby-shared";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

interface FormDataShape {
  rating: number;
  description: string;
}

/**
 * ToDo: Nicer rating select experience
 */

const FEEDBACK_STAR_DROPDOWN_ITEMS: Array<DropdownItem> = [
  {
    value: "1",
    label: "⭐️",
  },
  {
    value: "2",
    label: "⭐️⭐️",
  },
  {
    value: "3",
    label: "⭐️⭐️⭐️",
  },
  {
    value: "4",
    label: "⭐️⭐️⭐️⭐️",
  },
  {
    value: "5",
    label: "⭐️⭐️⭐️⭐️⭐️",
  },
];

export function FeedbackFormDialog() {
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
        "documents"
      );
    }
    return null;
  }, [firebaseApp, user]);

  /** ---------------------------------------------
   * Handle form submission
   * ----------------------------------------------- */

  const createCommentOnFormSubmission = useCallback(
    async (formData: FormDataShape) => {
      if (!collectionRef || !user) return null;

      return addDoc(collectionRef, {
        ...formData,
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
      <Button size="lg" iconLeading={faMessage}>
        Leave feedback
      </Button>
    );
  }, []);

  /** -----------------------------------------------------------------------------
   * Markup
   * ------------------------------------------------------------------------------- */

  return (
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
        <FormSingleSelect
          errorMessage="Please ensure you have made a selection."
          id="rating"
          items={FEEDBACK_STAR_DROPDOWN_ITEMS}
          label="Rating"
          name="rating"
          placeholder="Select a rating"
        />

        <FormTextArea
          rows={5}
          required
          errorMessage="Please ensure you have entered a description."
          id="description"
          label="Task description"
          name="description"
          placeholder="Add a bit of additional context about"
        />
      </Form>
    </Dialog>
  );
}
