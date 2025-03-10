import { FC } from "react";

import s from './checkbox.module.css';
import clsx from 'clsx';
import { CheckBoxUIProps } from './type';

export const CheckBoxUI: FC<CheckBoxUIProps> = ({ id, disabled }) => (
  <div className={clsx(s.checkbox, { [s.disabled]: disabled })}>
    <input
      id={id}
      type="checkbox"
      name="task"
      disabled={disabled}
      className={s.customCheckbox}
    />
    <label htmlFor={id}>
      <span className={s.customCheckboxIcon}></span>
    </label>
  </div>
);
