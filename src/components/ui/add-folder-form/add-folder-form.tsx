import { FC } from "react";
import { Button } from "../../common/buttons";
import { AddFolderFormUIProps } from "./type";
import s from "./add-folder-form.module.css";
import { RadioGroup } from '../../form-elements';

export const AddFolderFormUI: FC<AddFolderFormUIProps> = ({ formData, options, onColorChange, handleSubmit }) => (
  <form name="add-folder" className={s.form} onSubmit={handleSubmit}>
    <input
      id="folder-name"
      name="folder-name"
      type="text"
      placeholder="Название папки"
      className={s.form__input}
      required
    />
    <RadioGroup
      title="Цвет папки:"
      name="radio"
      selected={formData.folderColor}
      options={options}
      onChange={onColorChange}
    />
    <Button className={s.form__submit}>Добавить</Button>
  </form>
);
