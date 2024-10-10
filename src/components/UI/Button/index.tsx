import React from 'react'

interface IProps {
  // variant?: 'Primary' | 'Secondary';
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  id?: string
}

const Button = ({ children, onClick, ...props }: IProps) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
