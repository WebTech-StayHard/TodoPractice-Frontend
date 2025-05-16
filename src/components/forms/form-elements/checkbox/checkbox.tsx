import { FC } from "react";
import { CheckBoxUI } from "@ui/forms/form-elements";
import { CheckBoxProps } from "./type";

export const CheckBox: FC<CheckBoxProps> = ({ id, checked, disabled, onChange }) => (
  <CheckBoxUI 
    id={id} 
    checked={checked}
    disabled={disabled}
    onChange={onChange}
  />
);
