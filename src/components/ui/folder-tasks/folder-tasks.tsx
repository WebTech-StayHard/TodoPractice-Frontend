import { FC } from "react";
import s from "./folder-tasks.module.css";
import { FolderTasksUIProps } from "./type";
import { Title } from "@components/common/title";
import { Separator } from "@components/common/separator";
import { AddTaskForm } from "@components/forms/add-task-form";
import { Button } from "@components/common/buttons";
import { EditFolderTitleForm } from "@components/forms/edit-folder-title-form";

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
        <Title className={s.title} color={folder?.color}>
          {folder?.title}
        </Title>
      ) : (
        <EditFolderTitleForm
          folder={folder}
          onUpdateComplete={disableEditTitleMode}
        />
      )}
      <div className={s.editTitle}>
        <Button
          variant={editTitle ? "cross" : "edit"}
          onClick={editTitle ? disableEditTitleMode : activeEditTitleMode}
        />
      </div>
    </div>

    <Separator className={s.separator} />

    {taskElements.length > 0 && (
      <div className={s.folderTasks}>{taskElements}</div>
    )}

    <AddTaskForm folderid={folder?.id} />
  </section>
);
