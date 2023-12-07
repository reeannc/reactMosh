import React from "react";

//adding interface makes button dynamic
interface Props {
  children: string;
  //children prop is used to pass text like html buttons
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
  //makes button reusable
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

//ONE STEP AT A TIME
