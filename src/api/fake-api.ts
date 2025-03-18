import { database as db } from "../utils/database/database";
import { TFolder, TTask } from "../utils/types";

class FakeAPI {
  getFolders = async (): Promise<TFolder[]> => {
    return await new Promise<TFolder[]>((resolve) => {
      setTimeout(() => {
        const result = db.getFolders();
        resolve(result);
      }, 300);
    });
  };

  addFolder = async (title: string, color: string): Promise<TFolder> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        const folder = db.addFolder(title, color);
        resolve(folder);
      }, 500);
    });
  };

  removeFolder = async (id: string): Promise<string> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        db.deleteTasksByFolderId(id);
        db.deleteFolder(id);
        resolve(id);
      }, 500);
    });
  };

  addTask = async(folderid: string, text: string): Promise<TTask> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        const task = db.addTask(folderid, text);
        resolve(task);
      }, 500)
    });
  };
}

export const fakeAPI = new FakeAPI();
