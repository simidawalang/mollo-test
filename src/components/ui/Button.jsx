import React from "react";

const Button = ({type, variant, className, onClick, content}) => {
  return (
    <button
      type={type}
      className={`${className} ${variant}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
