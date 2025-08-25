import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const books = [
    { id: 1, title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", year: 1999 },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", year: 2008 },
    { id: 3, title: "You Don’t Know JS", author: "Kyle Simpson", year: 2015 },
    { id: 4, title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 },
    { id: 5, title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 }
  ];


  return (
  <>

     <div>BOOK LIST</div>
     {books.map((book)=>(
       <div key={book.id}>
        <h2>{book.title}</h2>
       </div>
     ))
     }
  </>
  )
}

export default App
