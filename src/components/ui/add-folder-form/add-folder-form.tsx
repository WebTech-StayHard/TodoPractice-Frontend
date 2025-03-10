import { FC } from 'react';
import { Button } from '../../common/buttons';
import { addFolderFormProps } from './type';

import s from './add-folder-form.module.css';

export const AddFolderFormUI: FC<addFolderFormProps> = () => {
  return (
    <form name="add-folder">
      <input />
      <Button>Добавить</Button>
    </form>
  );
};