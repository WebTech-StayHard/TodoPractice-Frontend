import { FC } from "react";
import { SeparatorProps } from "./type";
import { SeparatorUI } from '../../ui/common/separator';

export const Separator: FC<SeparatorProps> = ({ className = "" }) => {
  return <SeparatorUI className={className} />;
};
