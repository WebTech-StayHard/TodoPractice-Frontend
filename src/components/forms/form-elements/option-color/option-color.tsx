import { FC } from "react";

import { OptionColorProps } from "./type";
import { OptionColorUI } from "@ui/forms/form-elements";

export const OptionColor: FC<OptionColorProps> = (props) => {
  const { radioId, name, color, selected, onChange } = props;

	const handleChange = () => onChange(color);

  return (
    <OptionColorUI
      radioId={radioId}
      name={name}
      color={color}
      checked={selected === color}
      onChange={handleChange}
    />
  );
};
