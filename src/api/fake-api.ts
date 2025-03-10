import { database as db } from "../utils/database";
import { TFolder, TFolderWithTasks, TTask } from "../utils/types";

class FakeAPI {
  getFoldersWithTasks = async (): Promise<TFolderWithTasks[]> => {
    return await new Promise<TFolderWithTasks[]>((resolve) => {
      setTimeout(() => {
        const result = db.getFoldersWithTasks();
        resolve(result);
      }, 300);
    });
  };

  addFolder = async (title: string, color: string): Promise<string> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        const newFolderId = db.addFolder(title, color);
        resolve(newFolderId);
      }, 500);
    });
  };

  removeFolder = async (id: string) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        db.deleteTasksByFolderId(id);
        db.deleteFolder(id);
        resolve(true);
      }, 500);
    });
  };

  getFolders = async (): Promise<TFolder[]> => {
    return await new Promise<TFolder[]>((resolve) => {
      setTimeout(() => {
        const result = db.getFolders();
        resolve(result);
      }, 500);
    });
  };

  getTasks = async (folderid: string): Promise<TTask[]> => {
    return await new Promise<TTask[]>((resolve) => {
      setTimeout(() => {
        const result = db.getTasksByFolderId(folderid);
        resolve(result);
      }, 300);
    });
  };
}

export const fakeAPI = new FakeAPI();
