import { useContext } from 'react'
import { DataContext } from '../MainCompUseContext/DataContext'
const MainCompChild = () => {
  const data = useContext(DataContext)
  console.log('MainCompChild data:', data)

  return <div>{data}</div>
}
export default MainCompChild
