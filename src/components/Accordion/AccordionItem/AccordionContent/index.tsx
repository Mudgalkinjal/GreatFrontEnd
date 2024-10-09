type Props = {
  style?: React.CSSProperties
  content: string
  active: boolean
}

const AccordionContent: React.FC<Props> = ({ content, active }) => {
  return <div style={{ display: active ? 'block' : 'none' }}>{content}</div>
}

export default AccordionContent
