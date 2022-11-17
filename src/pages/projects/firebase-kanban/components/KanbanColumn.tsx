import React, { useCallback, useRef } from "react";
import { updateDoc } from "firebase/firestore";
import { graphql } from "gatsby";
import { useDrop } from "react-dnd";
import { BoxNew } from "../../../../components/atoms/box_new/box_new";
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
    return <BoxNew>Is loading</BoxNew>;
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
    <BoxNew key={statusKey} ref={ref}>
      <BoxNew
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
      </BoxNew>

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
    </BoxNew>
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
