// src/components/HeroHeader.js
import React from 'react'
import '../styles/HeroHeader.css'

const HeroHeader = () => {
  return (
    <header className='hero-header'>
      <div className='hero-content'>
        <h1>Your Perfect Workation Awaits</h1>
        <p>
          Work amidst breathtaking landscapes and incredible amenities in
          Ladakh.
        </p>
        <div className='cta-buttons'>
          <button className='btn-primary'>Book Now</button>
          <button className='btn-secondary'>Learn More</button>
        </div>
      </div>
    </header>
  )
}

export default HeroHeader
