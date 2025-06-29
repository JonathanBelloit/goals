import React, { useState } from 'react'
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'

interface InputBoxProps {
  /**
   * Callback triggered after a goal is successfully added.
   * The parent can use this to refresh data from Firestore.
   */
  onAdd: () => void
}

const InputBox = ({ onAdd }: InputBoxProps) => {
  const [input, setInput] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const colRef = collection(db, 'test')
    await addDoc(colRef, { input })
    onAdd()
    setInput('')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        id="testInput"
        name="testInput"
        placeholder="enter text here"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default InputBox
