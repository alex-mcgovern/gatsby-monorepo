export interface KanbanTaskDocument {
  id: string;
  title: string;
  status: string;
  epic: string;
}

export interface KanbanStatusDocument {
  id: string;
  title: string;
  sortIndex: string;
  [key: string]: string;
}

export interface KanbanEpicDocument {
  id: string;
  title: string;
}
