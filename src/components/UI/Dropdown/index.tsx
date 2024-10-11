import Styled from 'styled-components'

interface IProps {
  options: string[]
  placeholder?: string
  onSelect: (value: string) => void
}

const StyledSelect = Styled.select`
    width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  color: #333;
  cursor: pointer;
  appearance: none; /* Removes default arrow */

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #a9a9a9;
    cursor: not-allowed;
  }
`

const StyledOption = Styled.option`
  padding: 10px;
`

const Dropdown = ({
  options = [],
  placeholder = 'Select a option',
  onSelect,
}: IProps) => {
  if (!Array.isArray(options)) {
    throw new Error('Please add array')
  }
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value)
  }
  return (
    <StyledSelect onChange={handleChange}>
      <StyledOption value="" disabled selected>
        {placeholder}
      </StyledOption>
      {options.map((elem, id) => (
        <StyledOption key={id} value={elem}>
          {elem}
        </StyledOption>
      ))}
    </StyledSelect>
  )
}

export default Dropdown
