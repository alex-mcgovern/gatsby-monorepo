import React, { useContext, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { getFirestore } from "firebase/firestore";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { Box } from "../../../../../components/atoms/box/box";
import { Button } from "../../../../../components/atoms/button/button";
import { Input } from "../../../../../components/atoms/input/input";
import { Typography } from "../../../../../components/atoms/typography/typography";
import DropdownCombobox from "../../../../../components/molecules/dropdown_combobox/dropdown_combobox";
import { FirebaseAuthContext } from "../../../../../context/firebase_context";
import { dialogContent, dialogOverlay } from "./create_new_task_dialog.css";

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

export default function CreateNewTaskDialog({
  statusesDropdownItems,
  epicsDropdownItems,
}: CreateNewTaskDialogProps) {
  const [title, setTitle] = useState("");
  const [epic, setEpic] = useState("");
  const [status, setStatus] = useState("");

  const { firebaseApp } = useContext(FirebaseAuthContext);

  const handleSubmit = async () => {
    try {
      // allow creating new epics on the fly as you create tasks
      if (
        epic &&
        epic !== "" &&
        !epicsDropdownItems.find((item) => item.value === epic)
      ) {
        await addDoc(collection(getFirestore(firebaseApp), "epics"), {
          title: epic,
          created: Timestamp.now(),
        });
      }
      // allow creating new statuses on the fly as you create tasks
      if (
        status &&
        status !== "" &&
        !statusesDropdownItems.find((item) => item.value === status)
      ) {
        await addDoc(collection(getFirestore(firebaseApp), "statuses"), {
          title: status,
          created: Timestamp.now(),
        });
      }
      // create task
      await addDoc(collection(getFirestore(firebaseApp), "tasks"), {
        title,
        epic,
        status: "To-do",
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
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
                size="lg"
                label="Task"
                customisation={{
                  marginBottom: "spacing2",
                }}
                placeholder="Give this task a name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value as string)
                }
              />

              <DropdownCombobox
                id="epic"
                isLabelVisible
                isSearchable
                isCreatable
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

              <DropdownCombobox
                id="status"
                isLabelVisible
                isSearchable
                isCreatable
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
}
