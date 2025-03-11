import { FC } from "react";
import { TaskPageUI } from "../../components/ui/pages";
import { getFoldersSelector } from "../../services/slices/foldersSlice";
import { useSelector } from "../../services/store/store";

export const TaskPage: FC = () => {
  const folders = useSelector(getFoldersSelector);
  return <TaskPageUI isEmpty={!folders.length} />;
};
