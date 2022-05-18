import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import Button from './Button';


const Navbar = ({handleClick, click}) => {
  

  return (
    <nav className='navbar'>
      <div className='left'>
        <Link className='nav-link' to="Travel-agency/">TRVL <i className='fab fa-typo3' /></Link>
      </div>
      <div className='right'>
        <ul>
          <li>
            <Link className='nav-link' to="Travel-agency/">Home</Link>
          </li>
          <li>
            <Link className='nav-link' to="Travel-agency/services">Services</Link>
          </li>
          <li>
            <Link className='nav-link' to="Travel-agency/products">Products</Link>
          </li>
        </ul>
        <Button btnSize={'button-medium'} btnContent={'Sign Up'} isHovered={'no-hovered'}>SIGN IN</Button>
      </div>
      <div className='mobile-btn' onClick={handleClick}>
        <i className={ click ? 'fas fa-times' : 'fas fa-bars'}/>
      </div>
    </nav>
  )
}

export default Navbar