import { FC, FormEvent, useState } from "react";
import { AddTaskFormUI } from "../ui/add-task-form";

export const AddTaskForm: FC = () => {
  const [isFormShow, setIsFormShow] = useState(false);

  const showForm = () => setIsFormShow(true);
  const hideForm = () => setIsFormShow(false);
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    setIsFormShow(false);
  }
  
  return (
    <AddTaskFormUI
      isFormShow={isFormShow}
      showForm={showForm}
      hideForm={hideForm}
      handleSubmit={handleSubmit}
    />
  )
};
