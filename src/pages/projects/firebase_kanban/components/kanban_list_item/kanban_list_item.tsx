import React, { useCallback } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import Button from "../../../../../components/atoms/button/button/button";
import Typography from "../../../../../components/atoms/typography/typography";
import Box from "../../../../../components/layout/box/box";
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
      outline="solid"
      // boxShadow="shadowLight"
      marginBottom="spacing1"
      borderRadius="md"
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
        gridTemplateColumns="1_2"
        gap="spacing1"
        marginBottom="spacing1"
      >
        <Typography>Status</Typography>
        <SingleSelect
          size="sm"
          width="100%"
          value={status}
          searchIndex={statusesSearchIndex}
          onSelect={({ value }) => {
            onSelect({ value, key: "status" });
          }}
        />
        <Typography>Epic</Typography>
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
