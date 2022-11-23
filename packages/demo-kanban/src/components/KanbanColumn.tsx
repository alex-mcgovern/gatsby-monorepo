import React, { useCallback, useRef } from "react";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import { Box, Loader } from "@alexmcgovern/boondoggle.design";
import { checkArrayHasLength } from "@alexmcgovern/utils";
import { updateDoc } from "firebase/firestore";
import { useDrop } from "react-dnd";
import { KanbanListItem } from "./KanbanListItem";

interface KanbanStatusColumnProps {
  tasksInColumn: {
    [key: string]: Array<Record<string, unknown>>;
  };
  isLoading?: boolean;
  statusKey: string;

  statusesDropdownItems: DropdownItem[];
  epicsDropdownItems: DropdownItem[];
}

export function KanbanColumn({
  tasksInColumn,
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

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "kanbanCard",
    drop({ docRef }) {
      changeTaskStatus({ docRef, newStatus: statusKey });
      // alert("new status");
    },
  });

  drop(ref);

  if (isLoading) {
    return <Loader size="3x" width="100%" />;
  }

  return (
    <Box marginY="spacing1">
      <Box
        fontSize="body_md"
        marginBottom="spacing1"
        color="neutral_text_lowContrast"
        fontWeight="medium"
      >
        {statusKey} ({tasksInColumn?.length || 0})
      </Box>
      <Box
        key={statusKey}
        ref={ref}
        padding="spacing1"
        borderRadius="md"
        height="100%"
        minHeight="25vh"
        background="neutral_secondary_base"
      >
        {checkArrayHasLength(tasksInColumn) &&
          tasksInColumn.map((item) => {
            return (
              <KanbanListItem
                id={item.id}
                docRef={item.ref}
                key={item.ref}
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
    </Box>
  );
}
