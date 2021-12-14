import React from "react";

const Button = ({ onClick, label, color }) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          background: color,
          height: "30px",
          width: "150px",
          borderRadius: "2px",
          color: "#fff"
        }}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
