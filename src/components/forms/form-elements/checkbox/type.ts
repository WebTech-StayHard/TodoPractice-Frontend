import { ChangeEvent } from 'react';

export type CheckBoxProps = {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}