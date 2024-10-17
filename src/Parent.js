import React, { useState } from "react";
import Child from "./Child";
import Button from "./Button";

const Parent = () => {
  let [input, setInput] = useState("");
  let [todo, setTodo] = useState([]);
  let message = "sending to child component";

  function handleClick() {
    alert("react class");
  }

  function handleDelete(index) {
    todo.splice(index, 1);
    setTodo([...todo]);
  }
  return (
    <>
      <Button click={handleClick} style="btn btn-success" name="read more" />
      <div>Parent Component</div>

      <Button style="btn btn-danger" name="Login" />
      <Button style="btn btn-secondary" name="ADE" price="30" />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          setTodo([...todo, input]);
        }}
      >
        Submit
      </button>

      <Child del={handleDelete} alltodo={todo} data={message} name="child" />
    </>
  );
};

export default Parent;
