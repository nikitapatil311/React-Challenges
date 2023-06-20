import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;
  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState("Active");

  function handleClick() {
    setIsActive(!isActive);
    setToggle(!toggle);
    // Check that the value changes correctly.
    console.log(isActive);
  }
  console.log("outside the function", isActive);

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{toggle ? "Active" : "Deactivate"}</button>
    </main>
  );
}
