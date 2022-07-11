import React, { useContext, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { getFirestore } from "firebase/firestore";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { Box } from "../../../../components/atoms/box/box";
import { Button } from "../../../../components/atoms/button/button";
import { Input } from "../../../../components/atoms/input/input";
import { Typography } from "../../../../components/atoms/typography/typography";
import ComboboxSearchable from "../../../../components/molecules/Dropdown/DropdownSearchable";
import { FirebaseAuthContext } from "../../../../context/firebase_context";
import { dialogContent, dialogOverlay } from "./KanbanCreateTaskDialog.css";

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

export const KanbanCreateTaskDialog = ({
  statusesDropdownItems,
  epicsDropdownItems,
}: CreateNewTaskDialogProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [epic, setEpic] = useState("");
  const [status, setStatus] = useState("");

  const { firebaseApp, user } = useContext(FirebaseAuthContext);

  const handleSubmit = async () => {
    if (user?.uid) {
      try {
        await addDoc(
          collection(getFirestore(firebaseApp), user.uid, "data", "tasks"),
          {
            title,
            epic,
            description,
            author_uid: user.uid,
            status,
            created: Timestamp.now(),
          }
        );
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button variant={{ size: "md" }} title="Add a task" />
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={dialogOverlay} />
        <DialogPrimitive.Content className={dialogContent}>
          {/* ——————————————————————————————————————————————
            //      DIALOG HEADER                                  
            // —————————————————————————————————————————————— */}
          <DialogPrimitive.Title>
            <Typography
              customisation={{
                fontSize: "h3",
                fontWeight: "bold",
              }}
              as="h3"
            >
              Create a new task
            </Typography>
          </DialogPrimitive.Title>
          {/* <DialogPrimitive.Description>
            Make changes to your profile here. Click save when you're done.
          </DialogPrimitive.Description> */}
          {/* ——————————————————————————————————————————————
            //      DIALOG FIELDS                                  
            // —————————————————————————————————————————————— */}
          <form
            // onSubmit={handleSubmit}
            name="addTask"
          >
            {/* Task title input */}
            <Box
              as="fieldset"
              customisation={{
                marginY: "spacing3",
              }}
            >
              <Input
                id="title"
                name="title"
                type="text"
                isLabelVisible
                variant={{ size: "lg" }}
                label="Task title"
                customisation={{
                  marginBottom: "spacing2",
                }}
                placeholder="Give this task a name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value as string)
                }
              />
              <Input
                id="description"
                name="description"
                type="text"
                isLabelVisible
                variant={{ size: "lg" }}
                label="Task description"
                customisation={{
                  marginBottom: "spacing2",
                }}
                placeholder="Add some context on this task"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.target.value as string)
                }
              />

              <ComboboxSearchable
                id="epic"
                isLabelVisible
                isSearchable
                isCreatable
                initialInputValue=""
                items={epicsDropdownItems}
                label="Epic"
                customisation={{
                  marginBottom: "spacing2",
                  width: "100%",
                }}
                variant={{ size: "lg" }}
                onSelect={({ value }) => {
                  setEpic(value);
                }}
                placeholder="Select an epic or create a new one"
              />

              <ComboboxSearchable
                id="status"
                isLabelVisible
                isSearchable
                isCreatable
                initialInputValue=""
                items={statusesDropdownItems}
                label="Status"
                customisation={{
                  marginBottom: "spacing2",
                  width: "100%",
                }}
                onSelect={({ value }) => {
                  setStatus(value);
                }}
                placeholder="Select a status or create a new one"
                variant={{ size: "lg" }}
              />
            </Box>
            {/* ——————————————————————————————————————————————
            //      DIALOG SUBMIT
            // —————————————————————————————————————————————— */}

            <DialogPrimitive.Close asChild>
              <Button
                aria-label="Close"
                variant={{ size: "lg" }}
                title="Create task"
                type="submit"
                customisation={{
                  width: "100%",
                }}
                onClick={handleSubmit}
              />
            </DialogPrimitive.Close>
          </form>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
