import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Page does not exist</h1>
      <Link to="/"> Go to home</Link>
    </>
  );
};

export default ErrorPage;
