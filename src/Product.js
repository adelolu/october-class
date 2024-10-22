import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let params = useParams();
  console.log(params);

  return (
    <>
      <h1>Product Page</h1>
      <h2>{params.var} </h2>
    </>
  );
};

export default Product;
