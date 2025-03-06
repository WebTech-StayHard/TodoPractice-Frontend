import {
  deleteFolder,
  deleteTasksByFolderId,
  folders,
  tasks,
} from "../utils/constants";
import { TFolder, TTask } from "../utils/types";

class FakeAPI {
  getFolders = async (): Promise<TFolder[]> => {
    return await new Promise<TFolder[]>((resolve) => {
      setTimeout(() => resolve(folders), 500);
    });
  };

  getTasks = async (folderid: string): Promise<TTask[]> => {
    return await new Promise<TTask[]>((resolve) => {
      setTimeout(() => {
        const result = tasks.filter((t) => t.folderid === folderid);
        resolve(result);
      }, 300);
    });
  };

  removeFolder = async (id: string) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        deleteTasksByFolderId(id);
        deleteFolder(id);
        resolve(true);
      }, 500);
    });
  };
}

export const fakeAPI = new FakeAPI();
