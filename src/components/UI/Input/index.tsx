interface IProp {
  type: string
  value: string
  placeholder?: string
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type,
  value,
  placeholder = 'Enter a text',
  disabled = true,
  onChange,
}: IProp) => {
  ;<input
    type={type}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
  />
}

export default Input
