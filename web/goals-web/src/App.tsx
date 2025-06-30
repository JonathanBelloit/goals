
import { useState } from 'react'
import InputBox from "./components/InputBox"
import GoalList from "./components/GoalList"


function App() {

  const [refreshFlag, setRefreshFlag] = useState(0)

  /**
   * Increment refresh flag so the goal list can reload from Firestore.
   */
  const triggerRefresh = () => {
    setRefreshFlag((f) => f + 1)
  }

  return (
    <>
      <h1>Goals</h1>
      <InputBox onAdd={triggerRefresh} />
      <GoalList refreshTrigger={refreshFlag} />
    </>
  )
}

export default App
