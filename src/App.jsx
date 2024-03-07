import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Aditya")
  const handleClick=()=>{
    alert("Hey I am clicked")
  }

  const handleMouseover=()=>{
    alert("I am a mouseover")
  }
  const handleChange=(e)=>{
    setname(e.target.value)
  }
  return (
    <>
    <Form></Form>
      <div className='button'>
      <button onClick={handleClick}>Click Me</button>
      </div>
      <div className='red' onMouseOver={handleMouseover}>I am a red div</div>
     
      <input type='text' value={name} onChange={handleChange}></input>
    </>
  )
}

export default App
