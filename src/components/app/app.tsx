/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import { FC, useEffect } from "react";

import s from "./app.module.css";
import { Sidebar } from '../sidebar/sidebar';
import { TaskPage } from '../../pages/task-page';
import { AllTasks } from '../all-tasks';
import { NotFound } from '../not-found';
import { FolderTasksContainer } from '../folder-tasks/folder-tasks-container';
import { useDispatch, useSelector } from '../../services/store/store';
import { getIsInitializedSelector } from '../../services/slices/appSlice';
import { initialize } from '../../services/thunks/appThunk';
import { AppPreloader } from '../app-preloader';

const App: FC = () => {
  const dispatch = useDispatch();
  const isInitialized = useSelector(getIsInitializedSelector);

  useEffect(() => {
    dispatch(initialize());
  }, [])

  if (!isInitialized) {
    return <AppPreloader />
  }

  return (
    <div className={s.wrapper}>
      <div className={s.sidebar}>
        <Sidebar />
      </div>

      <div className={s.content}>
        <Routes>
          <Route path="/" element={<TaskPage />}>
            <Route path=":folderId" element={<FolderTasksContainer />} />
            <Route path="all" element={<AllTasks />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
