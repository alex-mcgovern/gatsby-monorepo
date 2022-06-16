import React, { useCallback } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import Box from "../../../../../components/atoms/box/box";
import Button from "../../../../../components/atoms/button/button/button";
import Typography from "../../../../../components/atoms/typography/typography";
import SingleSelect from "../../../../../components/molecules/single_select/single_select/single_select";
import firebase from "../../../../../utils/firebase/firebase";

interface IKanbanListItem {
  id: string;
  title: string;
  epic?: string;
  status?: string;
  statusesSearchIndex: IDownshiftItem[];
  epicsSearchIndex: IDownshiftItem[];
}

export default function KanbanListItem({
  id,
  title,
  status,
  epic,
  statusesSearchIndex,
  epicsSearchIndex,
}: IKanbanListItem) {
  const taskDocRef = doc(firebase.firestore(), "tasks", id);

  const onSelect = useCallback(async ({ value, key }) => {
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
      padding="spacing3"
      boxShadow="shadowLight"
      background="neutral_ui_base"
      marginBottom="spacing1"
      borderRadius="md"
      border="1px solid"
      borderColor={{
        default: "neutral_ui_selected",
        hover: "neutral_border_interactive",
      }}
    >
      <Typography
        display="block"
        fontSize="body_lg"
        fontWeight="medium"
        marginBottom="spacing3"
      >
        {title}
      </Typography>

      <Box
        display="grid"
        alignItems="center"
        gridTemplateColumns="1_2"
        gap="spacing1"
        marginBottom="spacing1"
      >
        <Typography fontSize="body_sm">Status</Typography>
        <SingleSelect
          size="sm"
          width="100%"
          value={status}
          searchIndex={statusesSearchIndex}
          onSelect={({ value }) => {
            onSelect({ value, key: "status" });
          }}
        />
        <Typography fontSize="body_sm">Epic</Typography>
        <SingleSelect
          width="100%"
          size="sm"
          value={epic}
          searchIndex={epicsSearchIndex}
          onSelect={({ value }) => {
            onSelect({ value, key: "epic" });
          }}
        />
      </Box>
      <Button size="sm" title="Delete" width="100%" onClick={handleDelete} />
    </Box>
  );
}

KanbanListItem.defaultProps = {
  placeholderProp: null,
};
