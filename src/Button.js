import React from "react";

const Button = (props) => {
  console.log(props);
  // let props.name = "ade"

  return (
    <>
      <button onClick={props.click} className={props.style}>
        {props.name}
      </button>
      <div>name:{props.name}</div>
      <div> price:{props.price}</div>
    </>
  );
};

export default Button;
