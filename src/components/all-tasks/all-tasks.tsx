/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from "react";
import { AllTasksUI } from "../ui/all-tasks";
import { useSelector } from "../../services/store/store";
import {
  getFoldersSelector,
  getIsLoadingSelector,
} from "../../services/slices/foldersSlice";
import { Loader } from "../common/loader";
import { FolderTasks } from "../folder-tasks/folder-tasks";

export const AllTasks: FC = () => {
  const folders = useSelector(getFoldersSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  const elements = folders.map((folder) => (
    <FolderTasks key={folder.id} folder={folder} />
  ));

  return isLoading ? <Loader /> : <AllTasksUI elements={elements} />;
};
