import { ChangeEvent, FormEvent } from 'react';

export type EditTaskTextFormUIProps = {
  taskText: string;
  isUpdate: boolean;
  isError: boolean;
  onTaskTextChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  stopEdit: () => void;
  handleSubmit: (evt: FormEvent) => void;
}