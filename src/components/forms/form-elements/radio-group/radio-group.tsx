import { FC } from "react";
import { RadioGroupProps } from "./type";
import { RadioGroupUI } from "@ui/forms/form-elements";

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { title, name, selected, options, onChange } = props;

  return (
    <RadioGroupUI
      title={title}
      name={name}
      selected={selected}
      options={options}
      onChange={onChange}
    />
  );
};
