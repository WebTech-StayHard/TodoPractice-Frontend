import { FC } from "react";
import s from "./task-list.module.css";
import { useSelector } from "../../store/store";
import { getTasksSelector } from "../../store/slices/tasks";
import Task from "./task/task";

const TaskList: FC = () => {
  const tasks = useSelector(getTasksSelector);

  const taskElements = tasks.map((t, index) => (
    <Task
      key={index}
      task={t}
    />
  ));

  return (
    !tasks.length ?
    <h2 className={s.taskList__title}>
      Задачи отсутствуют
    </h2>
    :
    <div>
      { taskElements }
    </div>
  );
};

export default TaskList;
