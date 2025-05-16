import { FC } from "react";

import { ButtonUI } from "@ui/common/buttons";
import { ButtonProps } from "./type";

export const Button: FC<ButtonProps> = (props) => <ButtonUI {...props} />;
