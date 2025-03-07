import { FC } from "react";
import s from "./folder-tasks.module.css";
import clsx from "clsx";
import { FolderTasksUIProps } from "./type";
import { Title } from '../../common/title';
import { Separator } from '../../common/separator';
import { Button } from '../../common/buttons';

export const FolderTasksUI: FC<FolderTasksUIProps> = ({ taskElements, folder }) => {
  return !taskElements.length ? (
    <section className={s.noTasks}>
      <Title className={s.noTasks__title}>
        Задачи отсутствуют
      </Title>
    </section>
  ) : (
    <section className={s.folderTasksContainer}>
      <Title className={s.folderTasksContainer__title} color={folder?.color}>
        {folder?.title}
      </Title>

      <Separator className={s.separator} />

      <div className={s.folderTasks}>{taskElements}</div>

      <form className={s.form} name="add-task">
        <input
          id="text-task"
          className={s.taskInput}
          placeholder="Текст задачи"
        />
        <div className={s.taskBtnContainer}>
          <Button className={clsx(s.taskBtn, s.taskSubmitBtn)}>
            Добавить задачу
          </Button>
          <Button className={clsx(s.taskBtn, s.taskCancelBtn)}>
            Отмена
          </Button>
        </div>
      </form>
    </section>
  );
};
