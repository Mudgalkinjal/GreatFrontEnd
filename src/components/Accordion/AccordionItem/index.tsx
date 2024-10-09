import AccordionHeading from './AccordionHeading'
import AccordionContent from './AccordionContent'

type Props = {
  title: string
  content: string
  active: boolean
  onToggle: () => void
}

const AccordionItem: React.FC<Props> = ({
  title,
  content,
  active,
  onToggle,
}) => {
  return (
    <div>
      <AccordionHeading onClick={onToggle} title={title} />
      <AccordionContent active={active} content={content} />
    </div>
  )
}

export default AccordionItem
