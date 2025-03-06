/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "../../store/store";
import { getIsLoadingSelector, getTasks } from "../../store/slices/tasks/tasks";
import { useParams } from 'react-router-dom';
import { setCurrentFolder } from '../../store/slices/folders/folders';
import { TaskPageUI } from '../../components/ui/pages';

export const TaskPage: FC = () => {
  const dispatch = useDispatch();
  const { folderId } = useParams<'folderId'>();
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    if (folderId) {
      dispatch(setCurrentFolder(folderId));
      dispatch(getTasks(folderId));
    }

    return () => {
      dispatch(setCurrentFolder(''));
    }
  }, [folderId]);

  return (
    <TaskPageUI
      isLoading={isLoading}
    />
  )
};

export default TaskPage;
