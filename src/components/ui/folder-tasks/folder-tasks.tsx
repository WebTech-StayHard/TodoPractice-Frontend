import { FC } from "react";
import s from "./folder-tasks.module.css";
import { FolderTasksUIProps } from "./type";
import { Title } from "@components/common/title";
import { Separator } from "@components/common/separator";
import { AddTaskForm } from "@components/forms/add-task-form";
import { Button } from "@components/common/buttons";
import { EditFolderTitleForm } from "@components/forms/edit-folder-title-form";

import editPenIcon from "@images/edit-pen.svg";
import crossIcon from "@images/cross.svg";
import clsx from 'clsx';

export const FolderTasksUI: FC<FolderTasksUIProps> = ({
  taskElements,
  folder,
  editTitle,
  activeEditTitleMode,
  disableEditTitleMode,
}) => (
  <section className={s.folderTasksContainer}>
    <div className={s.titleContainer}>
      {!editTitle ? (
        <Title className={s.folderTasksContainer__title} color={folder?.color}>
          <span>{folder?.title}</span>
        </Title>
      ) : (
        <EditFolderTitleForm
          folder={folder}
          onSubmit={disableEditTitleMode}
        />
      )}
      {!editTitle ? (
        <Button
          extraClass={clsx(s.btn, s.editBtn)}
          onClick={activeEditTitleMode}
        >
          <img className={s.btn__icon} src={editPenIcon} alt="edit-pen" />
        </Button>
      ) : (
        <Button
          extraClass={clsx(s.btn, s.stopEditBtn)}
          onClick={disableEditTitleMode}
        >
          <img className={s.btn__icon} src={crossIcon} alt="cross-icon" />
        </Button>
      )}
    </div>

    <Separator className={s.separator} />

    {taskElements.length > 0 && (
      <div className={s.folderTasks}>{taskElements}</div>
    )}

    <AddTaskForm folderid={folder?.id} />
  </section>
);
