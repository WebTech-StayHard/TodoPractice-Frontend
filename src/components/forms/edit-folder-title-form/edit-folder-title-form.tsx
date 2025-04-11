import { EditFolderTitleFormUI } from "@ui/forms/edit-folder-title-form";
import { useDispatch, useSelector } from "@store";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { EditFolderTitleFormProps } from "./type";
import { updateFolderTitleAsync } from '@thunks/foldersThunks';
import { getIsUpdatingFolderTitle } from '@slices/operationStatusSlice';
import { checkInProgress } from '@utils/helpers/arrayHelper';
import { addToast } from '@slices/toastsSlice';

export const EditFolderTitleForm: FC<EditFolderTitleFormProps> = ({
  folder,
  onUpdateComplete,
}) => {
  const dispatch = useDispatch();
  const isUpdating = useSelector(getIsUpdatingFolderTitle);
  const [folderTitle, setFolderTitle] = useState(folder.title);
  const isError = folderTitle === folder.title;

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    if (!folder.id) return;

    try {
      await dispatch(
        updateFolderTitleAsync({
          folder,
          data: folderTitle,
        })
      );
      onUpdateComplete();
    } catch (err) {
      dispatch(addToast({
        message: 'При обновлении заголовка папки произошла ошибка!',
        type: 'error',
        duration: 3000,
      }));
    }
  };

  const onFolderTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFolderTitle(evt.target.value);
  };

  return (
    <EditFolderTitleFormUI
      folderTitle={folderTitle}
      isUpdate={checkInProgress(isUpdating, folder.id)}
      isError={isError}
      onFolderTitleChange={onFolderTitleChange}
      handleSubmit={handleSubmit}
    />
  );
};
