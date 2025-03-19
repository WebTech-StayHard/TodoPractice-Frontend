import { nanoid } from "@reduxjs/toolkit";
import { TTask } from "../types";
import { initialFolders, initialTasks } from "../constants";
import { TEntityFolder, TEntityTask } from "./types";

class FakeDataBase {
  _folders: TEntityFolder[];
  _tasks: TEntityTask[];

  constructor(folders: TEntityFolder[], tasks: TEntityTask[]) {
    this._folders = folders;
    this._tasks = tasks;
  }

  getFolders = () =>
    this._folders.map((folder) => ({
      ...folder,
      tasks: this._tasks.filter((t) => t.folderid === folder.id),
    }));

  addFolder = (title: string, color: string) => {
    const id = nanoid();
    const newFolder: TEntityFolder = {
      id,
      title,
      color,
    };
    this._folders = [...this._folders, newFolder];

    return {
      ...newFolder,
      tasks: []
    };
  };

  deleteFolder = (id: string) => {
    this._folders = this._folders.filter((f) => f.id !== id);
  };

  deleteTasksByFolderId = (folderid: string) => {
    this._tasks = this._tasks.filter((t) => t.folderid !== folderid);
  };

  addTask = (folderid: string, text: string) => {
    const id = nanoid();
    const newTask: TTask = {
      id,
      folderid,
      text,
      status: false,
    };
    this._tasks = [...this._tasks, newTask];

    return newTask;
  };

  updateTaskStatus = (id: string, status: boolean) => {
    const index = this._tasks.findIndex((t) => t.id === id);

    if (index !== -1) {
      const updatedTask = {...this._tasks[index], status};
      this._tasks[index] = updatedTask;
    }
  };
}

export const database = new FakeDataBase(initialFolders, initialTasks);
