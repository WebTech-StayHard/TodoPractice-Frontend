import { ChangeEvent, FormEvent } from 'react';

export type EditFolderTitleFormUIProps = {
  folderTitle: string;
  isUpdate: boolean;
  onFolderTitleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (evt: FormEvent) => void;
}