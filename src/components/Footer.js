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
            <Link to='Travel-agency/'>Testimonials</Link>
            <Link to='Travel-agency/'>Careers</Link>
            <Link to='Travel-agency/'>Investors</Link>
            <Link to='Travel-agency/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='Travel-agency/'>Contact</Link>
            <Link to='Travel-agency/'>Support</Link>
            <Link to='Travel-agency/'>Destinations</Link>
            <Link to='Travel-agency/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='Travel-agency/'>Submit Video</Link>
            <Link to='Travel-agency/'>Ambassadors</Link>
            <Link to='Travel-agency/'>Agency</Link>
            <Link to='Travel-agency/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='Travel-agency/'>Instagram</Link>
            <Link to='Travel-agency/'>Facebook</Link>
            <Link to='Travel-agency/'>Youtube</Link>
            <Link to='Travel-agency/'>Twitter</Link>
          </div>
        </div>
      </div>
      <div className='footer-sec3'>
        <div className='sec3-left'>
          <Link to="Travel-agency/">TRVL <i className='fab fa-typo3' /></Link>
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