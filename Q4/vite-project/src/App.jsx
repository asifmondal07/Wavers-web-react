import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const loggedin=true

 const data=loggedin ? "dasbord":"please Login"
  
  return (
    <>
      <div>
        <p>{data}</p>
      </div>
    </>
  )
}

export default App
