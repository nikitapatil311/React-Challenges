import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <button>Rose</button>
      <button>Sunflower</button>
      <button>Lilly</button>
      <button>Jasmine</button>
    </main>
  );
}

function Button(children) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
