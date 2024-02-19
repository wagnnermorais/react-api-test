import { useState } from "react";
import { InputProps } from "../types/InputProps";

const Input = ({ type, name, placeholder, onChange, value }: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        placeholder={isFocused ? "" : placeholder}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        className="flex w-full p-4 outline-none duration-300 hover:bg-zinc-100 text-lg rounded placeholder-gray-700"
      />
      {placeholder && (
        <label
          htmlFor={name}
          className={`absolute left-4 transition-all duration-500 ${
            isFocused || value
              ? "-top-4 text-black text-lg font-bold"
              : "top-0 text-white"
          }`}
        >
          {placeholder}
        </label>
      )}
    </div>
  );
};

export default Input;
