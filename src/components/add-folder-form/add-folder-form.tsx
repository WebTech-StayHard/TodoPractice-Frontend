import { FC, FormEvent } from 'react';
import { AddFolderFormUI } from '../ui/add-folder-form';

export const AddFolderForm: FC = () => {
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
  };

  return (
    <AddFolderFormUI
      handleSubmit={handleSubmit}
    />
  );
}
