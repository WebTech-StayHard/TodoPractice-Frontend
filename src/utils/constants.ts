import { TFolder, TTask } from './types';

export let folders: TFolder[] = [
  {
    id: '1',
    title: 'Folder 1',
    color: '#FF5B42'
  },
  {
    id: '2',
    title: 'Folder 2',
    color: '#FFA454'
  },
  {
    id: '3',
    title: 'Folder 3',
    color: '#FFFFFF'
  }
];

export let tasks: TTask[] = [
  {
    id: '1',
    folderid: '1',
    text: 'Test 1',
    status: false
  },
  {
    id: '2',
    folderid: '1',
    text: 'Test 2',
    status: false
  },
  {
    id: '3',
    folderid: '1',
    text: 'Test 3',
    status: false
  },
  {
    id: '4',
    folderid: '1',
    text: 'Test 4',
    status: false
  },
  {
    id: '5',
    folderid: '2',
    text: 'Folder 2 - Test',
    status: false
  },
  {
    id: '6',
    folderid: '2',
    text: 'Folder 2 - Test 2',
    status: false
  }
];

export const deleteFolder = (id: string) => {
  folders = folders.filter(f => f.id !== id);
};