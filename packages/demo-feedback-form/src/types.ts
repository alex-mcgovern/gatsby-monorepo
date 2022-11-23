import type { DocumentReference, Timestamp } from "firebase/firestore";

export interface CommentShape {
  displayName: string;
  email: string;
  created: Timestamp;
  description: string;
  rating: number;
  documentRef: DocumentReference<CommentShape>;
  author_uid: string;
}
