import { ChangeEvent } from "react";
export interface InputProps {
  title: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}
