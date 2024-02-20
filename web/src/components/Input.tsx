import { InputProps } from "../types/InputProps";

const Input = ({
  title,
  type,
  name,
  placeholder,
  onChange,
  value,
}: InputProps) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="py-3 px-4 w-full peer rounded-md  text-sm text-gray-700 border-gray-200 border-2 focus:bg-white bg-white placeholder-shown:bg-gray-200 placeholder-shown:border-none placeholder-transparent"
        autoComplete="off"
      />
      <label
        htmlFor={name}
        className="absolute left-2 -top-2.5 px-1 text-sm transition-all bg-white rounded text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:bg-gray-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white"
      >
        {title}
      </label>
    </div>
  );
};

export default Input;
