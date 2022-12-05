import { QuerySnapshot } from "firebase/firestore";
import { CommentShape } from "../../../types";

/**
 * Lightweight Firestore query snapshot mock.
 * ToDO(firestore): Mock Firestore fns properly
 */
export const QUERY_SNAPSHOT_MOCK: QuerySnapshot<CommentShape> = {
  docs: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
} as QuerySnapshot<CommentShape>;
