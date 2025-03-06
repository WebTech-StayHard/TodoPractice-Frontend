import { deleteFolder, folders, tasks } from '../utils/constants';
import { TFolder, TTask } from '../utils/types';

class FakeAPI {
  getFolders = async (): Promise<TFolder[]> => {
    const result = await new Promise<TFolder[]>((resolve) => {
      setTimeout(() => resolve(folders), 500);
    });
    
    return result;
  }

  getTasks = async (folderid: string): Promise<TTask[]> => {
    const result = await new Promise<TTask[]>((resolve) => {
      setTimeout(() => {
        const result = tasks.filter((t) => t.folderid === folderid);
        resolve(result);
      }, 300);
    });
    
    return result;
  }

  removeFolder = async (id: string) => {
    return await new Promise((resolve) => {
      setTimeout(() => resolve(deleteFolder(id)), 500)
    });
  }
}

export const fakeAPI = new FakeAPI();

