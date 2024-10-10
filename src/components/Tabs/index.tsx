import TabsComp from './TabsComp' // Path to your Tabs component
import { tabData } from './data' // Ensure this path is correct

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <TabsComp tabData={tabData} />
    </div>
  )
}

export default App
