import React from "react";

const tailwindStyles = {
  span: "text-slate-800 text-lg font-medium",
  left: "ml-auto",
  right: "mr-auto flex-row-reverse",
  name: "",
  text: "",
};

const Item = ({ name, text }) => {
  return (
    <>
      <span className={`${tailwindStyles.span} ${tailwindStyles.name}`}>
        {name}
      </span>
      <span className={`${tailwindStyles.span} ${tailwindStyles.text}`}>
        {text}
      </span>
    </>
  );
};

export default Item;
