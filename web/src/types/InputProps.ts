export interface InputProps {
  title: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange?: () => void;
  value?: string | number;
}
