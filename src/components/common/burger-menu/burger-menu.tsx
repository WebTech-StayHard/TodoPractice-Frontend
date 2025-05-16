import { FC } from "react";
import { BurgerMenuProps } from "./type";
import { BurgerMenuUI } from "@ui/common/burger-menu";

export const BurgerMenu: FC<BurgerMenuProps> = (props) => (
  <BurgerMenuUI {...props} />
);
