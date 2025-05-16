import { FC } from "react";
import { TitleProps } from "./type";
import { TitleUI } from "@ui/common/title";

export const Title: FC<TitleProps> = (props) => <TitleUI {...props} />;
