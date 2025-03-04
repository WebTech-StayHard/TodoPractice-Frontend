import { deleteFolder, folders } from '../utils/constants';
import { TFolder } from '../utils/types';

class FakeAPI {
  getFolders = async (): Promise<TFolder[]> => {
    const result = await new Promise<TFolder[]>((resolve) => {
      setTimeout(() => resolve(folders), 1000);
    });
    
    return result;
  }

  removeFolder = async (id: string): Promise<TFolder[]> => {
    return await new Promise<TFolder[]>((resolve) => {
      setTimeout(() => resolve(deleteFolder(id)), 1000)
    });
  }
}

export const fakeAPI = new FakeAPI();

