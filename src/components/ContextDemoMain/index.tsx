import { DemoContext } from './DemoContext'
import ContextGetter from '../ContextGetter'
import { useRef, useState, useEffect } from 'react'

export default function ContextDemoMain() {
  const [count, setCount] = useState(0)
  const dataRef = useRef(count)

  useEffect(() => {
    if (count > 10) {
      dataRef.current = count
    }
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
    console.log(count)
  }, [count])

  return (
    <DemoContext.Provider value={dataRef.current}>
      Context Demo Main
      <ContextGetter />
    </DemoContext.Provider>
  )
}
