export type TTask = {
  id: string;
  folderid: string;
  text: string;
  status: boolean;
};

export type TFolder = {
  id: string;
  title: string;
  color: string;
};