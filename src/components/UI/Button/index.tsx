import React from 'react'

interface IProps {
  // variant?: 'Primary' | 'Secondary';
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  id?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, onClick, type, ...props }: IProps) => {
  return (
    <button onClick={onClick} {...props} type={type}>
      {children}
    </button>
  )
}

export default Button
