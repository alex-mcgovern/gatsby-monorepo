import React, { useMemo, useState } from "react";
import type {
  DropdownItem,
  GetSprinklesArgs,
} from "@alexmcgovern/boondoggle.design";
import { Box, Button, Collapsible } from "@alexmcgovern/boondoggle.design";
import { checkArrayHasLength } from "@alexmcgovern/utils";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { KanbanColumn } from "./KanbanColumn";

interface KanbanCollapsibleEpicProps {
  tasksInEpicGroupedByStatus: {
    [key: string]: Array<Record<string, unknown>>;
  };
  epicKey: string;
  // handleDelete?(...args: unknown[]): unknown;
  uniqueStatuses?: Array<string>;
  isLoading?: boolean;
  isOpenByDefault: boolean;
  statusesDropdownItems: DropdownItem[];
  epicsDropdownItems: DropdownItem[];
}

const GRID_LAYOUT: GetSprinklesArgs["gridTemplateColumns"] = {
  mobile: "1x",
  tablet: "2x",
  desktop: "4x",
};

export function KanbanCollapsibleEpic({
  epicKey,
  // handleDelete,
  epicsDropdownItems,
  statusesDropdownItems,
  uniqueStatuses,
  tasksInEpicGroupedByStatus,
  isLoading,
  isOpenByDefault = false,
}: KanbanCollapsibleEpicProps) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  /**
   * Memoised trigger for collapsible
   */
  const collapsibleTriggerNode = useMemo(() => {
    return (
      <Button
        size="lg"
        width="100%"
        appearance="tertiary"
        justifyContent="space-between"
        iconTrailing={faAngleDown}
        // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
        iconTrailingProps={{
          rotation: isOpen ? 180 : undefined,
        }}
      >
        {epicKey || "Unnamed epic"}
      </Button>
    );
  }, [epicKey, isOpen]);

  return (
    <>
      <hr />
      <Collapsible
        isOpen={isOpenByDefault}
        onOpenChange={setIsOpen}
        triggerNode={collapsibleTriggerNode}
      >
        {/** -----------------------------------------------------------------------------
         * COLUMNS FOR STATUSES
         * ------------------------------------------------------------------------------- */}
        <DndProvider backend={HTML5Backend}>
          <Box display="grid" gridTemplateColumns={GRID_LAYOUT} gap="spacing2">
            {uniqueStatuses &&
              checkArrayHasLength(uniqueStatuses) &&
              uniqueStatuses.map((statusKey) => {
                return (
                  <KanbanColumn
                    key={`${statusKey}-${isOpen}`}
                    statusKey={statusKey}
                    epicsDropdownItems={epicsDropdownItems}
                    statusesDropdownItems={statusesDropdownItems}
                    uniqueStatuses={uniqueStatuses}
                    tasksInColumn={tasksInEpicGroupedByStatus[statusKey]}
                    isLoading={isLoading}
                  />
                );
              })}
          </Box>
        </DndProvider>
      </Collapsible>
    </>
  );
}
