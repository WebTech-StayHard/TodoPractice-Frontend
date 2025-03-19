import { TTask } from '../../utils/types';

export type TaskProps = {
  task: TTask;
  isUpdatingTaskStatus: string[];
  setTaskStatus: (task: TTask, status: boolean) => void;
};