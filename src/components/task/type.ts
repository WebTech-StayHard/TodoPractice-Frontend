import { TTask } from '@utils/types';

export type TaskProps = {
  task: TTask;
  isRemovingTask: string[];
  isUpdatingTaskStatus: string[];
  handleRemove: (taskid: string) => void;
  setTaskStatus: (task: TTask, status: boolean) => void;
};