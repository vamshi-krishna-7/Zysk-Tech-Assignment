import React from 'react'
import HeroHeader from './components/HeroHeader'
import FeaturesSection from './components/FeaturesSection'
import TestimonialSection from './components/TestimonialSection'
import FAQSection from './components/FAQSection'
import BlogSection from './components/BlogSection'
import './styles/HeroHeader.css'
import './styles/FeaturesSection.css'
import './styles/TestimonialSection.css'
import './styles/FAQSection.css'
import './styles/BlogSection.css'

function App() {
  return (
    <div>
      <HeroHeader />
      <FeaturesSection />
      <TestimonialSection />
      <FAQSection />
      <BlogSection />
    </div>
  )
}

export default App
