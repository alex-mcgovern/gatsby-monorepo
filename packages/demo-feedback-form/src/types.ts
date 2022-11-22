import type { DocumentReference, Timestamp } from "firebase/firestore";

export interface CommentShape {
  displayName: string;
  created: Timestamp;
  description: string;
  rating: number;
  documentRef: DocumentReference<CommentShape>;
  author_uid: string;
}
