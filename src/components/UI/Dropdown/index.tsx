interface IProps {
  options: string[]
  placeholder?: string
  onSelect: (value: string) => void
}

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
    <select onChange={handleChange}>
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((elem, id) => (
        <option key={id} value={elem}>
          {elem}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
