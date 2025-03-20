// Keys.js
import React from "react";

const Keys = ({ label, onButtonClick, isEqual }) => {
  return (
    <button
      className={`p-5 rounded-lg text-white font-semibold text-xl transition duration-200 transform hover:scale-105 active:scale-95 shadow-md 
      ${isEqual ? "col-span-2 bg-green-500 hover:bg-green-400 shadow-lg" : "bg-gray-700 hover:bg-gray-600 shadow-lg"}`}
      onClick={() => onButtonClick(label)}
    >
      {label}
    </button>
  );
};

export default Keys;
