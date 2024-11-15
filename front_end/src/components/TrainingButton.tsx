import React, { useState, forwardRef } from "react";

interface Props {
  children: string;
  correctAnswer: string;
  colour?: string;
  onCorrectAnswer?: () => void;
}

const TrainingButton = forwardRef<HTMLInputElement, Props>(
  ({ children, correctAnswer, colour = "primary", onCorrectAnswer }, ref) => {
    const [Colour, SetColour] = useState(colour);

    const HandleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        const inputValue = event.currentTarget.value;
        console.log("enter pressed");
        if (inputValue === correctAnswer) {
          SetColour("success");
          onCorrectAnswer?.();
        } else {
          SetColour("danger");
        }
      }
    };

    return (
      <button type="button" className={"btn btn-" + Colour}>
        <span className="h-3"> {children}</span>
        <br />
        <input ref={ref} onKeyDown={HandleKeyDown} type="text"></input>
      </button>
    );
  }
);

export default TrainingButton;
