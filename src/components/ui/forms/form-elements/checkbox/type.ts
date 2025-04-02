import { ChangeEvent } from 'react';

export type CheckBoxUIProps = {
  id: string;
  disabled?: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}