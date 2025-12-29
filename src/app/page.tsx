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
      </div>

      <Testimonials />
      <Footer />
    </div>
  )
}
