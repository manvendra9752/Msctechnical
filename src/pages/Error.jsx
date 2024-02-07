import React from "react";
import { NavLink } from "react-router-dom";
import { Home } from "./Home";

const Error = () => {
  return (
    <div>
      <div className="error-content">
        <div className="err">404</div>
        <div>
          <h3>SORRY! PAGE NOT FOUND</h3>
        </div>
        <div className="oop">
          Oops!! seems like the page you're trying to access doesn't exist. if
          you
          <br />
          believe ther's on issue, feel free to report it, and we'll look ASAP.
        </div>
        <div className="links">
          <div className="link1">
            <NavLink to="/">RETURN HOME</NavLink>
          </div>
          <div className="link2">
            <NavLink to="/contact">REPORT PROBLEM</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
