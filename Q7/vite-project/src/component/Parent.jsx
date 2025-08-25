import {useState} from 'react'
import Child from './Child'

function Parent() {
    const [count,setCount]=useState(0)

    
  return (
    <>
    <h1>Parent Count: {count}</h1>

    <Child value={count} onupdate={setCount}/>
    </>
  )
}

export default Parent
