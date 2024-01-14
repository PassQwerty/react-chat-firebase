import React, { useContext } from "react";
import { Context } from "../context";
import Item from "./Item";

const tailwindStyles = {
  chatContainer:
    "bg-slate-50 bg-opacity-20 min-h-[45rem] p-4 rounded-lg min-h[45rem] flex flex-col gap-2 justify-end",
  chatContainerLoading:
    "bg-slate-50 bg-opacity-20 min-h-[45rem] p-4 rounded-lg min-h[45rem] flex justify-center items-center",
  loadingContainer: "",
  line: "bg-slate-50 bg-opacity-20 flex gap-2 p-2 rounded-lg",
};

const ItemList = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className={tailwindStyles.chatContainerLoading}>
          <span class="loader"></span>
      </div>
    );
  }

  if (data === null || data === undefined) {
    return (
      <div className={tailwindStyles.chatContainerLoading}>
        <p>load Error data!!</p>
      </div>
    );
  }

  return (
    <div className={tailwindStyles.chatContainer}>
      {data.map((item, index) => (
        <div key={index} className={tailwindStyles.line}>
          <Item key={index} name={item.data.name} text={item.data.text} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
