import React from 'react'
import "./Card.css"
import styles from './Card.module.css'


function Card({title,body}) {

    const card={
        width: 320,
        padding: 16,
        borderRadius: 16,
        border: "1px solid #e5e7eb",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        background: "#fff",
        fontFamily: "system-ui, sans-serif",
    }
  return (
    <div>
      <div style={card}>
      <h3 className='card__title'>{title}</h3>
      <p className='card__text'>{body}</p>
      <button className={styles.button} >Action</button>
    </div>
    </div>
  )
}

export default Card
