'use client'


import { useEffect } from 'react'
import gsap from 'gsap'
import { Navigation, ServiceCard, Footer } from '@/components'
import { servicesData } from '@/lib/DataFactory'


export default function ServicesPage() {
  useEffect(() => {
    // Card Reveal on Scroll
    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                card.classList.add('revealed')
              }, 100)
              observer.unobserve(card)
            }
          })
        },
        { threshold: 0.1 }
      )
      observer.observe(card)
    })
  }, [])

  return (
    <div className="overflow-hidden">
      <Navigation />

      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>Our Services</h1>
          <p>Custom Solutions for All Your Creative Needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-full-section">
        <div className="services-container">
          <div className="section-intro">
            <h2>What We Offer</h2>
            <p>
              From detailed character models to sleek visual graphics, we bring visions to life. 
              Our expertise spans multiple creative disciplines using industry-leading tools.
            </p>
          </div>

          <div className="grid">
            {servicesData.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Concept & Planning</h3>
              <p>We understand your vision and plan the creative approach</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Design & Development</h3>
              <p>Creating detailed designs with industry-standard tools</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Refinement & Iteration</h3>
              <p>Polish and perfect based on feedback</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Delivery & Support</h3>
              <p>Final delivery with ongoing support and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="tools-container">
          <h2>Tools & Technologies</h2>
          <p>We leverage cutting-edge software and technologies to deliver exceptional results</p>
          <div className="tools-grid">
            <div className="tool-item">Blender</div>
            <div className="tool-item">Maya</div>
            <div className="tool-item">ZBrush</div>
            <div className="tool-item">Substance Painter</div>
            <div className="tool-item">Unreal Engine</div>
            <div className="tool-item">Unity</div>
            <div className="tool-item">Adobe Suite</div>
            <div className="tool-item">Cinema 4D</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
