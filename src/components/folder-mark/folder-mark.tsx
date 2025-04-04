import { FC } from "react";
import { FolderMarkUI } from "@ui/folder-mark";
import { FolderMarkProps } from "./type";

export const FolderMark: FC<FolderMarkProps> = ({ color }) => (
  <FolderMarkUI color={color} />
);
