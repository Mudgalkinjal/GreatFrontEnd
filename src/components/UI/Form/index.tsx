interface IProp {
  action: string
  method: string
  children: React.ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<IProp> = ({ action, method, children, onSubmit }) => {
  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
export default Form
