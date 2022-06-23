import React, { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Box from "../../../../../components/atoms/box/box";
import Button from "../../../../../components/atoms/button/button";
import Input from "../../../../../components/atoms/input/input";
import Typography from "../../../../../components/atoms/typography/typography";
import DropdownCombobox from "../../../../../components/molecules/dropdown_combobox/dropdown_combobox";
import firebase from "../../../../../utils/firebase/firebase";
import { dialogContent, dialogOverlay } from "./create_new_task_dialog.css";

interface ICreateNewTaskDialog {
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
}: ICreateNewTaskDialog) {
  const [title, setTitle] = useState("");
  const [epic, setEpic] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    try {
      // allow creating new epics on the fly as you create tasks
      if (
        epic &&
        epic !== "" &&
        !epicsDropdownItems.find((item) => item.value === epic)
      ) {
        await addDoc(collection(firebase.firestore(), "epics"), {
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
        await addDoc(collection(firebase.firestore(), "statuses"), {
          title: status,
          created: Timestamp.now(),
        });
      }
      // create task
      await addDoc(collection(firebase.firestore(), "tasks"), {
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
        <Button appearance="tertiary" size="sm" title="Add a task" />
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={dialogOverlay} />
        <DialogPrimitive.Content className={dialogContent}>
          {/* ——————————————————————————————————————————————
            //      DIALOG HEADER                                  
            // —————————————————————————————————————————————— */}
          <DialogPrimitive.Title>
            <Typography as="h3" fontSize="h3">
              Create a new task
            </Typography>
          </DialogPrimitive.Title>
          {/* <DialogPrimitive.Description>
            Make changes to your profile here. Click save when you're done.
          </DialogPrimitive.Description> */}
          {/* ——————————————————————————————————————————————
            //      DIALOG FIELDS                                  
            // —————————————————————————————————————————————— */}
          <form onSubmit={handleSubmit} name="addTask">
            {/* Task title input */}
            <Box as="fieldset" marginY="spacing3">
              <Input
                id="title"
                isLabelVisible
                size="lg"
                label="Task"
                marginBottom="spacing2"
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
                marginBottom="spacing2"
                onSelect={({ value }) => {
                  setEpic(value);
                }}
                placeholder="Select an epic or create a new one"
                size="lg"
                width="100%"
              />

              <DropdownCombobox
                id="status"
                isLabelVisible
                isSearchable
                isCreatable
                items={statusesDropdownItems}
                label="Status"
                marginBottom="spacing2"
                onSelect={({ value }) => {
                  setStatus(value);
                }}
                placeholder="Select a status or create a new one"
                size="lg"
                width="100%"
              />
            </Box>
            {/* ——————————————————————————————————————————————
                //      DIALOG SUBMIT
                // —————————————————————————————————————————————— */}
            <Box display="flex" justifyContent="flex-start">
              <DialogPrimitive.Close asChild>
                <Button
                  aria-label="Close"
                  size="lg"
                  title="Create task"
                  type="submit"
                  width="100%"
                  onClick={handleSubmit}
                />
              </DialogPrimitive.Close>
            </Box>
          </form>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
