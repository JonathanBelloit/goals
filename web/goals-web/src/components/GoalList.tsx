import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, onSnapshot } from 'firebase/firestore'

interface Goal {
  id: string
  input: string
}

const GoalList = () => {
  const [goals, setGoals] = useState<Goal[]>([])

  useEffect(() => {
    const colRef = collection(db, 'test')

    const unsubscribe = onSnapshot(colRef, snapshot => {
      const list = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as { input: string })
      }))
      setGoals(list)
    })

    return () => unsubscribe()
  }, [])

  return (
    <ul>
      {goals.map(goal => (
        <li key={goal.id}>
          <input type="checkbox" id={`goal-${goal.id}`} />
          <label htmlFor={`goal-${goal.id}`}>{goal.input}</label>
        </li>
      ))}
    </ul>
  )
}

export default GoalList
