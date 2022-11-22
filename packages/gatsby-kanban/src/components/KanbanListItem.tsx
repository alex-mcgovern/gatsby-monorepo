import React, { useCallback, useRef, useState } from "react";
import { Box, Button, ListItem } from "@alexmcgovern/boondoggle.design";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import { faGripVertical, faTrashCan } from "@fortawesome/free-solid-svg-icons";
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
    type: "kanbanCard",
    item: { type: "kanbanCard", docRef },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });
  drag(ref);

  return (
    <ListItem
      padding="spacing1"
      marginBottom="spacing1"
      className={styles.KanbanListItem}
      ref={ref}
    >
      <Box
        as="header"
        display="flex"
        alignItems="start"
        justifyContent="space-between"
        gap="spacing1"
      >
        <Box fontWeight="medium">{title}</Box>

        <Button
          iconTrailing={faGripVertical}
          marginY="none"
          size="md_square"
          appearance="tertiary"
          color="neutral"
        />
      </Box>

      {description && <Box fontWeight="medium">{description}</Box>}

      {/** ————————————————————
       * DELETE BUTTON
       * ——————————————————————— */}
      <Button
        iconTrailing={faTrashCan}
        appearance="secondary"
        marginTop="spacing2"
        justifyContent="center"
        width="100%"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </ListItem>
  );
}
