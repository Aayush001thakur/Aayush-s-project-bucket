import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>My React Project = {count}</h1>
      <button onClick={() =>{ count <setCount(   count < 20 ? count + 1 : count )}}>Update Me</button>
      <button onClick={() =>{setCount(count > 0 ? count - 1: count)}}>Remove Me</button>
    </>
  )
}

export default App
