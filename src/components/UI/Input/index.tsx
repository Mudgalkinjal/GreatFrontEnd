interface IProp {
  id?: string
  type: string
  value?: string | number
  name?: string
  placeholder?: string
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  style?: React.CSSProperties
}

const Input = ({
  type,
  value,
  placeholder = 'Enter a text',
  disabled = false,
  onChange,
  name,
  style,
}: IProp) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      name={name}
      style={style}
    />
  )
}

export default Input
