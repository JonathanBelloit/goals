import React, { useState } from 'react'
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'

const InputBox = () => {
  const [input, setInput] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const colRef = collection(db, 'test')
    await addDoc(colRef, { input })
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
