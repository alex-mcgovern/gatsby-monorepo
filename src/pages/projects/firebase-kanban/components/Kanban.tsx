import React, { useContext } from "react";
import { collection, getFirestore } from "firebase/firestore";
import groupBy from "lodash.groupby";
import { useCollection } from "react-firebase-hooks/firestore";
import { Box } from "../../../../components/atoms/box/box";
import { Loader } from "../../../../components/atoms/loader/Loader";
import { Typography } from "../../../../components/atoms/typography/typography";
import { FirebaseAuthContext } from "../../../../context/firebase_context";
import checkHasLength from "../../../../utils/map_if_has_length/map_if_has_length";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../../../utils/shared_props/box_props";
import { KanbanCollapsibleEpic } from "./KanbanCollapsibleEpic";
import { KanbanCreateTaskDialog } from "./KanbanCreateTaskDialog";

export const Kanban = () => {
  const { firebaseApp, user } = useContext(FirebaseAuthContext);

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
    ...new Set(transformedTasks.map((item) => item.epic)),
  ];
  const uniqueStatuses = ["To-do", "In-progress", "Blocked", "Done"];

  console.log("debug transformed", transformedTasks);

  const isLoading = !!tasksLoading;
  const error = tasksError;

  const tasksGroupedByEpic = groupBy(transformedTasks, "epic");

  const statusesDropdownItems =
    uniqueStatuses &&
    checkHasLength(uniqueStatuses) &&
    uniqueStatuses.map((status) => {
      return {
        value: status,
        label: status,
      };
    });

  const epicsDropdownItems =
    uniqueEpics &&
    checkHasLength(uniqueEpics) &&
    uniqueEpics.map((epic) => {
      return {
        value: epic,
        label: epic,
      };
    });

  console.log("debug epicsDropdownItems", epicsDropdownItems);
  console.log("debug statusesDropdownItems", statusesDropdownItems);

  if (isLoading) {
    return (
      <Loader
        size="3x"
        customisation={{
          width: "100%",
          minHeight: "75vh",
        }}
      />
    );
  }
  if (error) {
    return (
      <Box>
        <Typography as="h1">Error</Typography>
        <Box as="section">
          <Typography
            as="h3"
            customisation={{
              fontSize: "body_lg",
              fontWeight: "normal",
            }}
          >
            {error.message}
          </Typography>
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
    <>
      <Box
        as="section"
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        {/** —————————————————————————————————————————————————————————————————————————————
         *      PAGE HEADER
         * ——————————————————————————————————————————————————————————————————————————————— */}
        <Box as="header" customisation={{}}>
          <Typography as="h1">Firebase kanban</Typography>

          <Typography
            as="h2"
            customisation={{
              fontSize: "body_lg",
              fontWeight: "normal",
            }}
          >
            Example full-stack app backed by Firestore.
          </Typography>
          <Typography as="p">
            This is your own kanban board, any tasks you create are visible only
            to you.
          </Typography>
        </Box>
        <hr />
        <KanbanCreateTaskDialog
          statusesDropdownItems={[]}
          epicsDropdownItems={[]}
        />

        {/** ————————————————————————————————————————————————————————————————————————————
         *      SECTIONS FOR INDIVIDUAL EPICS
         * ——————————————————————————————————————————————————————————————————————————————— */}
        {uniqueEpics &&
          checkHasLength(uniqueEpics) &&
          checkHasLength(Object.keys(tasksGroupedByEpic)) &&
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
    </>
  );
};
