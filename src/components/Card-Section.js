import React from 'react'
import Card from './Card'
import './Card-Section.css'
import P1 from '../images/img-9.jpg'
import P2 from '../images/img-2.jpg'
import P3 from '../images/img-3.jpg'
import P4 from '../images/img-4.jpg'
import P5 from '../images/img-8.jpg'

const CardSection = () => {
  return (
    <div className='card-section'>
      <div className='card-wrapper'>
        <Card tag='Adventure' img={P1} content='Explore the hidden waterfall deep inside the Amazon Jungle' path='/trip' type='large'></Card>
        <Card tag='Luxury' img={P2} content='Travel through the Islands of Bali in a Private Cruise' path='/trip' type='large'></Card>
        <Card tag='Mystery' img={P3} content='Set Sail in the Atlantic Ocean visiting Uncharted Waters' path='/trip' type='small'></Card>
        <Card tag='Adventure' img={P4} content='Experience Football on Top of the Himilayan Mountains' path='/trip' type='small'></Card>
        <Card tag='Luxury' img={P5} content='Ride through the Sahara Desert in guided camel tour' path='/trip' type='small'></Card>
      </div>
    </div>
  )
}

export default CardSection