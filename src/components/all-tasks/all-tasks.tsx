/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from "react";
import { AllTasksUI } from "@ui/all-tasks";
import { useSelector } from "@store";
import {
  getFoldersSelector,
  getIsLoadingSelector,
} from "@slices/foldersSlice";
import { Loader } from "@components/common/loader";
import { FolderTasks } from "@components/folder-tasks";

export const AllTasks: FC = () => {
  const folders = useSelector(getFoldersSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  const elements = folders.map((folder) => (
    <FolderTasks key={folder.id} folder={folder} />
  ));

  return isLoading ? <Loader /> : <AllTasksUI elements={elements} />;
};
