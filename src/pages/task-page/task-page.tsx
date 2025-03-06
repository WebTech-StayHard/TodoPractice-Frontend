/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import s from "./task-page.module.css";
import { useDispatch, useSelector } from "../../store/store";
import { getIsLoadingSelector, getTasks } from "../../store/slices/tasks";
import Loader from '../../components/common/loader/loader';
import { Outlet, useParams } from 'react-router-dom';

const TaskPage: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingSelector);
  const { folderId } = useParams<'folderId'>();

  useEffect(() => {
    if (folderId) {
      dispatch(getTasks(folderId));
    }
  }, [folderId]);

  return (
    <section className={s.taskPage}>
      {
        isLoading ? 
        <Loader /> :
        <Outlet />
      }
    </section>
  );
};

export default TaskPage;
