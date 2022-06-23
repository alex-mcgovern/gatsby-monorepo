export interface IFirebaseKanbanPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}
export interface IKanbanTaskDocument extends IFirestoreDocument {
  id: string;
  title: string;
  status: string;
  epic: string;
}
export interface IKanbanStatusDocument extends IFirestoreDocument {
  id: string;
  title: string;
  sortIndex: string;
  [key: string]: string;
}
export interface IKanbanEpicDocument extends IFirestoreDocument {
  id: string;
  title: string;
}
