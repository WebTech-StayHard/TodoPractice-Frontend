import { FC } from "react";
import { useSelector } from 'react-redux';
import { getTasksSelector } from '../../store/slices/tasks/tasks';
import { getCurrentFolderSelector } from '../../store/slices/folders/selectors';
import { Task } from '../task';
import { TaskListUI } from '../ui/task-list';

export const TaskList: FC = () => {
  const tasks = useSelector(getTasksSelector);
  const folder = useSelector(getCurrentFolderSelector) || null;

  const taskElements = tasks.map((t, index) => (
    <Task key={index} task={t} />
  ));

  return (
    <TaskListUI
      taskElements={taskElements}
      folder={folder}
    />
  )
};