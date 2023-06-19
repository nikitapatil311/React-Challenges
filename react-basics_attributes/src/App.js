import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Coffee Shop</h2>
      <label htmlFor="name">Enter Name</label>
      <input id="name" type="text"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Coffeehouse"
      >
        Coffeehouse
      </a>
    </article>
  );
}
