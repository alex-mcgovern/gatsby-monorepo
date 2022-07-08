import React, { useContext } from "react";
import { collection, deleteDoc, getFirestore } from "firebase/firestore";
import { graphql } from "gatsby";
import groupBy from "lodash.groupby";
import { useCollection } from "react-firebase-hooks/firestore";
import { Box } from "../../../components/atoms/box/box";
import { Button } from "../../../components/atoms/button/button";
import { Typography } from "../../../components/atoms/typography/typography";
import { FirebaseAuthContext } from "../../../context/firebase_context";
import sortAlphabeticallyByKey from "../../../utils/helper_functions/sort_alphabetically_by_key/sort_alphabetically_by_key";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../../utils/shared_props/box_props";
import CreateNewTaskDialog from "./components/create_new_task_dialog/create_new_task_dialog";
import KanbanListItem from "./components/kanban_list_item/kanban_list_item";
import { FirebaseKanbanPageProps } from "./firebase_kanban";

const FirebaseKanbanPage = ({ data }: FirebaseKanbanPageProps) => {
  const { site } = data;
  const siteTitle = site.siteMetadata.title || "Title";

  const { firebaseApp, user } = useContext(FirebaseAuthContext);

  const isSignedIn = !!user;

  const [tasks, tasksLoading, tasksError] = useCollection(
    collection(getFirestore(firebaseApp), "tasks"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [statuses, statusesLoading, statusesError] = useCollection(
    collection(getFirestore(firebaseApp), "statuses"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [epics, epicsLoading, epicsError] = useCollection(
    collection(getFirestore(firebaseApp), "epics"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const isLoading = !!tasksLoading || !!statusesLoading || !!epicsLoading;

  const transformedTasks =
    tasks &&
    tasks.docs.map((doc) => {
      return { ...doc.data(), ref: doc.ref };
    });
  const transformedStatuses =
    statuses &&
    statuses.docs.map((doc) => {
      return { ...doc.data(), ref: doc.ref };
    });
  const transformedEpics =
    epics &&
    epics.docs.map((doc) => {
      return { ...doc.data(), ref: doc.ref };
    });

  if (transformedTasks && transformedStatuses && transformedEpics) {
    const tasksGroupedByEpic = groupBy(transformedTasks, "epic");

    const statusesSortedBySortIndex = sortAlphabeticallyByKey({
      objects: transformedStatuses,
      key: "sortIndex",
    });

    const statusesDropdownItems = statusesSortedBySortIndex.map((status) => {
      return {
        value: status.title,
        label: status.title,
      };
    });

    const epicsDropdownItems = transformedEpics.map((epic) => {
      return {
        value: epic.title,
        label: epic.title,
      };
    });

    if (isLoading) {
      return "Is loading";
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
          </Box>
          <hr />
          <CreateNewTaskDialog
            statusesDropdownItems={statusesDropdownItems}
            epicsDropdownItems={epicsDropdownItems}
          />

          {/** ————————————————————————————————————————————————————————————————————————————
           *      SECTIONS FOR INDIVIDUAL EPICS
           * ——————————————————————————————————————————————————————————————————————————————— */}
          {transformedEpics &&
            transformedEpics.length > 0 &&
            tasksGroupedByEpic &&
            Object.keys(tasksGroupedByEpic).length > 0 &&
            transformedEpics.map(
              ({ title: epicKey, id: epicID, ref: epicDocRef }) => {
                const handleDelete = async () => {
                  try {
                    await deleteDoc(epicDocRef);
                  } catch (err) {
                    alert(err);
                  }
                };
                // Parse and sort tasks by status
                const tasksInEpic = tasksGroupedByEpic[epicKey];
                const tasksInEpicGroupedByStatus = groupBy(
                  tasksInEpic,
                  "status"
                );

                return (
                  <Box
                    customisation={{
                      marginY: "spacing4",
                      backgroundColor: "neutral_bg_2",
                      borderColor: "neutral_ui_2",
                      border: "1px solid",
                      padding: "spacing2",
                      borderRadius: "sm",
                    }}
                  >
                    <Box
                      customisation={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "spacing3",
                      }}
                    >
                      {/** ————————————————————————————————————————————————————————————————————————————
                       *      EPIC BOARD TITLE & CONTROLS
                       *      Here we add the epic title, delete epic button, and create new task button
                       * ——————————————————————————————————————————————————————————————————————————————— */}
                      <Typography
                        customisation={{
                          fontWeight: "semibold",
                          color: "accent_fg_2",
                          marginBottom: "spacing1",
                        }}
                      >
                        {epicKey}
                      </Typography>
                      {/* Epic buttons wrapper */}

                      <Button
                        iconTrailing="times"
                        variant={{ size: "md", appearance: "tertiary" }}
                        title="Delete this epic"
                        // width="100%"
                        onClick={handleDelete}
                      />
                    </Box>
                    {/** ————————————————————————————————————————————————————————————————————————————
                     *      COLUMNS FOR STATUSES
                     * ——————————————————————————————————————————————————————————————————————————————— */}
                    <Box
                      customisation={{
                        display: "grid",
                        gridTemplateColumns: {
                          mobile: "1x",
                          tablet: "3x",
                          desktop: "3x",
                        },
                        gap: "spacing2",
                      }}
                    >
                      {statusesSortedBySortIndex &&
                        statusesSortedBySortIndex.length > 0 &&
                        statusesSortedBySortIndex.map(
                          ({ title: statusKey }) => {
                            return (
                              <Box>
                                <Typography
                                  customisation={{
                                    fontSize: "body_md",
                                    textTransform: "uppercase",
                                    fontWeight: "semibold",
                                    color: "neutral_fg_1",
                                    marginBottom: "spacing3",
                                  }}
                                >
                                  {statusKey}
                                </Typography>
                                {/** ————————————————————————————————————————————————————————————————————————————
                                 *      INDIVIDUAL KANBAN ITEMS
                                 * ——————————————————————————————————————————————————————————————————————————————— */}
                                {tasksInEpicGroupedByStatus[statusKey] &&
                                  tasksInEpicGroupedByStatus[statusKey].length >
                                    0 &&
                                  tasksInEpicGroupedByStatus[statusKey].map(
                                    (item) => {
                                      return (
                                        <KanbanListItem
                                          id={item.id}
                                          docRef={item.ref}
                                          key={item.id}
                                          title={item.title}
                                          status={item.status}
                                          epic={item.epic}
                                          isSignedIn={isSignedIn}
                                          statusesDropdownItems={
                                            statusesDropdownItems
                                          }
                                          epicsDropdownItems={
                                            epicsDropdownItems
                                          }
                                        />
                                      );
                                    }
                                  )}
                              </Box>
                            );
                          }
                        )}
                    </Box>
                  </Box>
                );
              }
            )}
        </Box>
      </>
    );
  }
  return null;
};

export default FirebaseKanbanPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
