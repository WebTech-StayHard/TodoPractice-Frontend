import { FC } from "react";

import { Tab, TabContainer } from "@components/common/tab";
import { FolderMark } from "@components/folder-mark";
import { Button } from "@components/common/buttons";

import { FolderUIProps } from "./type";

export const FolderUI: FC<FolderUIProps> = ({
  title,
  color,
  isActive,
  disabled,
  onClick,
}) => (
  <TabContainer isActive={isActive}>
    <Tab text={title}>
      <FolderMark color={color} />
    </Tab>
    <Button variant="cross" size="small" disabled={disabled} onClick={onClick} />
  </TabContainer>
);
