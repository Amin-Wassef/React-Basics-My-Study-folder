import React, { useState } from "react";

function Hook() {
  const [word, setWord] = React.useState("Eat"); //>>Array destructuring

  function MouseHandle() {
    setWord("Drink");
  }

  return (
    <div>
      <h1>{word} at little lemon.</h1>
      <button
        style={{
          backgroundColor: "purple",
          fontSize: "40px",
          color: "white",
        }}
        onClick={MouseHandle}
        onMouseOver={() => setWord("Eat")}
      >
        Come Click Me
      </button>
    </div>
  );
}

export default Hook;
