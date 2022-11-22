import type { FormEvent } from "react";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Box, Button, Dialog } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import {
  ReactHookFormControlledInput,
  ReactHookFormControlledSingleSelect,
  ReactHookFormControlledSingleSelectCreatable,
  getHookFormButtonIconProps,
} from "@alexmcgovern/gatsby-shared";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { FormProvider, useForm } from "react-hook-form";

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

export function KanbanCreateTaskDialog({
  statusesDropdownItems,
  epicsDropdownItems,
}: CreateNewTaskDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const reactHookFormMethods = useForm();
  const { formState, handleSubmit, reset } = reactHookFormMethods;
  const {
    isDirty,
    isSubmitSuccessful,
    isSubmitted,
    isSubmitting,
    isValid,
    isValidating,
    errors,
  } = formState;

  const { buttonIcon, buttonIconProps } = useMemo(() => {
    return getHookFormButtonIconProps({
      isValid,
      isValidating,
      isSubmitting,
      isSubmitSuccessful,
      isSubmitted,
      isDirty,
      errors,
    });
  }, [
    isDirty,
    isSubmitSuccessful,
    isSubmitted,
    isSubmitting,
    isValid,
    isValidating,
    errors,
  ]);

  const { firebaseApp, user } = useContext(FirebaseContext);

  /**
   * Reset hook form state & close dialog on submit
   */
  useEffect(() => {
    reset();
    setIsDialogOpen(false);
  }, [reset, isSubmitSuccessful]);

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      return handleSubmit(async ({ title, epic, description, status }) => {
        if (!firebaseApp || !user) return null;

        return addDoc(
          collection(getFirestore(firebaseApp), user.uid, "data", "tasks"),
          {
            title,
            epic,
            description,
            author_uid: user.uid,
            status,
            created: Timestamp.now(),
          }
        ).catch((error) => {
          console.error(error);
        });
      })(event);
    },
    [firebaseApp, handleSubmit, user]
  );

  const dialogTriggerNode = useMemo(() => {
    return <Button size="md">Add a task</Button>;
  }, []);

  return (
    <Dialog
      callbackOnOpenChange={setIsDialogOpen}
      isOpen={isDialogOpen}
      triggerNode={dialogTriggerNode}
      title="Create a new task"
      description="Add details for your Kanban task. Maybe a description for this dialog shouldn't be required."
    >
      <FormProvider {...reactHookFormMethods}>
        <Box as="form" onSubmit={onSubmit} display="grid" gap="spacing2">
          <ReactHookFormControlledInput
            errorMessage="Please ensure you have entered a valid title."
            id="title"
            label="Task title"
            name="title"
            placeholder="Give this task a name"
            required
          />

          <ReactHookFormControlledInput
            errorMessage="Please ensure you have entered a valid description."
            id="description"
            label="Task description"
            name="description"
            placeholder="Add a bit of additional context about this task"
          />

          <ReactHookFormControlledSingleSelectCreatable
            errorMessage="Please ensure you have made a selection."
            id="epic"
            items={epicsDropdownItems}
            label="Epic"
            name="epic"
            placeholder="Select an epic or create a new one"
          />

          <ReactHookFormControlledSingleSelect
            defaultValue="—"
            errorMessage="Please ensure you have made a selection."
            id="status"
            items={statusesDropdownItems}
            label="Status"
            name="status"
            placeholder="Select a status"
          />

          <Button
            aria-label="Close"
            width="100%"
            type="submit"
            // disabled={isSubmitting || isSubmitted}
            iconTrailing={buttonIcon}
            iconTrailingProps={buttonIconProps}
          >
            Create task
          </Button>
        </Box>
      </FormProvider>
    </Dialog>
  );
}
