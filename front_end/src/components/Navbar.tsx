import React from "react";

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
          <a
            className="nav-item navbar-brand text-white active"
            aria-current="page"
            href="/"
          >
            <strong>Home</strong>
          </a>
          <a
            aria-current="page"
            className="nav-item navbar-brand text-white active"
            href="/about"
          >
            About
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
