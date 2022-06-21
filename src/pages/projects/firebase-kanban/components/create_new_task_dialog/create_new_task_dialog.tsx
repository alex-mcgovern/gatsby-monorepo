import React, { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Box from "../../../../../components/atoms/box/box";
import Button from "../../../../../components/atoms/button/button";
import Input from "../../../../../components/atoms/input/input";
import Typography from "../../../../../components/atoms/typography/typography";
import SearchCreatable from "../../../../../components/molecules/search/search_creatable/search_creatable";
import firebase from "../../../../../utils/firebase/firebase";
import { dialogContent, dialogOverlay } from "./create_new_task_dialog.css";

interface ICreateNewTaskDialog {
  statusesSearchIndex: {
    value: string;
  }[];
  epicsSearchIndex: {
    value: string;
  }[];
}

export default function CreateNewTaskDialog({
  statusesSearchIndex,
  epicsSearchIndex,
}: ICreateNewTaskDialog) {
  const [title, setTitle] = useState("");
  const [epic, setEpic] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // allow creating new epics on the fly as you create tasks
      if (
        epic &&
        epic !== "" &&
        !epicsSearchIndex.find((item) => item.value === epic)
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
        !statusesSearchIndex.find((item) => item.value === status)
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
        <Button size="sm" title="Add a task" />
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
            <Box
              as="fieldset"
              display="grid"
              gridTemplateColumns="1_3"
              gap="spacing1"
              marginBottom="spacing2"
              alignItems="center"
            >
              <Typography as="label" htmlFor="title">
                Title
              </Typography>
              <Input
                id="title"
                placeholder="Give this task a name"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
            {/* Task epic creatable search combobox  */}
            <Box
              as="fieldset"
              display="grid"
              gridTemplateColumns="1_3"
              gap="spacing1"
              marginBottom="spacing2"
              alignItems="center"
            >
              <Typography as="label" htmlFor="epic">
                Epic
              </Typography>

              <SearchCreatable
                id="epic"
                size="md"
                placeholder="Select an epic or create a new one"
                width="100%"
                items={epicsSearchIndex}
                onSelect={({ value }) => {
                  setEpic(value);
                }}
              />
            </Box>

            {/* Task status creatable search combobox  */}

            <Box
              as="fieldset"
              display="grid"
              gridTemplateColumns="1_3"
              gap="spacing1"
              marginBottom="spacing2"
              alignItems="center"
            >
              <Typography as="label" htmlFor="status">
                Status
              </Typography>
              <SearchCreatable
                id="status"
                size="md"
                placeholder="Select a status or create a new one"
                width="100%"
                items={statusesSearchIndex}
                onSelect={({ value }) => {
                  setStatus(value);
                }}
              />
            </Box>
            {/* ——————————————————————————————————————————————
                //      DIALOG SUBMIT
                // —————————————————————————————————————————————— */}
            <Box display="flex" justifyContent="flex-start">
              <DialogPrimitive.Close asChild>
                <Button
                  title="Save changes"
                  aria-label="Close"
                  type="submit"
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
