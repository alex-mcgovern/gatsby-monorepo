import React, { useCallback, useContext, useMemo, useState } from "react";
import {
  Button,
  Dialog,
  Form,
  FormInput,
  FormSingleSelect,
  FormSingleSelectCreatable,
} from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

interface CreateNewTaskDialogProps {
  statusesDropdownItems: {
    value: string;
    label: string;
  }[];
  epicsDropdownItems: {
    value: string;
    label: string;
  }[];
}

interface FormDataShape {
  title: string;
  epic: string;
  description: string;
  status: string;
}

export function KanbanCreateTaskDialog({
  statusesDropdownItems,
  epicsDropdownItems,
}: CreateNewTaskDialogProps) {
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
        "kanban",
        user.uid,
        "data",
        "tasks",
        "data"
      );
    }
    return null;
  }, [firebaseApp, user]);

  /** ---------------------------------------------
   * Handle form submission
   * ----------------------------------------------- */

  const createTaskOnFormSubmission = useCallback(
    async (formData: FormDataShape) => {
      if (!collectionRef || !user) return null;

      return addDoc(collectionRef, {
        ...formData,
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
    return <Button iconLeading={faPlusCircle}>Add a task</Button>;
  }, []);

  /** -----------------------------------------------------------------------------
   * Markup
   * ------------------------------------------------------------------------------- */

  return (
    <Dialog
      callbackOnOpenChange={setIsDialogOpen}
      isOpen={isDialogOpen}
      triggerNode={dialogTriggerNode}
      title="Create a new task"
      description="Add details for your Kanban task. Maybe a description for this dialog shouldn't be required."
    >
      <Form
        callbackOnSuccessfulFormSubmission={closeDialog}
        handleFormSubmission={createTaskOnFormSubmission}
        submitButtonText="Create task"
      >
        <FormInput
          errorMessage="Please ensure you have entered a valid title."
          id="title"
          label="Task title"
          name="title"
          placeholder="Give this task a name"
          required
        />

        <FormInput
          errorMessage="Please ensure you have entered a valid description."
          id="description"
          label="Task description"
          name="description"
          placeholder="Add a bit of additional context about this task"
        />

        <FormSingleSelectCreatable
          errorMessage="Please ensure you have made a selection."
          id="epic"
          items={epicsDropdownItems}
          label="Epic"
          name="epic"
          placeholder="Select an epic or create a new one"
        />

        <FormSingleSelect
          errorMessage="Please ensure you have made a selection."
          id="status"
          items={statusesDropdownItems}
          label="Status"
          name="status"
          placeholder="Select a status"
        />
      </Form>
    </Dialog>
  );
}
