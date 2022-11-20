import React, { useState } from "react";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import { Box, Button } from "@alexmcgovern/boondoggle.design";
import { checkArrayHasLength } from "@alexmcgovern/utils";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as Collapsible from "@radix-ui/react-collapsible";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { KanbanColumn } from "./KanbanColumn";

interface KanbanCollapsibleEpicProps {
  tasksInEpicGroupedByStatus: {
    [key: string]: {}[];
  };
  epicKey: string;
  handleDelete?(...args: unknown[]): unknown;
  uniqueStatuses?: {}[];
  isLoading?: boolean;

  statusesDropdownItems: DropdownItem[];
  epicsDropdownItems: DropdownItem[];
}

export function KanbanCollapsibleEpic({
  epicKey,
  handleDelete,
  epicsDropdownItems,
  statusesDropdownItems,
  uniqueStatuses,
  tasksInEpicGroupedByStatus,
  isLoading,
}: KanbanCollapsibleEpicProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {/** ————————————————————————————————————————————————————————————————————————————
         * EPIC BOARD TITLE & CONTROLS
         * Here we add the epic title, delete epic button, and create new task button
         * ——————————————————————————————————————————————————————————————————————————————— */}
        <Box
          as="h3"
          color="accent_fg_2"
          fontSize="h6"
          fontWeight="medium"
          marginY="none"
        >
          {epicKey}
        </Box>
        {/* Epic buttons wrapper */}

        <Box display="flex" gap="spacing1">
          <Collapsible.Trigger>
            <Button
              iconTrailing={isOpen ? faEyeSlash : faEye}
              size="sm_square"
              appearance="secondary"
            />
          </Collapsible.Trigger>
        </Box>
      </Box>
      {/** ————————————————————————————————————————————————————————————————————————————
       * COLUMNS FOR STATUSES
       * ——————————————————————————————————————————————————————————————————————————————— */}

      <Collapsible.Content>
        <DndProvider backend={HTML5Backend}>
          <Box
            display="grid"
            gridTemplateColumns={{
              mobile: "1x",
              tablet: "3x",
              desktop: "4x",
            }}
            gap="spacing2"
          >
            {uniqueStatuses &&
              checkArrayHasLength(uniqueStatuses) &&
              uniqueStatuses.map((statusKey: string) => {
                return (
                  <KanbanColumn
                    key={statusKey}
                    statusKey={statusKey}
                    epicsDropdownItems={epicsDropdownItems}
                    statusesDropdownItems={statusesDropdownItems}
                    uniqueStatuses={uniqueStatuses}
                    tasksInEpicGroupedByStatus={tasksInEpicGroupedByStatus}
                    isLoading={isLoading}
                  />
                );
              })}
          </Box>
        </DndProvider>
      </Collapsible.Content>
      <hr />
      {/* </Card> */}
    </Collapsible.Root>
  );
}
