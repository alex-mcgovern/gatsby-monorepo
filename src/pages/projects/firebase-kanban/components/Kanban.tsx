import React, { useContext } from "react";
import { collection, getFirestore } from "firebase/firestore";
import groupBy from "lodash.groupby";
import { useCollection } from "react-firebase-hooks/firestore";
import { BoxNew } from "../../../../components/atoms/box_new/box_new";
import { Loader } from "../../../../components/atoms/loader/Loader";
import { FirebaseAuthContext } from "../../../../context/firebase_context";
import checkHasLength from "../../../../utils/map_if_has_length/map_if_has_length";
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
      <BoxNew>
        <BoxNew as="h1">Error</BoxNew>
        <BoxNew as="section">
          <BoxNew
            as="h3"
            customisation={{
              fontSize: "body_lg",
              fontWeight: "normal",
            }}
          >
            {error.message}
          </BoxNew>
        </BoxNew>
        <KanbanCreateTaskDialog
          epicsDropdownItems={epicsDropdownItems}
          statusesDropdownItems={statusesDropdownItems}
        />
      </BoxNew>
    );
  }

  if (!transformedTasks) {
    return <BoxNew>No tasks</BoxNew>;
  }

  return (
    <>
      <BoxNew as="section" marginY="spacing5">
        {/** —————————————————————————————————————————————————————————————————————————————
         *      PAGE HEADER
         * ——————————————————————————————————————————————————————————————————————————————— */}
        <BoxNew as="header">
          <BoxNew as="h1">Firebase kanban</BoxNew>

          <BoxNew
            as="h2"
            customisation={{
              fontSize: "body_lg",
              fontWeight: "normal",
            }}
          >
            Example full-stack app backed by Firestore.
          </BoxNew>
          <BoxNew as="p">
            This is your own kanban board, any tasks you create are visible only
            to you.
          </BoxNew>
        </BoxNew>
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
      </BoxNew>
    </>
  );
};
