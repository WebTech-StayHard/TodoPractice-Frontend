import { FC } from "react";
import { RadioGroup } from "@components/forms/form-elements";
import { Button } from "@components/common/buttons";
import { AddFolderFormUIProps } from "./type";
import s from "./add-folder-form.module.css";

export const AddFolderFormUI: FC<AddFolderFormUIProps> = ({
  isAddingFolder,
  folderName,
  folderColor,
  options,
  setFolderName,
  setFolderColor,
  handleSubmit,
}) => (
  <form name="add-folder" className={s.form} onSubmit={handleSubmit}>
    <input
      id="folder-name"
      name="folder-name"
      type="text"
      value={folderName}
      onChange={(evt) => setFolderName(evt.target.value)}
      placeholder="Название папки"
      className={s.form__input}
      maxLength={64}
      required
    />
    <RadioGroup
      title="Цвет папки:"
      name="radio"
      selected={folderColor}
      options={options}
      onChange={setFolderColor}
    />
    <Button
      children={isAddingFolder ? "Добавление..." : "Добавить"}
      className={s.form__submit}
      disabled={isAddingFolder}
    />
  </form>
);
