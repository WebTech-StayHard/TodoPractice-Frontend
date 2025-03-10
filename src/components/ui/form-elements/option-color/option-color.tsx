import { FC } from "react";

import { OptionColorUIProps } from "./type";
import s from './option-color.module.css';

export const OptionColorUI: FC<OptionColorUIProps> = (props) => {
  const { radioId, name, color, checked, onChange } = props;
  return (
    <div className={s.option}>
      <input
        id={radioId}
        type="radio"
        name={name}
        value={color}
        checked={checked}
        className={s.radioColor}
        onChange={onChange}
      />
      <label htmlFor={radioId} style={{ backgroundColor: color }} />
    </div>
  );
};
