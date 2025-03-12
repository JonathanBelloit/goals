import React, { useState } from 'react'
import { db } from '../config/firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query } from 'firebase/firestore';

const InputBox = () => {
  console.log('test')
  const [ input, setInput ] = useState('');
  console.log(`the input is ${input}`)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log(`this is the submission: ${input}`)
    const colRef = collection(db, 'test')
    await addDoc(colRef, { input: input });
  }    
  
  return (
    <>
      <input type="text" value={input} id="testInput" name="testInput" placeholder="enter text here" onChange={(e) => setInput(e.target.value)}/>
      <button type='submit' onClick={handleSubmit}>Send</button>
    </>
  )
}

export default InputBox