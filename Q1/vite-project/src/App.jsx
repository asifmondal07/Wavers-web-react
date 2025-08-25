import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './component/Welcome'
import './App.css'

function App() {
  const user={name:"Asif Mondal"};

  return (
    <>
      <Welcome name={user.name}/>
    </>
  )
}

export default App
