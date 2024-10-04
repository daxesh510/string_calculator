// File: src/component/StringCalculator.js
import React, { useState } from "react";
import * as add from "./add";
import "./stringCalculator.css"; // Import the CSS file

export function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">String Calculator</h1>
      <textArea
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value || "")}
        placeholder="Enter numbers"
        className="calculator-input"
        rows="4"
      />
      <button onClick={handleCalculate} className="calculator-button">
        Calculate
      </button>
      {result !== null && <div className="calculator-result">Result: {result}</div>}
    </div>
  );
}
