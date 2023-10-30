import React, { useState } from "react";

export default function StatelessWithHooks(props) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  function addOne() {
    setCount(count + 1);
  }

  function subtractOne() {
    setCount(count - 1);
  }

  function toggleColor() {
    setColor((prevState) => {
      return prevState === "red" ? "blue" : "red";
    });
  }

  return (
    <>
      <h1>Hello {props.name}</h1>
      <h2>You clicked {count} times</h2>
      <button onClick={addOne}>Add 1</button>
      <button onClick={subtractOne}>Subtract 1</button>
      <h2>The color is {color}</h2>
      <button onClick={toggleColor}>Toggle Color</button>
    </>
  );
}
