import { EditFolderTitleFormUI } from "@components/ui/forms/edit-folder-title-form";
import { useDispatch, useSelector } from "@store";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { EditFolderTitleFormProps } from "./type";
import { updateFolderTitleAsync } from '@thunks/foldersThunks';
import { getIsUpdatingFolderTitle } from '@slices/operationStatusSlice';

export const EditFolderTitleForm: FC<EditFolderTitleFormProps> = ({
  folder,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const isUpdating = useSelector(getIsUpdatingFolderTitle);
  const [folderTitle, setFolderTitle] = useState(folder.title);

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
      onSubmit();
    } catch (err) {
      console.log(err);
    }
  };

  const checkUpdatingInProgress = () => 
    isUpdating.some((folderid) => folderid === folder.id);

  const onFolderTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFolderTitle(evt.target.value);
  };

  return (
    <EditFolderTitleFormUI
      folderTitle={folderTitle}
      isUpdate={checkUpdatingInProgress()}
      onFolderTitleChange={onFolderTitleChange}
      handleSubmit={handleSubmit}
    />
  );
};
