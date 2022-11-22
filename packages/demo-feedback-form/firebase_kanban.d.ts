export interface KanbanTaskDocument extends IFirestoreDocument {
  id: string;
  title: string;
  status: string;
  epic: string;
}
export interface KanbanStatusDocument extends IFirestoreDocument {
  id: string;
  title: string;
  sortIndex: string;
  [key: string]: string;
}
export interface KanbanEpicDocument extends IFirestoreDocument {
  id: string;
  title: string;
}
