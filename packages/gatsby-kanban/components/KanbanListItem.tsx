import React, { useCallback, useRef, useState } from "react";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import {
  Box,
  Button,
  Card,
  DropdownSearchable,
} from "@alexmcgovern/boondoggle.design";
import type { DropdownSearchableProps } from "@alexmcgovern/boondoggle.design/src/Dropdown/DropdownSearchable";
import { faEllipsis, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import * as Collapsible from "@radix-ui/react-collapsible";
import type { DocumentData, DocumentReference } from "firebase/firestore";
import { deleteDoc, updateDoc } from "firebase/firestore";
import { useDrag } from "react-dnd";
import * as styles from "./KanbanListItem.css";

interface KanbanListItemProps {
  id: string;
  docRef: DocumentReference<DocumentData>;
  description: string;
  title: string;
  epic?: string;
  status?: string;
  isLoggedIn?: boolean;
  statusesDropdownItems: DropdownItem[];
  epicsDropdownItems: DropdownItem[];
}

interface OnSelectArgs {
  value: string;
  key: string;
}

const DROPDOWN_SHARED_STATIC_PROPS: Partial<DropdownSearchableProps> = {
  iconTrailing: "caret-down",
  id: "kanban-status-dropdown",
  isLabelVisible: true,
  isSearchable: true,
  variant: { size: "sm" },
  width: "100%",
};

export function KanbanListItem({
  id,
  title,
  description,
  status,
  epic,
  docRef,
  statusesDropdownItems,
  epicsDropdownItems,
}: KanbanListItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownSharedProps = {
    ...DROPDOWN_SHARED_STATIC_PROPS,
    onSelect: ({ value }) => {
      onSelect({ value, key: "status" });
    },
  };

  const onSelect = useCallback(
    async ({ value, key }: OnSelectArgs) => {
      try {
        await updateDoc(docRef, {
          [key]: value,
        });
      } catch (err) {
        console.error(err);
      }
    },
    [docRef]
  );

  const handleDelete = useCallback(async () => {
    try {
      await deleteDoc(docRef);
    } catch (err) {
      console.error(err);
    }
  }, [docRef]);

  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: "kanbanCard", docRef },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);

  return (
    <Card
      padding="spacing1"
      marginBottom="spacing1"
      className={styles.KanbanListItem}
      ref={ref}
    >
      <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
        <Box
          as="header"
          display="flex"
          alignItems="start"
          justifyContent="space-between"
          gap="spacing1"
        >
          <Box fontWeight="medium">{title}</Box>
          {description && <Box fontWeight="medium">{description}</Box>}

          <Collapsible.Trigger>
            <Button
              iconTrailing={faEllipsis}
              marginY="none"
              size="sm_square"
              appearance={isOpen ? "primary" : "secondary"}
            />
          </Collapsible.Trigger>
        </Box>

        <Collapsible.Content>
          {/** ————————————————————
           * STATUS DROPDOWN
           * ——————————————————————— */}
          <DropdownSearchable
            initialInputValue={status}
            id="kanban-status-dropdown"
            items={statusesDropdownItems}
            label="Status"
            name="Status"
            {...dropdownSharedProps}
          />

          {/** ————————————————————
           * EPIC DROPDOWN
           * ——————————————————————— */}
          <DropdownSearchable
            initialInputValue={epic}
            id="kanban-epic-dropdown"
            isCreatable
            items={epicsDropdownItems}
            name="Epic"
            label="Epic"
            {...dropdownSharedProps}
          />

          {/** ————————————————————
           * DELETE BUTTON
           * ——————————————————————— */}
          <Button
            title=""
            iconTrailing={faTrashCan}
            size="sm"
            appearance="secondary"
            marginTop="spacing2"
            justifyContent="center"
            width="100%"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Collapsible.Content>
      </Collapsible.Root>
    </Card>
  );
}
