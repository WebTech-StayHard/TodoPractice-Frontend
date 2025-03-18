import { FC } from "react";
import s from "./folder-tasks.module.css";
import { FolderTasksUIProps } from "./type";
import { Title } from "../../common/title";
import { Separator } from "../../common/separator";
import { AddTaskForm } from '../../add-task-form';

export const FolderTasksUI: FC<FolderTasksUIProps> = ({
  taskElements,
  folder,
}) => {
  return (
    <section className={s.folderTasksContainer}>
      <Title className={s.folderTasksContainer__title} color={folder?.color}>
        {folder?.title}
      </Title>

      <Separator className={s.separator} />

      {
        (taskElements.length > 0) &&
        <div className={s.folderTasks}>
          {taskElements}
        </div>
      }

      <AddTaskForm
        folderid={folder?.id}
      />
    </section>
  );
};
