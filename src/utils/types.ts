export interface TTask {
  id: string;
  folderid: string;
  text: string;
  status: boolean;
};

export interface TFolder {
  id: string;
  title: string;
  color: string;
  tasks: TTask[];
};

