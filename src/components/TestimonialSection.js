// src/components/TestimonialSection.js
import React from 'react'
import '../styles/TestimonialSection.css'

const TestimonialSection = () => {
  return (
    <section className='testimonial-section'>
      <h2>What Our Guests Say</h2>
      <div className='testimonials'>
        <div className='testimonial'>
          <p>
            "A truly unforgettable experience! I got work done and had the time
            of my life." – John Doe
          </p>
        </div>
        <div className='testimonial'>
          <p>
            "The best of both worlds: work and leisure. Highly recommended!" –
            Jane Smith
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
