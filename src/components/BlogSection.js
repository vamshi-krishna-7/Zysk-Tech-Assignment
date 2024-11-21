// src/components/BlogSection.js
import React from 'react'
import '../styles/BlogSection.css'

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      category: 'Design',
      title: 'UX review presentations',
      description:
        'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      image: '/images/path_to_image_1.png', // Replace with the actual image path
    },
    {
      id: 2,
      category: 'Product',
      title: 'Migrating to Linear 101',
      description:
        'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      image: '/images/path_to_image_2.png', // Replace with the actual image path
    },
    {
      id: 3,
      category: 'Software Engineering',
      title: 'Building your API stack',
      description:
        'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      image: '/images/path_to_image_3.png', // Replace with the actual image path
    },
  ]

  return (
    <section className='blog-section'>
      <h2>Our Blog</h2>
      <h1>Latest Blog Posts</h1>
      <p>
        Tools and strategies modern teams need to help their companies grow.
      </p>
      <div className='blog-cards'>
        {blogs.map(blog => (
          <div key={blog.id} className='blog-card'>
            <img src={blog.image} alt={blog.title} />
            <div className='blog-content'>
              <p className='blog-category'>{blog.category}</p>
              <h3>{blog.title}</h3>
              <p className='blog-description'>{blog.description}</p>
              <p className='blog-author'>
                {blog.author} - {blog.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
