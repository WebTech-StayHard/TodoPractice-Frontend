import { TFolder, TTask } from "./types";

class FakeDataBase {
  _folders: TFolder[] = [
    {
      id: "1",
      title: "Фронтенд",
      color: "#FF5B42",
    },
    {
      id: "2",
      title: "Покупки",
      color: "#FFA454",
    },
    {
      id: "3",
      title: "Фильмы и сериалы",
      color: "#FFBBCC",
    },
  ];

  _tasks: TTask[] = [
    {
      id: "1",
      folderid: "1",
      text: "Изучить JavaScript",
      status: false,
    },
    {
      id: "2",
      folderid: "1",
      text: "Изучить паттерны проектирования",
      status: false,
    },
    {
      id: "3",
      folderid: "1",
      text: "ReactJS Hooks (useState, useReducer, useEffect и т.д.)",
      status: false,
    },
    {
      id: "4",
      folderid: "1",
      text: "Redux (redux-observable, redux-saga)",
      status: false,
    },
    {
      id: "5",
      folderid: "2",
      text: "Макарошки",
      status: false,
    },
    {
      id: "6",
      folderid: "2",
      text: "Картошку",
      status: false,
    },
    {
      id: "7",
      folderid: "2",
      text: "Биткоины",
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
