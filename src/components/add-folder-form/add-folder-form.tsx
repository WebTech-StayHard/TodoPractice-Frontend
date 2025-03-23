import { FC, FormEvent, useState } from "react";
import { AddFolderFormUI } from "../ui/add-folder-form";
import { colors } from "../../utils/constants";

import { useDispatch, useSelector } from "../../services/store/store";
import { useNavigate } from "react-router-dom";
import { addFolderAsync } from "../../services/thunks/foldersThunks";
import { getIsAddingFolder } from '../../services/slices/operationStatusSlice';

export const AddFolderForm: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAddingFolder = useSelector(getIsAddingFolder);
  const [folderName, setFolderName] = useState("");
  const [folderColor, setFolderColor] = useState(colors[0]);

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    if (!folderName && !folderColor) return;

    try {
      const folderId = await dispatch(
        addFolderAsync({ folderName, folderColor })
      ).unwrap();
      setFolderName("");
      navigate("/folders/" + folderId);
    } catch (err) {
      console.error(err);
    }
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
