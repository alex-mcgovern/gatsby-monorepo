import { useContext, useEffect, useState } from "react";
import { FirebaseAuthContext } from "../../context/firebase_context";

export interface IFirestoreDocument {
  id: string;
  [key: string]: string;
}

interface IUseFirestoreCollection {
  collection: string;
}

export const useFirestoreCollection = ({
  collection,
}: IUseFirestoreCollection) => {
  const { firebase } = useContext(FirebaseAuthContext);

  if (firebase) {
    const [items, setItems] = useState<IFirestoreDocument[]>([]);
    useEffect(() => {
      firebase
        .firestore()
        .collection(collection)
        .onSnapshot((snapshot) => {
          const listItems: IFirestoreDocument[] = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setItems(listItems);
        });
    }, []);
    return items;
  }
  return null;
};
