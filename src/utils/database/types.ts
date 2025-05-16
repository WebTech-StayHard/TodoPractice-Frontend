import { TFolder, TTask } from '../types';

export type TEntityFolder = Omit<TFolder, 'tasks'>;
export type TEntityTask = TTask;