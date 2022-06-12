import { useEffect, useState } from "react";
import firebase from "../../utils/firebase/firebase";

type TListItems = { id: string }[];

interface IUseFirestoreCollection {
  collection: string;
}

export const useFirestoreCollection = ({
  collection,
}: IUseFirestoreCollection) => {
  const [items, setItems] = useState([]); //useState() hook, sets initial state to an empty array
  useEffect(() => {
    firebase
      .firestore() //access firestore
      .collection(collection) //access "items" collection
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems: TListItems = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        setItems(listItems); //items is equal to listItems
      });
  }, []);
  return items;
};
