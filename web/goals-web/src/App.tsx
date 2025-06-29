import { useState } from 'react'
import InputBox from "./components/InputBox"
import GoalList from "./components/GoalList"


function App() {

  const [goals, setGoals] = useState<{ id: number, text: string }[]>([])

  const addGoal = (text: string) => {
    setGoals([...goals, { id: Date.now(), text }])
  }

  const deleteGoal = (id: number) => {
    setGoals(goals.filter(g => g.id !== id))
  }

  return (
    <>
      <h1>Goals</h1>
      <InputBox onAdd={addGoal} />
      <GoalList goals={goals} onDelete={deleteGoal} />
    </>
  )
}

export default App
