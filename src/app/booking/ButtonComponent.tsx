import React from "react";

interface ButtonComponentProps {
  id: string;
  lantai: number;
  className: string;
  children: React.ReactNode;
  onClick: (id: string, lantai: number) => void;
}

const ButtonComponent = ({
  id,
  lantai,
  className,
  children,
  onClick,
}: ButtonComponentProps) => {
  return (
    <button id={id} className={className} onClick={() => onClick(id, lantai)}>
      {children}
    </button>
  );
};

export default ButtonComponent;
