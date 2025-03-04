import { folders } from '../utils/constants';
import { TFolder } from '../utils/types';

class FakeAPI {
  getFolders = async (): Promise<TFolder[]> => {
    const result = await new Promise<TFolder[]>((resolve) => {
      setTimeout(() => resolve(folders), 1000);
    });
    
    return result;
  }
}

export const fakeAPI = new FakeAPI();

