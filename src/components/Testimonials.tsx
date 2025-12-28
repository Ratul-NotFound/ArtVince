'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      text: 'Artvince transformed our game assets with stunning 3D models. Their attention to detail and quick turnaround time exceeded expectations.',
      author: 'Studios Director',
      company: 'Game Studio',
      rating: 5,
    },
    {
      text: 'The character animations were phenomenal. Every frame captured our brand essence perfectly. Highly recommend!',
      author: 'Creative Lead',
      company: 'Animation Agency',
      rating: 5,
    },
    {
      text: 'Working with Artvince was a game-changer for our product visualization. Professional, creative, and results-driven.',
      author: 'Product Manager',
      company: 'Tech Company',
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0.8,
        duration: 0.3,
        ease: 'power2.out',
      })

      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.1,
      })
    }
  }, [currentIndex])

  const current = testimonials[currentIndex]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">Real Stories, Real Results</p>
        </div>

        <p className="testimonials-intro">
          See why studios, creators, and businesses choose Artvince for design that stands out.
        </p>

        <div className="testimonials-content" ref={containerRef}>
          <div className="testimonial-card">
            <div className="stars">
              {Array(current.rating)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
            </div>
            <p className="testimonial-text">"{current.text}"</p>
            <div className="testimonial-author">
              <h4>{current.author}</h4>
              <p>{current.company}</p>
            </div>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
