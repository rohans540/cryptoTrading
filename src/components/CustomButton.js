import React from "react";

const Button = ({ onClick, label, color }) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          background: color
        }}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
