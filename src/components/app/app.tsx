import { Routes, Route } from "react-router-dom";
import { FC } from "react";

import s from "./app.module.css";
import { Sidebar } from '../sidebar/sidebar';
import { TaskPage } from '../../pages/task-page';
import { FolderTasks } from '../folder-tasks/folder-tasks';
import { AllTasks } from '../all-tasks';

const App: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.sidebar}>
        <Sidebar />
      </div>

      <div className={s.content}>
        <Routes>
          <Route path="/" element={<TaskPage />}>
            <Route path=":folderId" element={<FolderTasks />} />
            <Route path="all" element={<AllTasks />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
