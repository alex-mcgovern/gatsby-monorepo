import type { QueryDocumentSnapshot } from "firebase/firestore";
import type { CommentShape } from "../types";

/**
 * Convert type `DocumentData` to type `CommentShape`
 */
export const firestoreCommentsConverter = {
  toFirestore: (data: CommentShape) => {
    return data;
  },
  fromFirestore: (snap: QueryDocumentSnapshot) => {
    return snap.data() as CommentShape;
  },
};
