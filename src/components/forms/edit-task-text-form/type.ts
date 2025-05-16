import { TTask } from '@utils/types';

export type EditTaskTextFormProps = {
  task: TTask;
  stopEdit: () => void;
}