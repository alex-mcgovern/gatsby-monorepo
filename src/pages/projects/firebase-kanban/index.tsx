import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { graphql } from "gatsby";
import groupBy from "lodash.groupby";
import { Box } from "../../../components/atoms/box/box";
import { Button } from "../../../components/atoms/button/button";
import { Typography } from "../../../components/atoms/typography/typography";
import Page from "../../../components/organisms/page/page";
import {
  IFirestoreDocument,
  useFirestoreCollection,
} from "../../../hooks/use_firestore_collection/use_firestore_collection";
import firebase from "../../../utils/firebase/firebase_old";
import sortAlphabeticallyByKey from "../../../utils/helper_functions/sort_alphabetically_by_key/sort_alphabetically_by_key";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../../utils/shared_props/box_props";
import CreateNewTaskDialog from "./components/create_new_task_dialog/create_new_task_dialog";
import KanbanListItem from "./components/kanban_list_item/kanban_list_item";
import { IFirebaseKanbanPageProps } from "./firebase_kanban";

const FirebaseKanbanPage = ({ data }: IFirebaseKanbanPageProps) => {
  const { site } = data;
  const siteTitle = site.siteMetadata.title || "Title";

  const items: IFirestoreDocument[] = useFirestoreCollection({
    collection: "tasks",
  });
  const itemsGroupedByEpic = groupBy(items, "epic");

  const statuses: IFirestoreDocument[] = useFirestoreCollection({
    collection: "statuses",
  });
  const statusesSortedBySortIndex = sortAlphabeticallyByKey({
    objects: statuses,
    key: "sortIndex",
  });
  const statusesDropdownItems = statusesSortedBySortIndex.map((status) => {
    return {
      value: status.title,
      label: status.title,
    };
  });

  const epics: IFirestoreDocument[] = useFirestoreCollection({
    collection: "epics",
  });
  const epicsDropdownItems = epics.map((epic) => {
    return {
      value: epic.title,
      label: epic.title,
    };
  });

  return (
    <Page title={siteTitle} maxWidth="gridSpan16">
      <Box
        as="section"
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        {/** —————————————————————————————————————————————————————————————————————————————
         *      PAGE HEADER
         * ——————————————————————————————————————————————————————————————————————————————— */}
        <Box
          as="header"
          customisation={{
            maxWidth: "gridSpan8",
            marginX: "auto",
          }}
        >
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

        {/* ——————————————————————————————————————————————————————————————————————————————
        //      MAP OVER EPICS    
        //      Here we create a Kanban board for each epic that we find                                                      
        // ——————————————————————————————————————————————————————————————————————————————  */}
        {epics &&
          epics.length > 0 &&
          itemsGroupedByEpic &&
          Object.keys(itemsGroupedByEpic).length > 0 &&
          epics.map(({ title: epicKey, id: epicID }) => {
            // Get ref to epic and set up delete handler
            const epicDocRef = doc(firebase.firestore(), "epics", epicID);
            const handleDelete = async () => {
              try {
                await deleteDoc(epicDocRef);
              } catch (err) {
                alert(err);
              }
            };

            // Parse and sort tasks by status
            const itemsInEpic = itemsGroupedByEpic[epicKey];
            const itemsInEpicGroupedByStatus = groupBy(itemsInEpic, "status");

            return (
              <Box
                customisation={{
                  marginY: "spacing6",
                  backgroundColor: "neutral_bg_2",
                  borderColor: "neutral_ui_2",
                  border: "1px solid",
                  padding: "spacing3",
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
                  {/* ——————————————————————————————————————————————
                  //      EPIC BOARD TITLE & CONTROLS
                  //      Here we add the epic title, delete epic button, and create new task button
                  // —————————————————————————————————————————————— */}
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
                  <Box
                    customisation={{
                      display: "flex",
                      marginBottom: "spacing1",
                    }}
                  >
                    <CreateNewTaskDialog
                      statusesDropdownItems={statusesDropdownItems}
                      epicsDropdownItems={epicsDropdownItems}
                    />
                    <Button
                      iconTrailing="times"
                      variant={{ size: "xs", appearance: "tertiary" }}
                      title="Delete this epic"
                      // width="100%"
                      onClick={handleDelete}
                    />
                  </Box>
                </Box>

                {/* ——————————————————————————————————————————————————————————————————————————————
                  //      MAP OVER STATUSES
                  // ——————————————————————————————————————————————————————————————————————————————  */}
                {/* Status column layout */}
                <Box
                  customisation={{
                    display: "grid",
                    gridTemplateColumns: {
                      mobile: "1x",
                      tablet: "3x",
                      desktop: "3x",
                    },
                    gap: "spacing3",
                  }}
                >
                  {statusesSortedBySortIndex &&
                    statusesSortedBySortIndex.length > 0 &&
                    statusesSortedBySortIndex.map(({ title: statusKey }) => {
                      return (
                        <Box>
                          <Typography
                            customisation={{
                              fontSize: "body_lg",
                              textTransform: "uppercase",
                              fontWeight: "semibold",
                              color: "neutral_fg_1",
                              marginBottom: "spacing3",
                            }}
                          >
                            {statusKey}
                          </Typography>

                          {/* —————————————————————————————————————————————
                            //      MAP OVER ITEMS WITHIN STATUS            
                            // —————————————————————————————————————————————— */}
                          {itemsInEpicGroupedByStatus[statusKey] &&
                            itemsInEpicGroupedByStatus[statusKey].length > 0 &&
                            itemsInEpicGroupedByStatus[statusKey].map(
                              (item) => {
                                return (
                                  <KanbanListItem
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    status={item.status}
                                    epic={item.epic}
                                    statusesDropdownItems={
                                      statusesDropdownItems
                                    }
                                    epicsDropdownItems={epicsDropdownItems}
                                  />
                                );
                              }
                            )}
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            );
          })}
      </Box>
    </Page>
  );
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
