import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({click}) => {

  const style = {
    opacity: `${click ? '1' : '0'}`,
    left: `${click ? '0' : '-100%'}`
  }

  return (
    <div className='sidebar' style={style}>
      <div className='nav-link-container'>
        <Link className='nav-link-mobile' to="Travel-agency/">Home</Link>
      </div>
      <div className='nav-link-container'>
        <Link className='nav-link-mobile' to="Travel-agency/services">Services</Link>
      </div>
      <div className='nav-link-container'>
        <Link className='nav-link-mobile' to="Travel-agency/products">Products</Link>
      </div>
      <div className='btn-container'>
        <Link to='Travel-agency/sign-up'>    
          <button className='mobile-button'>Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar