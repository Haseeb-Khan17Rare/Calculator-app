// Calculator.js
import React, { useState } from "react";
import Keys from "./Keys";

const Calculator = () => {
  const keys = [
    "AC", "C", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    ".", "0", "="
  ];

  const [display, setDisplay] = useState("");

  const maxLimit = 15;

  const calculateResult = () => {
    try {
      if (display.trim() !== "") {
        const calcResult = Function(`'use strict'; return (${display})`)();
        setDisplay(String(parseFloat(calcResult.toFixed(3))));
      }
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleButton = (value) => {
    if (value === "AC") return setDisplay("");
    if (value === "C") return setDisplay(display.slice(0, -1));
    if (value === "=") return calculateResult();
    if (isOperator(value) && (display === "" || isOperator(display.slice(-1)))) return;
    if (display.length >= maxLimit) return alert(`Max ${maxLimit} characters allowed`);
    setDisplay(display + value);
  };

  const isOperator = (char) => ["+", "-", "*", "/", "%"].includes(char);

  return (
    <div className="w-full max-w-[400px] bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col gap-6 p-6 rounded-2xl shadow-2xl border border-gray-700">
      <div className="bg-gray-800 min-h-[100px] flex items-end justify-end p-6 rounded-md text-white text-3xl font-mono shadow-inner border border-gray-600">
        {display || "0"}
      </div>
      <div className="grid grid-cols-4 gap-3 w-full">
        {keys.map((key, index) => (
          <Keys key={index} label={key} onButtonClick={handleButton} isEqual={key === "="} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
