'use client'

import { useState, useEffect, useRef } from 'react'
import { createCarouselController, CarouselController } from '@/lib/CarouselController'
import { createAnimationController, AnimationController } from '@/lib/AnimationController'
import { testimonialsData } from '@/lib/DataFactory'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<CarouselController | null>(null)
  const animControllerRef = useRef<AnimationController | null>(null)

  // Initialize carousel controller
  useEffect(() => {
    animControllerRef.current = createAnimationController()
    carouselRef.current = createCarouselController({
      totalItems: testimonialsData.length,
      autoplay: true,
      autoplayDuration: 6000,
    })

    carouselRef.current.onIndexChangeCallback((newIndex) => {
      setCurrentIndex(newIndex)
    })

    return () => {
      carouselRef.current?.destroy()
      animControllerRef.current?.killAll()
    }
  }, [])

  // Animate container on index change
  useEffect(() => {
    if (containerRef.current && animControllerRef.current) {
      animControllerRef.current.fadeOut(containerRef.current, { duration: 0.15 })
      animControllerRef.current.fadeIn(containerRef.current, { duration: 0.3, delay: 0.1 })
    }
  }, [currentIndex])

  const current = testimonialsData[currentIndex]

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
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => carouselRef.current?.goToIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
