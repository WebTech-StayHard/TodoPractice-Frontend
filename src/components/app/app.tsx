/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { AllTasks } from "@components/all-tasks";
import { AppPreloader } from "@components/app-preloader";
import { FolderTasksContainer } from "@components/folder-tasks/folder-tasks-container";
import { NotFound } from "@components/not-found";
import { Sidebar } from "@components/sidebar";
import { getIsInitializedSelector } from "@slices/appSlice";
import { useDispatch, useSelector } from "@store";
import { initialize } from "@thunks/appThunk";
import s from "./app.module.css";

import { ToastList } from "@components/common/toast-list";
import { HomePage } from "@pages/home-page";
import { TaskPage } from "@pages/task-page";

const App: FC = () => {
  const dispatch = useDispatch();
  const isInitialized = useSelector(getIsInitializedSelector);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  if (!isInitialized) {
    return <AppPreloader />;
  }

  return (
    <div className={s.wrapper}>
      <Sidebar />
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
      <ToastList />
    </div>
  );
};

export default App;
