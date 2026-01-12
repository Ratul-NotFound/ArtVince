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
  
  // Map service titles to image folders or use hero images as fallback
  const heroImages = ['char_1.jpg', 'char_2.jpg', 'char_3.jpg', 'char_4.jpeg', 'char_5.jpg']
  const imageMap: Record<string, string> = {
    '3D PRODUCT ANIMATION': `/images/hero/${heroImages[0]}`,
    '3D INDUSTRIAL DESIGN': `/images/hero/${heroImages[1]}`,
    'CHARACTER MODELING': `/images/hero/${heroImages[2]}`,
    'LOW-POLY GAME ASSETS': `/images/hero/gun_1.jpeg`,
    'GAME ENVIRONMENT DESIGN': `/images/hero/${heroImages[4]}`,
    'CONCEPT ART & MORE': `/images/hero/char_5.jpg`,
  }
  
  const imagePath = imageMap[title] || `/images/hero/char_1.jpg`

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // Apply reveal animation to all cards with staggered directions
    const directions = ['from-left', 'from-right', 'from-top', 'from-bottom', 'rotate', 'from-right']
    const direction = directions[index % directions.length]
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
        <div
          style={{
            width: '100%',
            height: '100%',
               background: `linear-gradient(135deg, rgba(10, 10, 21, 0.6) 0%, rgba(10, 10, 21, 0.3) 50%, rgba(204, 255, 0, 0.03) 100%), url('${imagePath}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            inset: 0,
          }}
        >
          <div className="service-badge">{index + 1}</div>
        </div>
        <div className="card-info">
          <div className="card-cat">{title}</div>
          <h3 className="card-title">{description}</h3>
          <div className="service-accent-line"></div>
        </div>
      </div>
    </motion.div>
  )
}
