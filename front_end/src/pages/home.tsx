import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

var home = () => {
  return (
    <>
      <h1 className="text-tertiary text-center py-2 display-1 fw-bold">
        Welcome!
      </h1>
      <Link to="/Hiragana" className="btn btn-primary">
        Hiragana trainer
      </Link>
    </>
  );
};

export default home;
