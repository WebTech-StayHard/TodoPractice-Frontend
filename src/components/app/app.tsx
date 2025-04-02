/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import { FC, useEffect } from "react";

import s from "./app.module.css";
import { Sidebar } from '@components/sidebar';
import { AllTasks } from '@components/all-tasks';
import { NotFound } from '@components/not-found';
import { FolderTasksContainer } from '@components/folder-tasks/folder-tasks-container';
import { useDispatch, useSelector } from '@store';
import { getIsInitializedSelector } from '@slices/appSlice';
import { initialize } from '@thunks/appThunk';
import { AppPreloader } from '@components/app-preloader';

import { HomePage } from '@pages/home-page';
import { TaskPage } from '@pages/task-page';

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
          <Route path="/" element={<HomePage />} />
          <Route path="/folders" element={<TaskPage />}>
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
