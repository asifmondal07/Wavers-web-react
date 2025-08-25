import React from 'react'

function Child({value,onupdate}) {


  return (
    <div>
      <button
      onClick={()=>{onupdate(value + 1)}}
      >Add +</button>
    </div>
  )
}

export default Child
