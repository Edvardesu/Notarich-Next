import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="w-full p-3 mt-2 border border-gray-300 rounded-md"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
