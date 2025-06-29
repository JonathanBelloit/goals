import React from 'react'

interface Goal {
  id: number
  text: string
}

interface GoalListProps {
  goals: Goal[]
  onDelete: (id: number) => void
}

const GoalList: React.FC<GoalListProps> = ({ goals, onDelete }) => {
  return (
    <ul className="goal-list">
      {goals.map(goal => (
        <li key={goal.id} className="goal-item">
          <input type="checkbox" />
          <span>{goal.text}</span>
          <button
            className="delete-btn"
            onClick={() => onDelete(goal.id)}
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
