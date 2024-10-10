interface IProp {
  type: string
  value: string
  name?: string
  placeholder?: string
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type,
  value,
  placeholder = 'Enter a text',
  disabled = false,
  onChange,
  name,
}: IProp) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      name={name}
    />
  )
}

export default Input
