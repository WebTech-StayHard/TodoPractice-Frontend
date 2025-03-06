/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import s from "./task-page.module.css";
import { useDispatch, useSelector } from "../../store/store";
import { getIsLoadingSelector, getTasks } from "../../store/slices/tasks/tasks";
import Loader from '../../components/common/loader/loader';
import { Outlet, useParams } from 'react-router-dom';
import { setCurrentFolder } from '../../store/slices/folders/folders';

const TaskPage: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingSelector);
  const { folderId } = useParams<'folderId'>();

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
    <section className={s.taskPage}>
      {
        isLoading ? 
        <div className={s.taskPage__loader}>
          <Loader /> 
        </div>
        :
        <Outlet />
      }
    </section>
  );
};

export default TaskPage;
