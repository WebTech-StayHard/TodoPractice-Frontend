// Сущность 'Task'
export type TTask = {
  id: string;
  folderid: string;
  text: string;
  status: boolean;
};

// Сущность 'Folder'
export type TFolder = {
  id: string;
  title: string;
  color: string;
};

// Объединение сущностей
export type TFolderWithTasks = TFolder & {
  tasks: TTask[];
}