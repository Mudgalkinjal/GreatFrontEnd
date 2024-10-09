import AccordionItem from './AccordionItem'
import ObjectAcc from './index.json'
import { useState } from 'react'

const Accordion = () => {
  const [acc, setAcc] = useState(ObjectAcc)
  const handleToggle = (ind: number) => {
    setAcc((prevAcc) =>
      prevAcc.map((elem) => {
        return {
          ...elem,
          active: elem.id === ind ? !elem.active : elem.active,
        }
      })
    )
  }
  return (
    <div>
      {acc.map((elem, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          key={index}
          active={elem.active}
          title={elem.header}
          content={elem.content}
        />
      ))}
    </div>
  )
}

export default Accordion
