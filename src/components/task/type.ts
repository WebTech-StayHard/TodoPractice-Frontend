import { TTask } from '@utils/types';

export type TaskProps = {
  task: TTask;
  isRemovingTask: string[];
  isUpdatingTaskStatus: string[];
};