import '../styles.css'
import { useState } from 'react'

type FileData = {
  title: string
  content: string
}

type iProp = {
  tabData: FileData[]
}

export default function TabsComp({ tabData }: iProp) {
  const [activeTab, setActiveTab] = useState(0)
  function handleClick(ident: number) {
    setActiveTab(ident)
  }
  return (
    <div>
      <div id="headerContainer">
        {tabData.map((elem, id) => (
          <div className="headerElem" key={id}>
            <button onClick={() => handleClick(id)}>{elem.title}</button>
          </div>
        ))}
      </div>
      <div>
        {tabData.map((elem, id) => (
          <div
            style={
              activeTab === id ? { display: 'block' } : { display: 'none' }
            }
            key={id}
          >
            {elem.content}
          </div>
        ))}
      </div>
    </div>
  )
}
