'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface ServiceCardProps {
  title: string
  description: string
  index: number
}

export default function ServiceCard({ title, description, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Map service titles to image folders
  const imageMap: Record<string, string> = {
    '3D PRODUCT ANIMATION': '/images/services/3d-product-animation',
    '3D INDUSTRIAL DESIGN': '/images/services/3d-industrial-design',
    'CHARACTER MODELING': '/images/services/character-modeling',
    'LOW-POLY GAME ASSETS': '/images/services/game-assets',
    'GAME ENVIRONMENT DESIGN': '/images/services/game-environment',
    'CONCEPT ART & MORE': '/images/services/concept-art',
  }
  
  const imagePath = imageMap[title] || `/images/services/3d-product-animation`

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
    <div className="card hover-trigger" ref={cardRef} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="card-inner">
        <div className="card-border"></div>
        <div className="service-glow"></div>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `linear-gradient(135deg, rgba(10, 10, 21, 0.95) 0%, rgba(10, 10, 21, 0.8) 50%, rgba(204, 255, 0, 0.03) 100%), url('${imagePath}/preview.jpg')`,
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
    </div>
  )
}
