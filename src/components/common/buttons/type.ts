import { MouseEventHandler } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "edit" | "cross" | "done";
  size?: "small" | "medium" | "large";
  extraClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
