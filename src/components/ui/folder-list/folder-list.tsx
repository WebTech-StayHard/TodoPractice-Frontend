import { FC } from "react";
import { FolderListUIProps } from "./type";
import { Loader } from "@components/common/loader/loader";

import s from "./folder-list.module.css";

export const FolderListUI: FC<FolderListUIProps> = ({
  isLoading,
  folderElements,
}) =>
  isLoading ? (
    <Loader />
  ) : (
    <section className={s.folderList}>
      {folderElements}
    </section>
  );
