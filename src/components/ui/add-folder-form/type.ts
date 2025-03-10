import { Dispatch, FormEvent, SetStateAction } from 'react';

export type AddFolderFormUIProps = {
  isAddingFolder: boolean;
  folderColor: string;
  folderName: string;
  options: string[];
  setFolderColor: Dispatch<SetStateAction<string>>;
	setFolderName: Dispatch<SetStateAction<string>>;
  handleSubmit: (evt: FormEvent) => void;
}