import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export function resolveFirestoreDocData(
  documentSnapshots?: Array<QueryDocumentSnapshot<DocumentData>>
) {
  return documentSnapshots?.map((doc) => {
    return { ...doc.data(), documentRef: doc.ref };
  });
}
