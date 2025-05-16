import { ChangeEvent, FormEvent } from 'react';

export type AddTaskFormUIProps = {
  isFormShow: boolean;
  taskText: string;
  onTaskTextChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  showForm: () => void;
  hideForm: () => void;
  handleSubmit: (e: FormEvent) => void;
}