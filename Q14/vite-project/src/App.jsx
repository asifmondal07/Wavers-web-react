import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/Todo'
import Input from './component/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Todo/>
    
    </>
  )
}

export default App
