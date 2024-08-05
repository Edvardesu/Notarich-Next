import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, labelForm, placeholder, name, children } = props;
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/2">
          <label className="text-[#666666]">
            <p>{labelForm}</p>
          </label>
        </div>
        <div className="w-1/2 justify-end text-end">{children}</div>
      </div>
      <input
        type={type}
        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
      />
    </>
  );
});

export default Input;
