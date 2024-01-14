import React from "react";

const tailwindStyles = {
  wrapperInput: "w-full flex gap-1",
  input: " w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-600 focus:ring-2 text-slate-800 text-lg font-medium",
  button: " text-slate-100 bg-blue-600 bg-opacity-60 hover:bg-opacity-100 rounded px-2 text-lg font-medium",
};


const Input = () => {
  return (
    <div className={tailwindStyles.wrapperInput}>
      <input type="text" name="" id="" className={tailwindStyles.input} />
      <button className={tailwindStyles.button}>Отправить</button>
    </div>
  );
};

export default Input;
