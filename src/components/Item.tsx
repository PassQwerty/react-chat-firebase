import React from "react";

const Item = ({index, item}) => {
  return (
    <div key={index} className="line">
      <div className="avatar">{item.data.name}</div>
      <div className="text">{item.data.text}</div>
    </div>
  );
};

export default Item;
