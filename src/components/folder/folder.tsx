import { FC } from "react";
import { FolderProps } from "./type";
import { FolderUI } from "@ui/folder";
import { checkInProgress } from "@utils/helpers/arrayHelper";
import { useDispatch } from "@store";
import { useNavigate } from "react-router-dom";
import { removeFolderAsync } from "@thunks/foldersThunks";
import { addToast } from "@slices/toastsSlice";

export const Folder: FC<FolderProps> = ({ folder, isActive, isRemoving }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, color } = folder;

  const removeFolder = async (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    evt.preventDefault();

    try {
      await dispatch(removeFolderAsync(id));
      navigate("/");
    } catch (err) {
      dispatch(
        addToast({
          message: "При удалении папки произошла ошибка!",
          type: "error",
          duration: 3000,
        })
      );
    }
  };

  return (
    <FolderUI
      title={title}
      color={color}
      isActive={isActive}
      disabled={checkInProgress(isRemoving, id)}
      onClick={removeFolder}
    />
  );
};
