import React from "react";
import ReactLogo from "../react-logo";

function Headder(props) {
  //recieve data from App.js so this is the CHILD

  //For styling the CSS in React you first make a js normal object then add it in {} after style attribute
  const headderStyle = {
    background: "khaki",
    color: "grey",
  };
  return (
    <div style={headderStyle}>
      <p>
        <ReactLogo />
      </p>
      <h1>I am the Headder here</h1>
      <h2>{props.name}</h2>
      <h3>{props.identity}</h3>
    </div>
  );
}

export default Headder;
