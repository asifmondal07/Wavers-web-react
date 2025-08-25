import React,{useState} from 'react'

function Input() {
    const [input,setInput]=useState({
      text:""
    })

    const handelData=(e)=>{
      setInput({
        ...input,[e.target.name]:e.target.value
      }
      )
    }
  return (
    <div className='w-50 bg-gray-100 flex items-center justify-center p-6-amber-400 h-full'>
        
      <input 
      type="text" 
      className='flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
      name="text" 
      placeholder='Text Here' 
      value={input.text}
      onChange={handelData}
      />
    </div>
  )
}

export default Input
