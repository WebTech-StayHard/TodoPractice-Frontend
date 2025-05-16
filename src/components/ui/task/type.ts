import { ChangeEvent } from 'react';
import { TTask } from '@utils/types';

export type TaskUIProps = {
  task: TTask;
  editMode: boolean;
  isRemovingTask: boolean;
  isUpdatingTaskStatus: boolean;
  activeEditMode: () => void;
  disableEditMode: () => void; 
  removeTask: () => void;
  setTaskStatus: (e: ChangeEvent<HTMLInputElement>) => void;
};