import React from 'react'
import Styled from 'styled-components'

const StyledButton = Styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:active {
    background-color: #003f7f;
  }

  &[disabled] {
    background-color: grey;
    cursor: not-allowed;
  }
`
interface IProps {
  // variant?: 'Primary' | 'Secondary';
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  id?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, onClick, type, ...props }: IProps) => {
  return (
    <StyledButton onClick={onClick} {...props} type={type}>
      {children}
    </StyledButton>
  )
}

export default Button
