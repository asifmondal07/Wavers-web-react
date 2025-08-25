import {useState} from 'react'

function Counter() {
const [counter,setCounter]=useState(0)

const addvalue=()=>{
    setCounter(counter + 1)
}

const removeValue=()=>{
    setCounter(counter - 1)
}
  return (
    <>
    <div>
      <p>Counter : {counter}</p>
    </div>
    <div>
        <button onClick={addvalue}>increment </button>
    
        <button onClick={removeValue}>decrement</button>
    </div>
    </>
  )
}

export default Counter
