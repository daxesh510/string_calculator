import React, { useState } from "react";
import add from "./add"; // Ensure this matches your export in add.js
import "./stringCalculator.css";

export function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [showGuidelines, setShowGuidelines] = useState(false);

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
      <div
        className="calculator-hint"
        onMouseEnter={() => setShowGuidelines(true)}
        onMouseLeave={() => setShowGuidelines(false)}
      >
        <span className="info-icon">ℹ️</span>
        {showGuidelines && (
          <div className="guidelines-popup">
            <p>
              <strong>How to Enter Input:</strong>
            </p>
            <ul>
              <li>
                <strong>Comma-separated:</strong> <code>1,2,3</code>
              </li>
              <li>
                <strong>New lines:</strong> <code>1\n2,3</code>
              </li>
              <li>
                <strong>Custom delimiter:</strong> <code>//;\n1;2</code>
              </li>
              <li>
                <strong>Multiple delimiters:</strong> <code>//[***]\n1***2***3</code>
              </li>
              <li>
                <strong>Varying length delimiters:</strong> <code>//[*][%]\n1*2%3</code>
              </li>
              <li>
                <strong>Special characters:</strong> <code>//[***][%%%]\n1***2%%%3</code>
              </li>
            </ul>
            <p>
              <em>Note: Negative numbers will result in an error.</em>
            </p>
          </div>
        )}
      </div>
      <textarea
        value={input}
        onFocus={() => setShowGuidelines(true)}
        onBlur={() => setShowGuidelines(false)}
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
