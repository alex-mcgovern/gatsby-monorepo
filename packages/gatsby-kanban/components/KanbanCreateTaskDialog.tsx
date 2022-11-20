import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  DropdownSearchable,
  Input,
} from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
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

export function KanbanCreateTaskDialog({
  statusesDropdownItems,
  epicsDropdownItems,
}: CreateNewTaskDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [epic, setEpic] = useState("");
  const [status, setStatus] = useState("");

  const { firebaseApp, user } = useContext(FirebaseContext);

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
        <Button size="md">Add a task</Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={dialogOverlay} />
        <DialogPrimitive.Content className={dialogContent}>
          {/* ——————————————————————————————————————————————
            //      DIALOG HEADER                                  
            // —————————————————————————————————————————————— */}
          <DialogPrimitive.Title>
            <Box fontSize="h3" fontWeight="bold" as="h3">
              Create a new task
            </Box>
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
            <Box as="fieldset" marginY="spacing3">
              <Input
                id="title"
                name="title"
                type="text"
                isLabelVisible
                variant={{ size: "lg" }}
                label="Task title"
                marginBottom="spacing2"
                placeholder="Give this task a name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  return setTitle(e.target.value as string);
                }}
              />
              <Input
                id="description"
                name="description"
                type="text"
                isLabelVisible
                variant={{ size: "lg" }}
                label="Task description"
                marginBottom="spacing2"
                placeholder="Add some context on this task"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  return setDescription(e.target.value as string);
                }}
              />

              <DropdownSearchable
                id="epic"
                isLabelVisible
                isSearchable
                isCreatable
                initialInputValue=""
                items={epicsDropdownItems}
                label="Epic"
                marginBottom="spacing2"
                width="100%"
                variant={{ size: "lg" }}
                onSelect={({ value }) => {
                  setEpic(value);
                }}
                placeholder="Select an epic or create a new one"
              />

              <DropdownSearchable
                id="status"
                isLabelVisible
                isSearchable
                isCreatable
                initialInputValue=""
                items={statusesDropdownItems}
                label="Status"
                marginBottom="spacing2"
                width="100%"
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
                size="lg"
                type="submit"
                width="100%"
                onClick={handleSubmit}
              >
                Create task
              </Button>
            </DialogPrimitive.Close>
          </form>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
