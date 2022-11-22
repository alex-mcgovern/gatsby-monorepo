import type { FormEvent } from "react";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import { Box, Button, Dialog } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import {
  ReactHookFormControlledInput,
  ReactHookFormControlledSingleSelect,
  getHookFormButtonIconProps,
} from "@alexmcgovern/gatsby-shared";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { FormProvider, useForm } from "react-hook-form";

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
      return handleSubmit(async ({ description, rating }) => {
        if (!firebaseApp || !user) return null;

        return addDoc(
          collection(getFirestore(firebaseApp), "feedback", "data", "comments"),
          {
            displayName: user.displayName,
            email: user.email,
            rating,
            description,
            author_uid: user.uid,
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
    return <Button iconLeading={faMessage}>Leave feedback</Button>;
  }, []);

  return (
    <Dialog
      callbackOnOpenChange={setIsDialogOpen}
      isOpen={isDialogOpen}
      triggerNode={dialogTriggerNode}
      title="Leave feedback"
      description="Please leave a few details on how we are doing so that we can continue to improve our service. Thanks, you rock. 🤘"
    >
      <FormProvider {...reactHookFormMethods}>
        <Box as="form" onSubmit={onSubmit} display="grid" gap="spacing2">
          <ReactHookFormControlledSingleSelect
            errorMessage="Please ensure you have made a selection."
            id="rating"
            items={FEEDBACK_STAR_DROPDOWN_ITEMS}
            label="Rating"
            name="rating"
            placeholder="Select a status"
          />

          <ReactHookFormControlledInput
            errorMessage="Please ensure you have entered a valid email address."
            id="description"
            label="Task description"
            name="description"
            placeholder="Add a bit of additional context about this task"
          />

          <Button
            aria-label="Close"
            width="100%"
            type="submit"
            iconTrailing={buttonIcon}
            iconTrailingProps={buttonIconProps}
          >
            Leave feedback
          </Button>
        </Box>
      </FormProvider>
    </Dialog>
  );
}
