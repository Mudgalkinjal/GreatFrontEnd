import { useContext } from 'react'
import { DemoContext } from '../ContextDemoMain/DemoContext'

export default function ContextGetter() {
  function handleClick() {}
  const data = useContext(DemoContext)
  console.log(data)

  return <button onClick={handleClick}>{data}</button>
}
