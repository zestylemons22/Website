import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-black text-white border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-item navbar-brand text-white active"
                  : "nav-item navbar-brand text-white"
              }
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-item navbar-brand text-white active"
                  : "nav-item navbar-brand text-white"
              }
              aria-current="page"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
