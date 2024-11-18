"use client";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [expr, setExpr] = useState("");

  const handlebtnclk = (value) => {
    if (value === "=") {
      try {
        const evalRes = eval(expr).toString();
        setResult(evalRes);
        setExpr(evalRes);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C" || value === "AC") {
      setResult("");
      setExpr("");
    } else if (value === "+/-") {
      setResult(result * -1);
      setExpr(expr * -1);
    } else {
      setExpr((prevExpr) => prevExpr + value);
    }
  };

  const buttons = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "C", "0", ".", "=",
  ];

  return (
    <div className="flex min-h-screen flex-col items-center p-16">
      <h1 className="text-4xl underline font-bold mb-10">Calculator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full mb-2 text-3xl text-black border-b-2 border-black-300 focus:outline-none"
          value={expr}
          readOnly
        />
        <input
          type="text"
          className="w-full text-4xl text-black font-bold mb-4 focus-outline"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handlebtnclk(btn)}
              className="text-4xl text-black bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
