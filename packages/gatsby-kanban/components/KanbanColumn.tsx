import React, { useCallback, useRef } from "react";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import { Box } from "@alexmcgovern/boondoggle.design";
import { checkArrayHasLength } from "@alexmcgovern/utils";
import { updateDoc } from "firebase/firestore";
import { useDrop } from "react-dnd";
import { KanbanListItem } from "./KanbanListItem";

interface KanbanStatusColumnProps {
  tasksInEpicGroupedByStatus: {
    [key: string]: {}[];
  };
  uniqueStatuses?: {}[];
  isLoading?: boolean;
  statusKey: string;

  statusesDropdownItems: DropdownItem[];
  epicsDropdownItems: DropdownItem[];
}

export function KanbanColumn({
  tasksInEpicGroupedByStatus,
  uniqueStatuses,
  isLoading,
  statusKey,

  statusesDropdownItems,
  epicsDropdownItems,
}: KanbanStatusColumnProps) {
  const changeTaskStatus = useCallback(async ({ docRef, newStatus }) => {
    try {
      await updateDoc(docRef, {
        status: newStatus,
      });
    } catch (err) {
      alert(err);
    }
  }, []);

  if (isLoading) {
    return <Box>Is loading</Box>;
  }

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
      <Box
        color="neutral_fg_1"
        fontSize="body_md"
        textTransform="uppercase"
        fontWeight="medium"
        marginBottom="spacing3"
      >
        {statusKey}
      </Box>

      {checkArrayHasLength(tasksInEpicGroupedByStatus[statusKey]) &&
        tasksInEpicGroupedByStatus[statusKey].map((item) => {
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
}
