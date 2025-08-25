import {useState} from 'react'

export default function useCounter(inialValue=0) {

    const [count,setCount]=useState(inialValue)
    
  console.log("Inside hook, count:", count); 

    const addValue=()=>setCount((val)=>val+1)
    const removeValue=()=>setCount((val)=>val-1)
    const reset=()=>{setCount(inialValue)}

      


  return {
   count,addValue,removeValue,reset
  }
}

