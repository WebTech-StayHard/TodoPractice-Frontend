import { nanoid } from "@reduxjs/toolkit";
import { TTask } from "../types";
import { initialFolders, initialTasks } from "../constants";
import { TEntityFolder, TEntityTask } from "./types";

class FakeDataBase {
  constructor(
    private _folders: TEntityFolder[],
    private _tasks: TEntityTask[]
  ) {}

  // Folders
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
      tasks: [],
    };
  };

  deleteFolder = (id: string) => {
    this._folders = this._folders.filter((f) => f.id !== id);
  };

  updateFolderTitle = (id: string, title: string) => {
    this.updateEntityProperty(this._folders, id, "title", title);
  };

  // Tasks
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

  deleteTask = (taskid: string) => {
    const task = this._tasks.find((t) => t.id === taskid);

    if (!task) return null;

    this._tasks = this._tasks.filter((t) => t.id !== taskid);
    return { id: task.id, folderid: task.folderid };
  };

  updateTaskStatus = (id: string, status: boolean) => {
    this.updateEntityProperty(this._tasks, id, "status", status);
  };

  updateTaskText = (id: string, text: string) => {
    this.updateEntityProperty(this._tasks, id, "text", text);
  };

  private updateEntityProperty = <T extends { id: string }, K extends keyof T>(
    entityArray: T[],
    id: string,
    property: K,
    value: T[K]
  ) => {
    const index = entityArray.findIndex((e) => e.id === id);

    if (index === -1) return;

    const updatedEntity = { ...entityArray[index], [property]: value };
    entityArray[index] = updatedEntity;
  };
}

export const database = new FakeDataBase(initialFolders, initialTasks);
