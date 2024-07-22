import Label from "./Label";
import Input from "./Input";
import { Children, forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder, children } = props;
  return (
    <div className="mb-6">
      <div className="flex flex-row">
        <div className="w-1/2 flex flex-row justify-start">
          <Label htmlFor={name}>{label}</Label>
        </div>
        <div className="w-1/2 flex flex-row justify-end">
        {children}</div>
      </div>
      <Input name={name} placeholder={placeholder} ref={ref} type={type} />
    </div>
  );
});

export default InputForm;
