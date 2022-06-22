import React, { useCallback } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { graphql } from "gatsby";
import groupBy from "lodash.groupby";
import Box from "../../../components/atoms/box/box";
import Button from "../../../components/atoms/button/button";
import Typography from "../../../components/atoms/typography/typography";
import Layout from "../../../components/organisms/global_layout/global_layout";
import Seo from "../../../components/seo";
import { useFirestoreCollection } from "../../../hooks/use_firestore_collection/use_firestore_collection";
import firebase from "../../../utils/firebase/firebase";
import sortAlphabeticallyByKey from "../../../utils/helper_functions/sort_alphabetically_by_key/sort_alphabetically_by_key";
import { RESPONSIVE_MAX_WIDTH_PROPS } from "../../../utils/shared_props/box_props";
import CreateNewTaskDialog from "./components/create_new_task_dialog/create_new_task_dialog";
import KanbanListItem from "./components/kanban_list_item/kanban_list_item";

interface BlogIndexProps {
  data: {
    site?: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
}

const BlogIndex = ({ data }: BlogIndexProps) => {
  const { site } = data;
  const siteTitle = site?.siteMetadata?.title || "Title";

  const items = useFirestoreCollection({ collection: "tasks" });
  const itemsGroupedByEpic = groupBy(items, "epic");

  const statuses = useFirestoreCollection({ collection: "statuses" });
  const statusesSortedBySortIndex = sortAlphabeticallyByKey({
    objects: statuses,
    key: "sortIndex",
  });
  const statusesSearchIndex = statusesSortedBySortIndex.map((status) => {
    return {
      value: status.title,
      label: status.title,
    };
  });

  const epics = useFirestoreCollection({ collection: "epics" });
  const epicsSearchIndex = epics.map((epic) => {
    return {
      value: epic.title,
      label: epic.title,
    };
  });

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />

      <Box as="section" marginY="spacing6">
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
                marginY="spacing10"
                {...RESPONSIVE_MAX_WIDTH_PROPS}
                backgroundColor="neutral_background_dark"
                borderColor="neutral_ui_selected"
                border="1px solid"
                padding="spacing3"
                borderRadius="md"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginBottom="spacing3"
                >
                  {/* ——————————————————————————————————————————————
                  //      EPIC BOARD TITLE & CONTROLS
                  //      Here we add the epic title, delete epic button, and create new task button
                  // —————————————————————————————————————————————— */}
                  <Typography
                    fontSize="body_lg"
                    fontWeight="semibold"
                    display="block"
                  >
                    {epicKey}
                  </Typography>

                  {/* Epic buttons wrapper */}
                  <Box display="flex" gap="spacing1">
                    <CreateNewTaskDialog
                      statusesSearchIndex={statusesSearchIndex}
                      epicsSearchIndex={epicsSearchIndex}
                    />
                    <Button
                      trailingIcon="times"
                      size="sm"
                      appearance="primary"
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
                  display="grid"
                  gap="spacing3"
                  gridTemplateColumns={{
                    mobile: "1x",
                    tablet: "3x",
                    desktop: "3x",
                  }}
                >
                  {statusesSortedBySortIndex &&
                    statusesSortedBySortIndex.length > 0 &&
                    statusesSortedBySortIndex.map(({ title: statusKey }) => {
                      return (
                        <Box>
                          <Typography
                            fontSize="body_md"
                            textTransform="uppercase"
                            fontWeight="semibold"
                            color="neutral_text_lowContrast"
                            display="block"
                            marginBottom="spacing3"
                          >
                            {statusKey}
                          </Typography>

                          {/* ——————————————————————————————————————————————————————————————————————————————
                          //      MAP OVER ITEMS
                          // ——————————————————————————————————————————————————————————————————————————————  */}
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
                                    statusesSearchIndex={statusesSearchIndex}
                                    epicsSearchIndex={epicsSearchIndex}
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
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
