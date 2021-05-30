import React from "react";
import { NavLink } from "react-router-dom";
import "../Home/style.scss";

const Index = (props) => {
  return (
    <div className="button">
      <NavLink to="/object/employees">Employees Birthday Schedule</NavLink>
    </div>
  );
};

export default Index;
