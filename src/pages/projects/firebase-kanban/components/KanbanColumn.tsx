import React, { useCallback, useRef } from "react";
import { updateDoc } from "firebase/firestore";
import { graphql } from "gatsby";
import { useDrop } from "react-dnd";
import { Box } from "../../../../components/atoms/box/box";
import { Typography } from "../../../../components/atoms/typography/typography";
import checkHasLength from "../../../../utils/map_if_has_length/map_if_has_length";
import KanbanListItem from "./KanbanListItem";

interface KanbanStatusColumnProps {
  tasksInEpicGroupedByStatus: {
    [key: string]: {}[];
  };
  uniqueStatuses?: {}[];
  isLoading?: boolean;
  statusKey: string;

  statusesDropdownItems: IDownshiftItem[];
  epicsDropdownItems: IDownshiftItem[];
}

const KanbanColumn = ({
  tasksInEpicGroupedByStatus,
  uniqueStatuses,
  isLoading,
  statusKey,

  statusesDropdownItems,
  epicsDropdownItems,
}: KanbanStatusColumnProps) => {
  if (isLoading) {
    return <Box>Is loading</Box>;
  }

  const changeTaskStatus = useCallback(async ({ docRef, newStatus }) => {
    try {
      await updateDoc(docRef, {
        status: newStatus,
      });
    } catch (err) {
      alert(err);
    }
  }, []);

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "kanbanCard",
    drop({ docRef }) {
      changeTaskStatus({ docRef, newStatus: statusKey });
      // alert("new status");
    },
  });
  drop(ref);

  return (
    <Box key={statusKey} ref={ref}>
      <Typography
        variant={{
          color: "neutral_fg_1",
        }}
        customisation={{
          fontSize: "body_md",
          textTransform: "uppercase",
          fontWeight: "medium",
          marginBottom: "spacing3",
        }}
      >
        {statusKey}
      </Typography>

      {checkHasLength(tasksInEpicGroupedByStatus[statusKey]) &&
        tasksInEpicGroupedByStatus[statusKey].map((item) => {
          console.log("debug item", uniqueStatuses);
          return (
            <KanbanListItem
              id={item.id}
              docRef={item.ref}
              key={item.id}
              description={item.description}
              title={item.title}
              status={item.status}
              epic={item.epic}
              statusesDropdownItems={statusesDropdownItems}
              epicsDropdownItems={epicsDropdownItems}
            />
          );
        })}
    </Box>
  );
};

export default KanbanColumn;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
