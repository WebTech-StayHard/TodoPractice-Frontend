import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AddTaskFormUI } from "@ui/forms/add-task-form";
import { useDispatch } from "@store";
import { addTaskAsync } from "@thunks/tasksThunks";
import { AddTaskFormProps } from './type';

export const AddTaskForm: FC<AddTaskFormProps> = ({ folderid }) => {
  const dispatch = useDispatch();
  const [isFormShow, setIsFormShow] = useState(false);
  const [taskText, setTaskText] = useState("");

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    if (!folderid) return;

    try {
      await dispatch(
        addTaskAsync({
          folderid: folderid,
          text: taskText,
        })
      );
      setTaskText("");
      setIsFormShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onTaskTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTaskText(evt.target.value);
  };

  const showForm = () => setIsFormShow(true);
  const hideForm = () => setIsFormShow(false);

  return (
    <AddTaskFormUI
      isFormShow={isFormShow}
      taskText={taskText}
      onTaskTextChange={onTaskTextChange}
      showForm={showForm}
      hideForm={hideForm}
      handleSubmit={handleSubmit}
    />
  );
};
