import React, { useState } from "react";

function UseStateExample() {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState("");
  const [theme, setTheme] = useState("");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setDirection("↓");
    setTheme("blue");
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setDirection("↑");
    setTheme("red");
  }

  return (
    <>
      <button className="decButton" onClick={decrementCount}>
        -
      </button>
      <span>{count}</span>
      <span style={{ color: theme}}>{direction}</span>
      <button className="incButton" onClick={incrementCount}>
        +
      </button>
      <hr></hr>
    </>
  );
}

export default UseStateExample;


