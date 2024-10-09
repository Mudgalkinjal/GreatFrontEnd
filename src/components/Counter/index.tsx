import React, { useState, useEffect } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
`

const StyledButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
  &:active {
    background-color: #3e8e41;
  }
`

const StyledLabel = styled.label`
  font-size: 22px;
`

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const storedCount = localStorage.getItem('count')
    const countValue = storedCount ? Number(storedCount) : 0
    setCount(countValue)
  }, [])

  useEffect(() => {
    localStorage.setItem('count', count.toString())
  }, [count])

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCount(0)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = e.target as HTMLButtonElement
    if (target.id && target.id == 'count-up-button') {
      setCount((prevCount) => prevCount + 1)
    } else {
      if (count > 0) setCount((prevCount) => prevCount - 1)
    }
  }

  return (
    <CounterContainer>
      <StyledButton id="count-up-button" onClick={handleClick}>
        Count up{' '}
      </StyledButton>
      <StyledButton id="count-down-button" onClick={handleClick}>
        Count down{' '}
      </StyledButton>
      <StyledLabel>{count}</StyledLabel>
      <StyledButton onClick={handleReset}>Reset</StyledButton>
    </CounterContainer>
  )
}

export default Counter

