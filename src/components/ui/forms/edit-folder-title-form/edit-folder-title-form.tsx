import { Button } from "@components/common/buttons";
import { EditFolderTitleFormUIProps } from "./type";
import { FC } from "react";
import s from "./edit-folder-title-form.module.css";
import doneIcon from '@images/done.svg';

export const EditFolderTitleFormUI: FC<EditFolderTitleFormUIProps> = ({
  folderTitle,
  isUpdate,
  onFolderTitleChange,
  handleSubmit,
}) => (
  <form 
    className={s.form} 
    name="edit-folder-title"
    onSubmit={handleSubmit}
  >
    <fieldset>
      <input
        id="folder-title"
        className={s.input}
        placeholder="Новое название"
        value={folderTitle}
        onChange={onFolderTitleChange}
        required
      />
    </fieldset>
    <Button extraClass={s.btnSubmit} disabled={isUpdate}>
      <img src={doneIcon} alt='done' />
    </Button>
  </form>
);
