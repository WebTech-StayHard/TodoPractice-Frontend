import { FC } from "react";
import s from "./folder-tasks.module.css";
import { FolderTasksUIProps } from "./type";
import { Title } from "@components/common/title";
import { Separator } from "@components/common/separator";
import { AddTaskForm } from "@components/forms/add-task-form";
import { Button } from "@components/common/buttons";

import editPenIcon from "@images/edit-pen.svg";

export const FolderTasksUI: FC<FolderTasksUIProps> = ({
  taskElements,
  folder,
  editTitle,
  setEditTitle,
  setFolderTitle,
}) => {
  return (
    <section className={s.folderTasksContainer}>
      <div className={s.titleContainer}>
        {!editTitle ? (
          <Title
            className={s.folderTasksContainer__title}
            color={folder?.color}
          >
            <span>{folder?.title}</span>
          </Title>
        ) : (
          <div>EditMode</div>
        )}
        <Button extraClass={s.editBtn} onClick={setEditTitle}>
          <img 
            className={s.editBtn__icon} 
            src={editPenIcon} 
            alt="edit-pen"
          />
        </Button>
      </div>

      <Separator className={s.separator} />

      {taskElements.length > 0 && (
        <div className={s.folderTasks}>{taskElements}</div>
      )}

      <AddTaskForm folderid={folder?.id} />
    </section>
  );
};
