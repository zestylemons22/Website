import { ReactNode } from "react";

function gimmeMoney() {
  console.log("gimme all your money");
}

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
  style?: React.CSSProperties;
}

const Button = ({ children, onClick, color = "primary", style }: Props) => {
  let onClickHelper = () => {
    gimmeMoney();
    onClick();
  };
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={onClickHelper}
        style={style}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
