'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Navigation, Footer } from '@/components'

export default function TeamPage() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.team-card')
    if (!cards) return

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          boxShadow: '0 30px 60px rgba(204, 255, 0, 0.15)',
          duration: 0.3,
          ease: 'power2.out',
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          duration: 0.3,
          ease: 'power2.out',
        })
      })
    })
  }, [])

  return (
    <div className="overflow-hidden">
      <Navigation />

      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>Meet Our Team</h1>
          <p>Partners in Creative Expression</p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="team-container">
          <div className="section-header">
            <h2 className="section-title">Meet the Artists</h2>
            <p className="section-subtitle">Get to Know Our Professionals</p>
          </div>

          <p className="team-intro">
            Our creative team is made up of 3D modelers, animators, graphic designers, and concept artists with years
            of industry experience.
          </p>

          <div className="team-grid" ref={cardsRef}>
            <div className="team-card hover-trigger">
              <div className="team-image">
                <img src="https://via.placeholder.com/300x300/1a1a1a/91ff6a?text=Tanvir" alt="Tanvir Rokon" />
              </div>
              <div className="team-info">
                <h3>Tanvir Rokon</h3>
                <p className="team-role">Founder & MD</p>
                <p className="team-bio">3D Design Visionary & Creative Lead</p>
              </div>
            </div>

            <div className="team-card hover-trigger">
              <div className="team-image">
                <img src="https://via.placeholder.com/300x300/1a1a1a/91ff6a?text=Imtiaz" alt="Imtiaz Ahamed" />
              </div>
              <div className="team-info">
                <h3>Imtiaz Ahamed</h3>
                <p className="team-role">CEO</p>
                <p className="team-bio">Strategic Director & Project Manager</p>
              </div>
            </div>

            <div className="team-card hover-trigger">
              <div className="team-image">
                <img src="https://via.placeholder.com/300x300/1a1a1a/91ff6a?text=Mithila" alt="S A Mithila" />
              </div>
              <div className="team-info">
                <h3>S A Mithila</h3>
                <p className="team-role">Promotion Team Lead</p>
                <p className="team-bio">Marketing & Brand Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <div className="culture-container">
          <h2>Our Culture</h2>
          <p>
            Our creative team is made up of 3D modelers, animators, graphic designers, and concept artists 
            united by a passion for bringing ideas to life. We collaborate with indie studios, agencies, 
            and brands to make unforgettable visuals.
          </p>
          <div className="culture-highlights">
            <div className="highlight">
              <h3>Collaborative</h3>
              <p>We work closely with our clients and each other</p>
            </div>
            <div className="highlight">
              <h3>Innovative</h3>
              <p>Always exploring new techniques and tools</p>
            </div>
            <div className="highlight">
              <h3>Professional</h3>
              <p>Industry standards and quality-first approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="careers-section">
        <div className="careers-container">
          <h2>Join Our Team</h2>
          <p>Are you passionate about 3D design, animation, or creative arts? We're always looking for talented individuals to join our growing studio.</p>
          <button className="careers-btn">View Open Positions</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
