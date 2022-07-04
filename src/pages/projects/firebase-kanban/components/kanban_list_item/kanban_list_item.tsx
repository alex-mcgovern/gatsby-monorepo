import React, { useCallback } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Box } from "../../../../../components/atoms/box/box";
import { Button } from "../../../../../components/atoms/button/button";
import { Typography } from "../../../../../components/atoms/typography/typography";
import DropdownCombobox from "../../../../../components/molecules/dropdown_combobox/dropdown_combobox";
import firebase from "../../../../../utils/firebase/firebase_old";

interface IKanbanListItemProps {
  id: string;
  title: string;
  epic?: string;
  status?: string;
  statusesDropdownItems: IDownshiftItem[];
  epicsDropdownItems: IDownshiftItem[];
}

interface IOnSelectArgs {
  value: string;
  key: string;
}

export default function KanbanListItem({
  id,
  title,
  status,
  epic,
  statusesDropdownItems,
  epicsDropdownItems,
}: IKanbanListItemProps) {
  // Get a ref to the current task

  const taskDocRef = doc(firebase.firestore(), "tasks", id);

  const onSelect = useCallback(async ({ value, key }: IOnSelectArgs) => {
    try {
      await updateDoc(taskDocRef, {
        [key]: value,
      });
    } catch (err) {
      alert(err);
    }
  }, []);

  const handleDelete = useCallback(async () => {
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <Box
      customisation={{
        padding: "spacing3",
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
          marginBottom: "spacing3",
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
            marginBottom: "spacing3",
            width: "100%",
          }}
          items={statusesDropdownItems}
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
            marginBottom: "spacing3",
            width: "100%",
          }}
          variant={{ appearance: "secondary", size: "sm" }}
          buttonTitle={epic}
          items={epicsDropdownItems}
          onSelect={({ value }) => {
            onSelect({ value, key: "epic" });
          }}
        />
      </Box>
      <Button
        id="kanban-delete-button"
        variant={{ size: "xs" }}
        customisation={{
          justifyContent: "space-between",
          width: "100%",
        }}
        title="Delete"
        onClick={handleDelete}
      />
    </Box>
  );
}

KanbanListItem.defaultProps = {
  placeholderProp: null,
};
