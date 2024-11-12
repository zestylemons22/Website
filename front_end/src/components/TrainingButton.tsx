import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
  correctAnswer: string;
  colour?: string;
}

var TrainingButton = ({
  children,
  correctAnswer,
  colour = "primary",
}: Props) => {
  const [Colour, SetColour] = useState(colour);
  const HandleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputValue = event.currentTarget.value;
      console.log("enter pressed");
      if (inputValue === correctAnswer) {
        SetColour("success");
      } else {
        SetColour("danger");
      }
    }
  };

  return (
    <button type="button" className={"btn btn-" + Colour}>
      {children}
      <br />
      <input onKeyDown={HandleKeyDown} type="text"></input>
    </button>
  );
};

export default TrainingButton;
