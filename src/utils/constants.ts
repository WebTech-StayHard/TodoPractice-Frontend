import { TFolder } from './types';

export let folders: TFolder[] = [
  {
    id: '1',
    title: 'Folder 1',
    color: '#FFFFFF'
  },
  {
    id: '2',
    title: 'Folder 2',
    color: '#FFA454'
  },
  {
    id: '3',
    title: 'Folder 3',
    color: '#FF5B42'
  }
]

export const deleteFolder = (id: string) => {
  folders = folders.filter(f => f.id !== id);
}