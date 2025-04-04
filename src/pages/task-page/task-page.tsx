import { FC } from "react";
import { TaskPageUI } from "@ui/pages";
import { getFoldersSelector } from "@slices/foldersSlice";
import { useSelector } from "@store";

export const TaskPage: FC = () => {
  const folders = useSelector(getFoldersSelector);
  return <TaskPageUI isEmpty={!folders.length} />;
};
