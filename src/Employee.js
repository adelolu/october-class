import React from "react";
import { Link, Outlet } from "react-router-dom";

const Employee = () => {
  return (
    <>
      <h1>Employees</h1>
      <h4>
        {" "}
        <Link to="/employee/tunde"> Tunde</Link>{" "}
      </h4>
      <h4>
        {" "}
        <Link to="/employee/sola"> Sola</Link>{" "}
      </h4>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Employee;
