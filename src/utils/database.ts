import { TFolder, TTask } from "./types";

class FakeDataBase {
  _folders: TFolder[] = [
    {
      id: "1",
      title: "Folder 1",
      color: "#FF5B42",
    },
    {
      id: "2",
      title: "Folder 2",
      color: "#FFA454",
    },
    {
      id: "3",
      title: "Folder 3",
      color: "#FFFFFF",
    },
  ];

  _tasks: TTask[] = [
    {
      id: "1",
      folderid: "1",
      text: "Test 1",
      status: false,
    },
    {
      id: "2",
      folderid: "1",
      text: "Test 2",
      status: false,
    },
    {
      id: "3",
      folderid: "1",
      text: "Test 3",
      status: false,
    },
    {
      id: "4",
      folderid: "1",
      text: "Test 4",
      status: false,
    },
    {
      id: "5",
      folderid: "2",
      text: "Folder 2 - Test",
      status: false,
    },
    {
      id: "6",
      folderid: "2",
      text: "Folder 2 - Test 2",
      status: false,
    },
  ];

  deleteFolder = (id: string) => {
    this._folders = this._folders.filter((f) => f.id !== id);
  };

  deleteTasksByFolderId = (folderid: string) => {
    this._tasks = this._tasks.filter((t) => t.folderid !== folderid);
  };

  getFoldersWithTasks = () =>
    this._folders.map((folder) => ({
      ...folder,
      tasks: this._tasks.filter((t) => t.folderid === folder.id),
    }));

  getFolders = () => this._folders;
  getTasksByFolderId = (folderid: string) =>
    this._tasks.filter((t) => t.folderid === folderid);
}

export const database = new FakeDataBase();
