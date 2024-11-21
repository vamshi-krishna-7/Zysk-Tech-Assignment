import React from 'react'
import '../styles/FeaturesSection.css'

const FeaturesSection = () => {
  const features = [
    {
      icon: '/path/to/icon1.png', // Update with actual icon paths
      title: 'High-Speed Internet',
      description:
        'Stay connected with our reliable high-speed internet services.',
    },
    {
      icon: '/path/to/icon2.png',
      title: 'Scenic Workspaces',
      description:
        "Work amidst breathtaking views of Ladakh's serene landscapes.",
    },
    {
      icon: '/path/to/icon3.png',
      title: 'Comfortable Stays',
      description: 'Enjoy premium accommodations designed for your comfort.',
    },
  ]

  return (
    <section className='features-section'>
      <div className='features-container'>
        <h2 className='features-title'>Why Choose Us?</h2>
        <div className='features-grid'>
          {features.map((feature, index) => (
            <div className='feature-card' key={index}>
              <img
                src={feature.icon}
                alt={feature.title}
                className='feature-icon'
              />
              <h3 className='feature-title'>{feature.title}</h3>
              <p className='feature-description'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
