import { getIsUpdatingTaskText } from '@slices/operationStatusSlice';
import { useDispatch, useSelector } from "@store";
import { updateTaskTextAsync } from '@thunks/tasksThunks';
import { checkInProgress } from '@utils/helpers/arrayHelper';
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { EditTaskTextFormProps } from "./type";
import { EditTaskTextFormUI } from '@ui/forms/edit-task-text-form';

export const EditTaskTextForm: FC<EditTaskTextFormProps> = ({
  task,
  onUpdateComplete,
}) => {
  const dispatch = useDispatch();
  const isUpdating = useSelector(getIsUpdatingTaskText);
  const [taskText, setTaskText] = useState(task.text);
  const isError = taskText === task.text;

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    if (!task.id) return;

    try {
      await dispatch(
        updateTaskTextAsync({
          task,
          data: taskText,
        })
      );
      onUpdateComplete();
    } catch (err) {
      console.log(err);
    }
  };

  const onTaskTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTaskText(evt.target.value);
  };

  return (
    <EditTaskTextFormUI
      taskText={taskText}
      isUpdate={checkInProgress(isUpdating, task.id)}
      isError={isError}
      onTaskTextChange={onTaskTextChange}
      handleSubmit={handleSubmit}
    />
  );
};
