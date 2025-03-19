import { ChangeEvent } from 'react';
import { TTask } from '../../../utils/types';

export type TaskUIProps = {
  task: TTask;
  isUpdatingTaskStatus: boolean;
  setTaskStatus: (e: ChangeEvent<HTMLInputElement>) => void;
};