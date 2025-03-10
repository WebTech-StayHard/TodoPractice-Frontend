import { FormEvent } from 'react';

export type AddFolderFormUIProps = {
  formData: {
    folderName: string;
    folderColor: string;
  }
  options: string[];
	onColorChange: (color: string) => void;
  handleSubmit: (evt: FormEvent) => void;
}