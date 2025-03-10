import { FC, FormEvent, useState } from "react";
import { AddFolderFormUI } from "../ui/add-folder-form";
import { colors } from "../../utils/constants";

export const AddFolderForm: FC = () => {
  const initialState = {
    folderName: "",
    folderColor: colors[0],
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
  };

  const handleColorChange = (color: string) => {
    console.log(formData);
    setFormData((prev) => ({ ...prev, folderColor: color }));
  };

  return (
    <AddFolderFormUI
      formData={formData}
      options={colors}
      onColorChange={handleColorChange}
      handleSubmit={handleSubmit}
    />
  );
};
