import { DocumentData, QuerySnapshot } from "firebase/firestore";

/**
 * Lightweight Firestore query snapshot mock.
 * ToDO(firestore): Mock Firestore fns properly
 */
export const QUERY_SNAPSHOT_MOCK: QuerySnapshot<DocumentData> = {
  docs: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
} as QuerySnapshot<DocumentData>;
