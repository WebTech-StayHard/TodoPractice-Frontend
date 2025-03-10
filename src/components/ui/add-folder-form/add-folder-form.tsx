import { FC } from "react";
import { Button } from "../../common/buttons";
import { addFolderFormProps } from "./type";
import s from "./add-folder-form.module.css";

export const AddFolderFormUI: FC<addFolderFormProps> = ({ handleSubmit }) => (
  <form name="add-folder" className={s.form} onSubmit={handleSubmit}>
    <input
      id="folder-name"
      name="folder-name"
      type="text"
      placeholder="Название папки"
      className={s.form__input}
      required
    />
    <div>

    </div>
    <Button className={s.form__submit}>
      Добавить
    </Button>
  </form>
);
