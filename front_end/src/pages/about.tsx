import React from "react";
import Button from "../components/Button";

const printy = () => {
  console.log("button on about page clicked");
};
var about = () => {
  return (
    <div>
      <h1 className="text-tertiary text-center py-2 display-5 fw-bold">
        About
      </h1>
      <Button onClick={printy}>click me</Button>
    </div>
  );
};

export default about;
