import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ( props ) => {
  return (
    <div className={`card ${props.type}`}>
      <Link to={props.path}className='card-link'>
      <div className='card-top'>
        <img src={props.img} alt='Travel Beach Agency'/>
        <div className='card-tag'>
          {props.tag}
        </div>
      </div>
      <div className='card-bottom'>
        <p>{props.content}</p>
      </div>
      </Link>
    </div>
  )
}

export default Card