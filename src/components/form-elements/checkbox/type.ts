import { ChangeEvent } from 'react';

export type CheckBoxProps = {
  id: string;
  disabled?: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}