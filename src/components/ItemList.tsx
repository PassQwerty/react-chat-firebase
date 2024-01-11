import React, { useContext } from "react";
import { Context } from "../context";
import Item from "./Item";

const ItemList = ({data}) => {

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  if (data === null || data === undefined) {
    return <p>load Error data!!</p>;
  }

  return (
    <div className="chatContainer">
      {data.map((item, index) => (
        <Item index={index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
