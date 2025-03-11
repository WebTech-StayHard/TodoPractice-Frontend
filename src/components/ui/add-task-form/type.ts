import { FormEvent } from 'react';

export type AddTaskFormUIProps = {
  isFormShow: boolean;
  showForm: () => void;
  hideForm: () => void;
  handleSubmit: (e: FormEvent) => void;
}