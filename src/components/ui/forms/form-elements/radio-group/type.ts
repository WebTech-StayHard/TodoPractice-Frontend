export type RadioGroupUIProps = {
  title?: string;
  name: string;
  selected: string;
  options: string[];
  onChange: (value: string) => void;
};
