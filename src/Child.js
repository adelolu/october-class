import React from "react";

const Child = ({ alltodo, data, name, del }) => {
  //   let { alltodo, data, name } = props;
  //   console.log("props", props);

  return (
    <>
      <h1>Child Component</h1>
      <div>{data}</div>
      <div>
        {alltodo.map((elememt, index) => (
          <div key={index}>
            {elememt}
            <button
              onClick={() => {
                del(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Child;
