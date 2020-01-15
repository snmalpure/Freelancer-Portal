import React from "react";

function greet(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
}

export default greet;
