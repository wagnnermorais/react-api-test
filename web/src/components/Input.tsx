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
        className="py-3 px-4 w-full peer rounded text-base text-gray-700 border-2 border-black border-opacity-35 focus:bg-white bg-white placeholder-transparent outline-none"
        autoComplete="off"
      />
      <label
        htmlFor={name}
        className="absolute left-4 -top-3 px-2 text-base duration-200 bg-white rounded text-gray-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:bg-white"
      >
        {title}
      </label>
    </div>
  );
};

export default Input;
