import { deleteFolder, folders } from '../utils/constants';
import { TFolder } from '../utils/types';

class FakeAPI {
  getFolders = async (): Promise<TFolder[]> => {
    const result = await new Promise<TFolder[]>((resolve) => {
      setTimeout(() => resolve(folders), 500);
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

