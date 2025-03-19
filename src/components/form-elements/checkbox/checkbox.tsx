import { FC } from "react";
import { CheckBoxUI } from "../../ui/form-elements";
import { CheckBoxProps } from "./type";

export const CheckBox: FC<CheckBoxProps> = ({ id, disabled, onChange }) => (
  <CheckBoxUI 
    id={id} 
    disabled={disabled}
    onChange={onChange}
  />
);
