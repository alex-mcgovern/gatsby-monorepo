import type { DocumentData, DocumentReference } from "firebase/firestore";

export interface CommentShape extends DocumentData {
  displayName: string | null;
  email: string;
  created: {
    seconds: number;
    nanoseconds: number;
  };
  description: string;
  rating: number;
  documentRef?: DocumentReference<DocumentData>;
  author_uid: string;
}
