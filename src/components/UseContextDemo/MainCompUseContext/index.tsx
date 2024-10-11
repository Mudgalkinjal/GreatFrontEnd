import { DataContext } from './DataContext'
import MainCompChild from '../MainCompChild'
import Accordion from '../../Accordion'

const MainCompUseContext = () => {
  const data = 'Here'
  console.log('MainCompUseContext data:', data)

  return (
    <DataContext.Provider value={data}>
      <MainCompChild />
      <Accordion />
    </DataContext.Provider>
  )
}
export default MainCompUseContext
