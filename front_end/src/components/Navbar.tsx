import React from "react";
import { Link } from "react-router-dom";

var HomeLoaded = () => {
  console.log("home loaded");
};

var Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary text-white border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <ul className="navbar-nav">
          <Link
            className="nav-item navbar-brand text-white active"
            aria-current="page"
            to="/"
          >
            <strong>Home</strong>
          </Link>
          <Link
            aria-current="page"
            className="nav-item navbar-brand text-white active"
            to="/about"
          >
            About
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
