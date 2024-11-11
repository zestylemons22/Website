import React from "react";
import Button from "../components/Button";

const printy = () => {
  console.log("button on about page clicked");
};
var about = () => {
  return (
    <div>
      <Button onClick={printy}>click me</Button>
    </div>
  );
};

export default about;
