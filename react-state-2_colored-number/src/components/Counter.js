import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [counting, setCounting] = useState(0);

  function increament() {
    //console.log("increament");
    setCounting(counting + 1);
    // console.log("setcount", counting + 1);
  }

  function decrement() {
    counting >= 0 && setCounting(counting - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counting + 1} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={increament}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
