import React from "react";
import { useState } from "react";

interface Props {
  removal: () => void;
  index: number;
}

const Alert = ({ removal, index }: Props) => {
  const [show, setShow] = useState(true);
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below. This is alert number {index + 1}
      <button
        onClick={() => removal()}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
