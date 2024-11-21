// src/components/FAQSection.js
import React, {useState} from 'react'
import '../styles/FAQSection.css'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan anytime.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel at any time.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, additional details can be added.',
    },
    {
      question: 'How does billing work?',
      answer: 'We offer monthly and annual billing options.',
    },
  ]

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='faq-section'>
      <h2>Frequently Asked Questions</h2>
      <div className='faq-items'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item'>
            <button className='faq-question' onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <p className='faq-answer'>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
