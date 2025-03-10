import { nanoid } from "@reduxjs/toolkit";
import { TFolder, TTask } from "./types";
import { initialFolders, initialTasks } from './constants';

class FakeDataBase {
  _folders: TFolder[];
  _tasks: TTask[];

  constructor(folders: TFolder[], tasks: TTask[]) {
    this._folders = folders;
    this._tasks = tasks;
  }

  addFolder = (title: string, color: string) => {
    const id = nanoid();
    const newFolder: TFolder = {
      id,
      title,
      color
    };
    this._folders = [...this._folders, newFolder];
    return id;
  };

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

export const database = new FakeDataBase(initialFolders, initialTasks);
