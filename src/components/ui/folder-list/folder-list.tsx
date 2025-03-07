import { FC } from "react";
import { FolderListUIProps } from "./type";
import { Loader } from "../../common/loader/loader";

import s from "./folder-list.module.css";

export const FolderListUI: FC<FolderListUIProps> = ({
  isLoading,
  folderElements,
}) => {
  return (
    isLoading ? 
    <Loader />
    : 
    (
      <section className={s.folderList}>
        {folderElements}
      </section>
    )
  );
};
