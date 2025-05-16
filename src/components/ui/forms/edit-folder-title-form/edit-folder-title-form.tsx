import { Button } from "@components/common/buttons";
import { EditFolderTitleFormUIProps } from "./type";
import { FC } from "react";
import s from "./edit-folder-title-form.module.css";

export const EditFolderTitleFormUI: FC<EditFolderTitleFormUIProps> = ({
  folderTitle,
  isUpdate,
  isError,
  onFolderTitleChange,
  handleSubmit,
}) => (
  <form className={s.form} name="edit-folder-title" onSubmit={handleSubmit}>
    <input
      id="folder-title"
      className={s.input}
      placeholder="Новое название папки"
      value={folderTitle}
      onChange={onFolderTitleChange}
      maxLength={64}
      required
    />
    <Button variant="done" disabled={isUpdate || isError} />
  </form>
);
