import React from "react";

//adding interface makes button dynamic
interface Props {
  children: string;
  //children prop is used to pass text like html buttons
}

const Button = ({ children }: Props) => {
  return <button className="btn btn-primary">{children}</button>;
};

export default Button;

//ONE STEP AT A TIME
