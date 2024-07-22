import React from "react";

const ButtonComponent = ({ id, className, children, onClick }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
