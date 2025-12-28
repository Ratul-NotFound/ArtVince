'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { Navigation, Hero, Marquee, ServiceCard, Testimonials, Footer } from '@/components'

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

  const services = [
    {
      title: '3D PRODUCT ANIMATION',
      description: 'High-quality 3D Product Animation that brings your ideas and products to life with stunning visuals',
    },
    {
      title: '3D INDUSTRIAL DESIGN',
      description: 'Professional 3D Industrial Design services that transform concepts into functional and manufacturable designs',
    },
    {
      title: 'CHARACTER MODELING',
      description: 'Photorealistic character modeling and development for games, films, and interactive media',
    },
    {
      title: 'LOW-POLY GAME ASSETS',
      description: 'Professional game-ready 3D assets optimized for performance and visual impact',
    },
    {
      title: 'GAME ENVIRONMENT DESIGN',
      description: 'Immersive world-building and environmental asset creation for interactive experiences',
    },
    {
      title: 'CONCEPT ART & MORE',
      description: 'Custom creative solutions including motion graphics, brand design, and concept art',
    },
  ]

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
          {services.map((service, i) => (
            <ServiceCard key={i} title={service.title} description={service.description} index={i} />
          ))}
        </div>
      </div>

      <Testimonials />
      <Footer />
    </div>
  )
}
