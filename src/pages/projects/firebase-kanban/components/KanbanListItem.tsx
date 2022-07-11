import React, { useCallback, useRef, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  DocumentData,
  DocumentReference,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useDrag } from "react-dnd";
import { Box } from "../../../../components/atoms/box/box";
import { Button } from "../../../../components/atoms/button/button";
import { Card } from "../../../../components/atoms/card/card";
import { Typography } from "../../../../components/atoms/typography/typography";
import ComboboxSearchable, {
  DropdownSearchableProps,
} from "../../../../components/molecules/Dropdown/DropdownSearchable";
import * as styles from "./KanbanListItem.css";

interface KanbanListItemProps {
  id: string;
  docRef: DocumentReference<DocumentData>;
  description: string;
  title: string;
  epic?: string;
  status?: string;
  isLoggedIn?: boolean;
  statusesDropdownItems: IDownshiftItem[];
  epicsDropdownItems: IDownshiftItem[];
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
  customisation: {
    width: "100%",
  },
};

export default function KanbanListItem({
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

  const onSelect = useCallback(async ({ value, key }: OnSelectArgs) => {
    try {
      await updateDoc(docRef, {
        [key]: value,
      });
    } catch (err) {
      alert(err);
    }
  }, []);

  const handleDelete = useCallback(async () => {
    try {
      await deleteDoc(docRef);
    } catch (err) {
      alert(err);
    }
  }, []);

  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: "kanbanCard", docRef },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);

  return (
    <Card
      customisation={{
        padding: "spacing1",
        marginBottom: "spacing1",
      }}
      className={styles.KanbanListItem}
      ref={ref}
    >
      <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
        <Box
          as="header"
          customisation={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "spacing1",
          }}
        >
          <Typography
            customisation={{
              fontWeight: "medium",
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              customisation={{
                fontWeight: "medium",
              }}
            >
              {description}
            </Typography>
          )}

          <Collapsible.Trigger>
            <Button
              iconTrailing={"ellipsis"}
              customisation={{
                marginY: "none",
              }}
              variant={{
                size: "sm",
                appearance: isOpen ? "primary" : "secondary",
              }}
            />
          </Collapsible.Trigger>
        </Box>

        <Collapsible.Content>
          {/** ————————————————————
           *      STATUS DROPDOWN
           * ——————————————————————— */}
          <ComboboxSearchable
            initialInputValue={status}
            id="kanban-status-dropdown"
            items={statusesDropdownItems}
            label="Status"
            name="Status"
            {...dropdownSharedProps}
          />

          {/** ————————————————————
           *      EPIC DROPDOWN
           * ——————————————————————— */}
          <ComboboxSearchable
            initialInputValue={epic}
            id="kanban-epic-dropdown"
            isCreatable
            items={epicsDropdownItems}
            name="Epic"
            label="Epic"
            {...dropdownSharedProps}
          />

          {/** ————————————————————
           *      DELETE BUTTON
           * ——————————————————————— */}
          <Button
            title="Delete"
            iconTrailing="trash-can"
            variant={{ size: "sm", appearance: "secondary" }}
            customisation={{
              marginTop: "spacing2",
              justifyContent: "center",
              width: "100%",
            }}
            onClick={handleDelete}
          />
        </Collapsible.Content>
      </Collapsible.Root>
    </Card>
  );
}

KanbanListItem.defaultProps = {
  placeholderProp: null,
};
