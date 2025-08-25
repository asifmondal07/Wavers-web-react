import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpensiveComponent from './component/ExpensiveComponent'
import Parent from './component/Parent'
import MemoizedChild from './component/Child'

function App() {
  const [count, setCount] = useState(0)
  const items = ["apple", "banana", "orange", "grape",];

  return (
    <>
      <div>
        <h1>useMemo & useCallback Demo</h1>
        <ExpensiveComponent items={items}/>
        <Parent/>
        

      </div>
    </>
  )
}

export default App
