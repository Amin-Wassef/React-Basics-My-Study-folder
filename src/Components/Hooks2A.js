import { useState } from "react";

/**
 * Hooks also come with a set of rules, that you need to follow while using them. This applies to all React hooks:
 * You can only call hooks at the top level of your component or your own hooks.
 * You cannot call hooks inside loops or conditions.
 * You can only call hooks from React functions, and not regular JavaScript functions.
 */

export default function InputComponent() {
  const [inputText, setText] = useState("");

  //>>Array destructuring
  /*
    const useState = [inputText, setText];
    const [inputText, setText] = useState;
    inputText = useState[0];
    setText = useState[1];
  **/

  function handleChange(e) {
    setText(e.target.value);
  }

  //input is a keyword for React like <h1></h1>, which means make an input box but it has only an opening attribute
  //like <img> and it has its own attributes
  return (
    <>
      <input
        style={{ fontSize: 30 }}
        value={inputText}
        onChange={handleChange}
      />
      <p style={{ fontSize: 30 }}>You typed: {inputText}</p>
      <button
        style={{ fontSize: 25, background: "orange" }}
        onClick={() => setText("")}
      >
        Reset
      </button>
    </>
  );
}
