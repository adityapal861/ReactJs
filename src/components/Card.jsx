import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow:'hidden'}}>
    <img src="https://farm5.staticflickr.com/4809/46765507392_36cc29240e_o.jpg" alt='coding image' width={333} style={{border:"2px solid black"}}></img>
    <h1>{props.title}</h1>
    <p>{props.description}</p>

      
    </div>
  )
}

export default Card
