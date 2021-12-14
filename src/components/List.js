import React from "react";

const List = ({ id, price, size, color }) => {
  return (
    <div
      key={id}
      style={{
        display: "flex",
        justifyContent: "spaceBetween",
        paddingLeft: "50px"
      }}
    >
      <div style={{ color: "white", marginLeft: "100px" }}>{size}</div>
      <div style={{ color: color, marginLeft: "100px" }}>{price}</div>
    </div>
  );
};

export default List;
