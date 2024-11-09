import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
  style?: React.CSSProperties;
}

const Button = ({ children, onClick, color = "primary", style }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
