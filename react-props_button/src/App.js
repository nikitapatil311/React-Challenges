import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="blue" disable="true" text="I am a Button" />;
}

function Button(color, disabled, text) {
  return (
    <button disabled style={{ color: white, background: color }}>
      <h1>{text}</h1>
    </button>
  );
}
