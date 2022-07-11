import React, { useCallback, useRef, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Box } from "../../../../components/atoms/box/box";
import { Button } from "../../../../components/atoms/button/button";
import { Card } from "../../../../components/atoms/card/card";
import { Typography } from "../../../../components/atoms/typography/typography";
import checkHasLength from "../../../../utils/map_if_has_length/map_if_has_length";
import KanbanColumn from "./KanbanColumn";

interface KanbanCollapsibleEpicProps {
  tasksInEpicGroupedByStatus: {
    [key: string]: {}[];
  };
  epicKey: string;
  handleDelete?(...args: unknown[]): unknown;
  uniqueStatuses?: {}[];
  isLoading?: boolean;

  statusesDropdownItems: IDownshiftItem[];
  epicsDropdownItems: IDownshiftItem[];
}

export const KanbanCollapsibleEpic = ({
  epicKey,
  handleDelete,
  epicsDropdownItems,
  statusesDropdownItems,
  uniqueStatuses,
  tasksInEpicGroupedByStatus,
  isLoading,
}: KanbanCollapsibleEpicProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      {/* <Card
        customisation={{
          marginY: "spacing2",
          padding: "spacing2",
        }}
      > */}
      <Box
        as="header"
        customisation={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // marginY: "spacing3",
        }}
      >
        {/** ————————————————————————————————————————————————————————————————————————————
         *      EPIC BOARD TITLE & CONTROLS
         *      Here we add the epic title, delete epic button, and create new task button
         * ——————————————————————————————————————————————————————————————————————————————— */}
        <Typography
          as="h3"
          variant={{
            color: "accent_fg_2",
          }}
          customisation={{
            fontSize: "h6",
            fontWeight: "medium",
            marginY: "none",
          }}
        >
          {epicKey}
        </Typography>
        {/* Epic buttons wrapper */}

        <Box customisation={{ display: "flex", gap: "spacing1" }}>
          <Collapsible.Trigger>
            <Button
              iconTrailing={isOpen ? "eye-slash" : "eye"}
              variant={{ size: "sm", appearance: "secondary" }}
            />
          </Collapsible.Trigger>
        </Box>
      </Box>
      {/** ————————————————————————————————————————————————————————————————————————————
       *      COLUMNS FOR STATUSES
       * ——————————————————————————————————————————————————————————————————————————————— */}

      <Collapsible.Content>
        <DndProvider backend={HTML5Backend}>
          <Box
            customisation={{
              display: "grid",
              gridTemplateColumns: {
                mobile: "1x",
                tablet: "3x",
                desktop: "4x",
              },
              gap: "spacing2",
            }}
          >
            {uniqueStatuses &&
              checkHasLength(uniqueStatuses) &&
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
};
