import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function decreaseCount() {
    setCount(Math.max(0, count - 1));
  }
  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={decreaseCount}>
          -
        </button>
        <button type="button" onClick={increaseCount}>
          +
        </button>
      </div>
    </div>
  );
}
