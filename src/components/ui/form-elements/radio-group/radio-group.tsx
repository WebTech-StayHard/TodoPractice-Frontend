import { FC } from "react";
import { RadioGroupUIProps } from "./type";
import s from "./radio-group.module.css";
import { OptionColor } from "../../../form-elements/option-color";

export const RadioGroupUI: FC<RadioGroupUIProps> = (props) => {
  const { title, name, selected, options, onChange } = props;

  const colorElements = options.map((color, index) => (
    <OptionColor
      key={index}
      radioId={`${name}_radio_item_with_value__${color}`}
      name={name}
      color={color}
      selected={selected}
      onChange={onChange}
    />
  ));

  return (
    <div>
      <h3 className={s.title}>
        {title}
      </h3>
      <div className={s.radioGroup}>
        {colorElements}
      </div>
    </div>
  );
};
