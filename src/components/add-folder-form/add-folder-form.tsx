import { FC, FormEvent, useState } from "react";
import { AddFolderFormUI } from "../ui/add-folder-form";
import { colors } from "../../utils/constants";
import { addFolder } from "../../services/thunks/foldersThunks";
import { useDispatch, useSelector } from "../../services/store/store";
import { useNavigate } from "react-router-dom";
import { getIsAddingFolder } from '../../services/slices/foldersSlice';

export const AddFolderForm: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAddingFolder = useSelector(getIsAddingFolder);
  const [folderName, setFolderName] = useState('');
  const [folderColor, setFolderColor] = useState(colors[0]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (!folderName && !folderColor) return;

    dispatch(addFolder({ folderName, folderColor, navigate }));
    setFolderName('');
  };

  return (
    <AddFolderFormUI
      isAddingFolder={isAddingFolder}
      folderColor={folderColor}
      options={colors}
      folderName={folderName}
      setFolderColor={setFolderColor}
      setFolderName={setFolderName}
      handleSubmit={handleSubmit}
    />
  );
};
