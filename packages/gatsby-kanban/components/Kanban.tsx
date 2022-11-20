import React, { useContext } from "react";
import { Box, Loader } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { checkArrayHasLength } from "@alexmcgovern/utils";
import { collection, getFirestore } from "firebase/firestore";
import groupBy from "lodash.groupby";
import { useCollection } from "react-firebase-hooks/firestore";
import { KanbanCollapsibleEpic } from "./KanbanCollapsibleEpic";
import { KanbanCreateTaskDialog } from "./KanbanCreateTaskDialog";

export function Kanban() {
  const { firebaseApp, user } = useContext(FirebaseContext);

  const userID = user?.uid || "";

  const [tasks, tasksLoading, tasksError] = useCollection(
    collection(getFirestore(firebaseApp), userID, "data", "tasks"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const transformedTasks =
    tasks &&
    tasks.docs.map((doc) => {
      return { ...doc.data(), ref: doc.ref };
    });

  const uniqueEpics = transformedTasks && [
    ...new Set(
      transformedTasks.map((item) => {
        return item.epic;
      })
    ),
  ];
  const uniqueStatuses = ["To-do", "In-progress", "Blocked", "Done"];

  console.log("debug transformed", transformedTasks);

  const isLoading = !!tasksLoading;
  const error = tasksError;

  const tasksGroupedByEpic = groupBy(transformedTasks, "epic");

  const statusesDropdownItems =
    uniqueStatuses &&
    checkArrayHasLength(uniqueStatuses) &&
    uniqueStatuses.map((status) => {
      return {
        value: status,
        label: status,
      };
    });

  const epicsDropdownItems =
    uniqueEpics &&
    checkArrayHasLength(uniqueEpics) &&
    uniqueEpics.map((epic) => {
      return {
        value: epic,
        label: epic,
      };
    });

  if (isLoading) {
    return <Loader size="3x" width="100%" minHeight="75vh" />;
  }
  if (error) {
    return (
      <Box>
        <Box as="h1">Error</Box>
        <Box as="section">
          <Box as="h3" fontSize="body_lg" fontWeight="normal">
            {error.message}
          </Box>
        </Box>
        <KanbanCreateTaskDialog
          epicsDropdownItems={epicsDropdownItems}
          statusesDropdownItems={statusesDropdownItems}
        />
      </Box>
    );
  }

  if (!transformedTasks) {
    return <Box>No tasks</Box>;
  }

  return (
    <Box as="section" marginY="spacing5">
      {/** —————————————————————————————————————————————————————————————————————————————
       * PAGE HEADER
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box as="header">
        <Box as="h1">Firebase kanban</Box>

        <Box as="h2" fontSize="body_lg" fontWeight="normal">
          Example full-stack app backed by Firestore.
        </Box>

        <Box as="p">
          This is your own kanban board, any tasks you create are visible only
          to you.
        </Box>
      </Box>

      <hr />

      <KanbanCreateTaskDialog
        statusesDropdownItems={[]}
        epicsDropdownItems={[]}
      />

      {/** ————————————————————————————————————————————————————————————————————————————
       * SECTIONS FOR INDIVIDUAL EPICS
       * ——————————————————————————————————————————————————————————————————————————————— */}
      {uniqueEpics &&
        checkArrayHasLength(uniqueEpics) &&
        checkArrayHasLength(Object.keys(tasksGroupedByEpic)) &&
        uniqueEpics.map((epicTitle) => {
          // Parse and sort tasks by status
          const tasksInEpic = tasksGroupedByEpic[epicTitle];
          const tasksInEpicGroupedByStatus = groupBy(tasksInEpic, "status");

          return (
            <KanbanCollapsibleEpic
              epicKey={epicTitle}
              epicsDropdownItems={epicsDropdownItems}
              statusesDropdownItems={statusesDropdownItems}
              uniqueStatuses={uniqueStatuses}
              tasksInEpicGroupedByStatus={tasksInEpicGroupedByStatus}
              isLoading={isLoading}
            />
          );
        })}
    </Box>
  );
}
