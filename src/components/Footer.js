import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-sec1'>
        <h2>Join the Adventure newsletter to receive our best vacation deals</h2>
        <p>You can unsubscribe at any time</p>
        <div className='newsletter'>
          <input type='email' maxLength='50' placeholder='Your Email'/>
          <Button btnSize={window.innerWidth < 950 ? 'button-large' : 'button-medium'} isHovered={'no-hovered'}>Subscribe</Button>
        </div>
      </div>
      <div className='footer-sec2'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <div className='footer-sec3'>
        <div className='sec3-left'>
          <Link to="/">TRVL <i className='fab fa-typo3' /></Link>
        </div>
        <div className='sec3-mid'>
          <p>TRVL © 2022</p>
        </div>
        <div className='sec3-right'>
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>
    </div>
  )
}

export default Footer