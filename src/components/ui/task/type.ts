import { ChangeEvent } from 'react';
import { TTask } from '../../../utils/types';

export type TaskUIProps = {
  task: TTask;
  isRemovingTask: boolean;
  isUpdatingTaskStatus: boolean;
  removeTask: () => void;
  setTaskStatus: (e: ChangeEvent<HTMLInputElement>) => void;
};