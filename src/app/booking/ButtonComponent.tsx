import React from "react";

const ButtonComponent = ({ id, lantai, className, children, onClick }) => {
  return (
    <button
      id={id}
      className={className}
      onClick={() => onClick(id, lantai)}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
