'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface ServiceCardProps {
  title: string
  description: string
  index: number
}

export default function ServiceCard({ title, description, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Animation directions
  const directions = ['from-left', 'from-right', 'from-top', 'from-bottom', 'from-left', 'from-right']
  const direction = directions[index % directions.length]

  // Map service title to image path
  const imageMap: Record<string, string> = {
    '3D PRODUCT ANIMATION': '/images/hero/char_1.jpg',
    '3D INDUSTRIAL DESIGN': '/images/hero/char_2.jpg',
    'CHARACTER MODELING': '/images/hero/char_3.jpg',
    'LOW-POLY GAME ASSETS': '/images/hero/gun_1.jpeg',
    'GAME ENVIRONMENT DESIGN': '/images/hero/char_5.jpg',
    'CONCEPT ART & MORE': '/images/hero/char_4.jpeg',
  }
  const imagePath = imageMap[title] || '/images/hero/char_1.jpg'

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    card.classList.add('card-fast-reveal', direction)

    // 3D Tilt Effect on MouseMove with gaming vibe
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const xPct = x / rect.width - 0.5
      const yPct = y / rect.height - 0.5

      const cardInner = card.querySelector('.card-inner') as HTMLElement
      if (cardInner) {
        gsap.to(cardInner, {
          rotationY: xPct * 12,
          rotationX: -yPct * 12,
          duration: 0.5,
        })
      }
    }

    const handleMouseLeave = () => {
      const cardInner = card.querySelector('.card-inner') as HTMLElement
      if (cardInner) {
        gsap.to(cardInner, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
        })
      }
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [index])

  return (
    <motion.div
      className="card futuristic-card hover-trigger"
      ref={cardRef}
      style={{ animationDelay: `${index * 0.1}s` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.1, type: 'spring' }}
    >
      <div className="card-inner">
        <div className="card-border"></div>
        <div className="service-glow"></div>
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: '#111d2b' }}>
          <img
            src={imagePath}
            alt={title}
            className="card-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            draggable={false}
            loading="lazy"
            onError={e => {
              (e.currentTarget as HTMLImageElement).style.opacity = '0';
              // Debug: log missing image path
              // eslint-disable-next-line no-console
              console.warn('ServiceCard image failed to load:', imagePath);
            }}
          />
        </div>
        <div className="service-badge">{index + 1}</div>
        <div className="card-info">
          <div className="card-cat">{title}</div>
          <h3 className="card-title">{description}</h3>
          <div className="service-accent-line"></div>
        </div>
      </div>
    </motion.div>
  )
}
