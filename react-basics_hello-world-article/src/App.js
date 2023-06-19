import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Menu</h1>
      <ul>
        <li>Coffee</li>
        <li>bread</li>
        <li>Tea</li>
        <li>Chicken</li>
        <li>Biscuits</li>
      </ul>
    </article>
  );
}
