import React, { useCallback } from "react";
import {
  DocumentData,
  DocumentReference,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { Box } from "../../../../../components/atoms/box/box";
import { Button } from "../../../../../components/atoms/button/button";
import { Typography } from "../../../../../components/atoms/typography/typography";
import DropdownCombobox from "../../../../../components/molecules/dropdown_combobox/dropdown_combobox";

interface KanbanListItemProps {
  id: string;
  docRef: DocumentReference<DocumentData>;
  title: string;
  epic?: string;
  status?: string;
  isSignedIn?: boolean;
  statusesDropdownItems: IDownshiftItem[];
  epicsDropdownItems: IDownshiftItem[];
}

interface OnSelectArgs {
  value: string;
  key: string;
}

export default function KanbanListItem({
  id,
  title,
  status,
  isSignedIn,
  epic,
  docRef,
  statusesDropdownItems,
  epicsDropdownItems,
}: KanbanListItemProps) {
  // Get a ref to the current task

  // const taskDocRef = doc(firebase.firestore(), "tasks", id);

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

  return (
    <Box
      customisation={{
        padding: "spacing2",
        boxShadow: "shadowLight",
        backgroundColor: "neutral_bg_3",
        marginBottom: "spacing1",
        borderRadius: "sm",
        border: "1px solid",
        borderColor: {
          default: "neutral_ui_2",
          hover: "neutral_border_1",
        },
      }}
    >
      <Typography
        customisation={{
          fontWeight: "medium",
          marginBottom: "spacing1",
        }}
      >
        {title}
      </Typography>

      <Box
        customisation={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "1_2",
          gap: "spacing1",
          marginBottom: "spacing1",
        }}
      >
        <Typography
          customisation={{
            fontSize: "body_sm",
          }}
        >
          Status
        </Typography>
        <DropdownCombobox
          buttonTitle={status}
          id="kanban-status-dropdown"
          customisation={{
            justifyContent: "space-between",
            width: "100%",
          }}
          items={statusesDropdownItems}
          isDisabled={!isSignedIn}
          label="Status"
          onSelect={({ value }) => {
            onSelect({ value, key: "status" });
          }}
          variant={{ appearance: "secondary", size: "sm" }}
        />

        <Typography
          customisation={{
            fontSize: "body_sm",
          }}
        >
          Epic
        </Typography>
        <DropdownCombobox
          id="kanban-epic-dropdown"
          label="Epic"
          customisation={{
            justifyContent: "space-between",
            width: "100%",
          }}
          variant={{ appearance: "secondary", size: "sm" }}
          buttonTitle={epic}
          isDisabled={!isSignedIn}
          items={epicsDropdownItems}
          onSelect={({ value }) => {
            onSelect({ value, key: "epic" });
          }}
        />
      </Box>
      <Button
        id="kanban-delete-button"
        variant={{ size: "md" }}
        customisation={{
          justifyContent: "space-between",
          width: "100%",
        }}
        title="Delete"
        isDisabled={!isSignedIn}
        onClick={handleDelete}
      />
    </Box>
  );
}

KanbanListItem.defaultProps = {
  placeholderProp: null,
};
