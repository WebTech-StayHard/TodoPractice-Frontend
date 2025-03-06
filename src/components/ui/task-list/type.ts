import { ReactNode } from 'react';
import { TFolder } from '../../../utils/types';

export type TaskListUIProps = {
  taskElements: ReactNode[],
  folder: TFolder | null
};