import type { DocumentReference } from "firebase/firestore";

export interface CommentShape {
  displayName: string | null;
  email: string;
  created: {
    seconds: number;
    nanoseconds: number;
  };
  description: string;
  rating: number;
  documentRef?: DocumentReference<CommentShape>;
  author_uid: string;
}
