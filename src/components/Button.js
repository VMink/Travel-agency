import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({btnSize, children, isHovered}) => {
  return (
    <Link to='/sign-up' className='button-link' style={{ textDecoration: 'none' }}> 
      <button className={`button ${btnSize} ${isHovered}`}>
        {children}
      </button>
    </Link>
  )
}

export default Button