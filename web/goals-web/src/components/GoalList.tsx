import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'

interface Goal {
  id: string
  text: string
}

interface GoalListProps {
  /**
   * Value that changes whenever a new goal is added so the list
   * knows when to refresh from Firestore.
   */
  refreshTrigger: number
}

const GoalList: React.FC<GoalListProps> = ({ refreshTrigger }) => {
  const [goals, setGoals] = useState<Goal[]>([])

  const fetchGoals = async () => {
    const colRef = collection(db, 'test')
    const snapshot = await getDocs(colRef)
    const fetched = snapshot.docs.map((d) => ({ id: d.id, text: d.data().input }))
    setGoals(fetched)
  }

  useEffect(() => {
    fetchGoals()
  }, [refreshTrigger])

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'test', id))
    fetchGoals()
  }

  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <li key={goal.id} className="goal-item">
          <input type="checkbox" />
          <span>{goal.text}</span>
          <button
            className="delete-btn"
            onClick={() => handleDelete(goal.id)}
            aria-label="delete goal"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  )
}

export default GoalList
