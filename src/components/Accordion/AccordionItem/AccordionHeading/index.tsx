type Props = {
  children?: React.ReactNode
  title: string
  onClick: () => void
}

const AccordionHeading: React.FC<Props> = ({ title, onClick }) => {
  return <div onClick={onClick}>{title}</div>
}

export default AccordionHeading
