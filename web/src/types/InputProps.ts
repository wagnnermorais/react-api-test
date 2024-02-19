export interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  onChange?: () => void;
  value?: string | number;
}
