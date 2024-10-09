import React from "react";

interface IProps {
  // variant?: 'Primary' | 'Secondary';
  children: React.ReactNode;
  onClick:(event:React.MouseEvent<HTMLButtonElement>)=>void;
}

const Button = ({ children, onClick }: IProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
