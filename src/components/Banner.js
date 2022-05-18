import React from 'react'
import './Banner.css'
import Button from './Button'
import { AiOutlinePlayCircle } from 'react-icons/ai';

const Banner = () => {
  return (
    <div className='banner'>
      <video src='Travel-agency/videos/video-1.mp4' autoPlay loop muted></video>
      <div className='banner-content'>
        <h1>ADVENTURE AWAITS</h1>
        <h3>What are you waiting for?</h3>
        <div className='banner-btns'>
          <div className='left-btn'>
            <Button btnSize={'button-large'} isHovered={'no-hovered'}>GET STARTED</Button>
          </div>
          <div>
          <Button btnSize={'button-large'} isHovered={'hovered'}>WATCH TRAILER <AiOutlinePlayCircle style={{fontSize: '21px', marginLeft:'3px'}}/></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner