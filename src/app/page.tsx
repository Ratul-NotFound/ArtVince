'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { Navigation, Hero, Marquee, ServiceCard, Testimonials, Footer } from '@/components'
import { servicesData } from '@/lib/DataFactory'

export default function Home() {
  useEffect(() => {
    // Only initialize page-specific animations
    const timer = setTimeout(() => {
      initializeCardAnimations()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Team cards hover animations (match team page behavior)
  useEffect(() => {
    const teamCards = document.querySelectorAll('.team-card')
    if (!teamCards) return

    const handleEnter = (card: Element) => {
      gsap.to(card, {
        y: -15,
        boxShadow: '0 30px 60px rgba(204, 255, 0, 0.15)',
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleLeave = (card: Element) => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    teamCards.forEach((c) => {
      const el = c as HTMLElement
      const enter = () => handleEnter(c)
      const leave = () => handleLeave(c)
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
      // store handlers on element for cleanup
      ;(el as any).__enter = enter
      ;(el as any).__leave = leave
    })

    return () => {
      teamCards.forEach((c) => {
        const el = c as HTMLElement
        if ((el as any).__enter) el.removeEventListener('mouseenter', (el as any).__enter)
        if ((el as any).__leave) el.removeEventListener('mouseleave', (el as any).__leave)
      })
    }
  }, [])

  const initializeCardAnimations = () => {
    // Card Reveal on Scroll
    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
      const observer = new IntersectionObserver(
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

    // Card Click Selection
    cards.forEach((card) => {
      const cardElement = card as HTMLElement
      cardElement.addEventListener('click', () => {
        cards.forEach((c) => (c as HTMLElement).classList.remove('selected'))
        cardElement.classList.add('selected')

        const cardInner = cardElement.querySelector('.card-inner') as HTMLElement
        const cardImg = cardElement.querySelector('.card-img') as HTMLElement

        if (cardInner && cardImg) {
          gsap
            .timeline()
            .to(
              cardInner,
              {
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out',
              },
              0
            )
            .to(
              cardImg,
              {
                filter: 'brightness(1.3) saturate(1.4)',
                duration: 0.3,
              },
              0
            )
            .to(
              cardElement,
              {
                boxShadow: '0 0 50px rgba(204,255,0,0.5), inset 0 0 50px rgba(204,255,0,0.2)',
                duration: 0.3,
              },
              0
            )
        }
      })

      cardElement.addEventListener('touchstart', () => {
        cardElement.style.transform = 'scale(0.98)'
      })

      cardElement.addEventListener('touchend', () => {
        cardElement.style.transform = ''
      })
    })
  }

  return (
    <div className="overflow-hidden">
      <Navigation />
      <Hero />
      <Marquee />

      <div id="services">
        <div className="section-header">
          <h2 className="sec-title">OUR SERVICES</h2>
          <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--dim)', textAlign: 'right' }}>
            [ SERVICE LINEUP ]
            <br />
            ENTERPRISE SOLUTIONS
          </p>
        </div>

        <div className="grid">
          {servicesData.map((service, i) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} index={i} />
          ))}
        </div>

        {/* Meet Our Team section (homepage) */}
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

            <div className="team-grid">
              <div className="team-card hover-trigger">
                <div className="team-image">
                  <img src="/images/team/Tanvir Rokon.jpg" alt="Tanvir Rokon" />
                </div>
                <div className="team-info">
                  <h3>Tanvir Rokon</h3>
                  <p className="team-role">Founder & MD</p>
                  <p className="team-bio">3D Design Visionary & Creative Lead</p>
                </div>
              </div>

              <div className="team-card hover-trigger">
                <div className="team-image">
                  <img src="/images/team/Imtiaz-ahmed.jpg" alt="Imtiaz Ahamed" />
                </div>
                <div className="team-info">
                  <h3>Imtiaz Ahamed</h3>
                  <p className="team-role">CEO</p>
                  <p className="team-bio">Strategic Director & Project Manager</p>
                </div>
              </div>

              <div className="team-card hover-trigger">
                <div className="team-image">
                  <img src="/images/team/samithila.jpg" alt="S A Mithila" />
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
      </div>

      <Testimonials />
      <Footer />
    </div>
  )
}
