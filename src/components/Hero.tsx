'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalCards = 7
  const indexRef = useRef(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false)

  // Update card positions with enhanced 3D perspective
  const updateCardPositions = (index: number) => {
    if (!cardsRef.current) return

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const cards = cardsRef.current.querySelectorAll('.portfolio-card') as NodeListOf<HTMLElement>
    
    cards.forEach((card, i) => {
      let distance = (i - index + totalCards) % totalCards
      if (distance > totalCards / 2) {
        distance = distance - totalCards
      }

      let x = 0
      let y = 0
      let opacity = 0
      let scale = 0.7
      let zIndex = 0
      let rotateY = 0
      let filter = 'brightness(0.5) blur(6px)'

      if (isMobile) {
        // Mobile layout - simpler positioning
        if (distance === 0) {
          x = 0
          y = 0
          opacity = 1
          scale = 1
          zIndex = 50
          rotateY = 0
          filter = 'brightness(1) blur(0px) drop-shadow(0 15px 30px rgba(204, 255, 0, 0.1))'
        } else if (distance === 1) {
          x = 200
          y = 0
          opacity = 0.5
          scale = 0.85
          zIndex = 40
          rotateY = -15
          filter = 'brightness(0.6) blur(2px)'
        } else if (distance === -1) {
          x = -200
          y = 0
          opacity = 0.5
          scale = 0.85
          zIndex = 40
          rotateY = 15
          filter = 'brightness(0.6) blur(2px)'
        } else {
          opacity = 0
          zIndex = 10
        }
      } else {
        // Desktop layout
        if (distance === 0) {
          // Center card - in focus
          x = 0
          y = 0
          opacity = 1
          scale = 1
          zIndex = 50
          rotateY = 0
          filter = 'brightness(1) blur(0px) drop-shadow(0 25px 50px rgba(204, 255, 0, 0.15))'
        } else if (distance === 1) {
          // Right card
          x = 360
          y = -20
          opacity = 0.8
          scale = 0.92
          zIndex = 40
          rotateY = -8
          filter = 'brightness(0.75) blur(2px) drop-shadow(0 15px 30px rgba(204, 255, 0, 0.1))'
        } else if (distance === -1) {
          // Left card
          x = -360
          y = -20
          opacity = 0.8
          scale = 0.92
          zIndex = 40
          rotateY = 8
          filter = 'brightness(0.75) blur(2px) drop-shadow(0 15px 30px rgba(204, 255, 0, 0.1))'
        } else if (distance === 2) {
          // Far right
          x = 650
          y = -40
          opacity = 0.5
          scale = 0.85
          zIndex = 30
          rotateY = -15
          filter = 'brightness(0.6) blur(4px)'
        } else if (distance === -2) {
          // Far left
          x = -650
          y = -40
          opacity = 0.5
          scale = 0.85
          zIndex = 30
          rotateY = 15
          filter = 'brightness(0.6) blur(4px)'
        } else {
          opacity = 0
          zIndex = 10
        }
      }

      gsap.to(card, {
        x,
        y,
        opacity,
        scale,
        zIndex,
        rotateY,
        filter,
        duration: 0.8,
        ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        overwrite: 'auto',
      })
    })
  }

  // Hero intro animation on mount
  useEffect(() => {
    if (!isLoaded || !introRef.current) return

    const timeline = gsap.timeline()
    const spans = introRef.current.querySelectorAll('h1 span')
    const pTag = introRef.current.querySelector('p')
    const hint = introRef.current.querySelector('.scroll-hint')

    timeline.fromTo(
      spans,
      { opacity: 0, y: 30, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.2, ease: 'back.out' },
      0
    )

    timeline.fromTo(
      pTag,
      { opacity: 0, y: 20 },
      { opacity: 0.75, y: 0, duration: 0.7, ease: 'power2.out' },
      0.3
    )

    timeline.fromTo(
      hint,
      { opacity: 0, y: 10 },
      { opacity: 0.6, y: 0, duration: 0.6, ease: 'power2.out' },
      0.5
    )
  }, [isLoaded])

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      if (introRef.current) {
        const rect = introRef.current.getBoundingClientRect()
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const x = (e.clientX - rect.left - centerX) * 0.02
        const y = (e.clientY - rect.top - centerY) * 0.02

        gsap.to(introRef.current, {
          rotateX: y,
          rotateY: x,
          transformPerspective: 1000,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    indexRef.current = currentIndex
    updateCardPositions(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    const carousel = cardsRef.current
    if (!carousel) return

    let isDragging = false
    let startX = 0
    let dragStart = 0
    let velocity = 0
    let lastX = 0
    let lastTime = 0
    let scrollTimeout: NodeJS.Timeout

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      startX = e.clientX
      lastX = e.clientX
      lastTime = Date.now()
      dragStart = indexRef.current
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      
      const now = Date.now()
      const timeDiff = now - lastTime
      const xDiff = e.clientX - lastX
      
      if (timeDiff > 0) {
        velocity = xDiff / timeDiff
      }
      
      lastX = e.clientX
      lastTime = now

      const diff = e.clientX - startX
      if (Math.abs(diff) > 80) {
        isDragging = false
        const direction = diff > 0 ? -1 : 1
        const newIndex = dragStart + direction
        const finalIndex = ((newIndex % totalCards) + totalCards) % totalCards
        indexRef.current = finalIndex
        setCurrentIndex(finalIndex)
      }
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    const handleWheel = (e: WheelEvent) => {
      if (!isHoveringCarousel) return
      
      e.preventDefault()
      
      clearTimeout(scrollTimeout)
      const direction = e.deltaY > 0 ? 1 : -1
      const newIndex = indexRef.current + direction
      const finalIndex = ((newIndex % totalCards) + totalCards) % totalCards
      indexRef.current = finalIndex
      setCurrentIndex(finalIndex)
      
      scrollTimeout = setTimeout(() => {}, 100)
    }

    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true
      startX = e.touches[0].clientX
      lastX = startX
      lastTime = Date.now()
      dragStart = indexRef.current
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      
      const now = Date.now()
      const timeDiff = now - lastTime
      const xDiff = e.touches[0].clientX - lastX
      
      if (timeDiff > 0) {
        velocity = xDiff / timeDiff
      }
      
      lastX = e.touches[0].clientX
      lastTime = now

      const diff = e.touches[0].clientX - startX
      if (Math.abs(diff) > 80) {
        isDragging = false
        const direction = diff > 0 ? -1 : 1
        const newIndex = dragStart + direction
        const finalIndex = ((newIndex % totalCards) + totalCards) % totalCards
        indexRef.current = finalIndex
        setCurrentIndex(finalIndex)
      }
    }

    const handleTouchEnd = () => {
      isDragging = false
    }

    const handleCarouselEnter = () => {
      setIsHoveringCarousel(true)
    }

    const handleCarouselLeave = () => {
      setIsHoveringCarousel(false)
    }

    carousel.addEventListener('mousedown', handleMouseDown)
    carousel.addEventListener('mouseenter', handleCarouselEnter)
    carousel.addEventListener('mouseleave', handleCarouselLeave)
    carousel.addEventListener('wheel', handleWheel, { passive: false })
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    carousel.addEventListener('touchstart', handleTouchStart)
    carousel.addEventListener('touchmove', handleTouchMove, { passive: true })
    carousel.addEventListener('touchend', handleTouchEnd)

    // Initial update
    updateCardPositions(0)

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown)
      carousel.removeEventListener('mouseenter', handleCarouselEnter)
      carousel.removeEventListener('mouseleave', handleCarouselLeave)
      carousel.removeEventListener('wheel', handleWheel)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      carousel.removeEventListener('touchstart', handleTouchStart)
      carousel.removeEventListener('touchmove', handleTouchMove)
      carousel.removeEventListener('touchend', handleTouchEnd)
      clearTimeout(scrollTimeout)
    }
  }, [isHoveringCarousel])

  return (
    <section className="hero-professional" ref={containerRef}>
      <div className="hero-glow-bg"></div>
      
      <div className="hero-professional-content">
        <div className="hero-intro" ref={introRef}>
          <h1 className="hero-title-animated">
            <span className="hero-word">Bringing Your</span>
            <span className="hero-word">Creative Vision</span>
            <span className="hero-word hero-accent">To Life</span>
          </h1>
          <p className="hero-subtitle-animated">
            Design That Powers Imagination – High-quality 3D character modeling, game-ready assets, and graphic design for creators worldwide.
          </p>
          <div className="scroll-hint">
            <span className="hint-icon">↕</span> SCROLL • DRAG • EXPLORE
          </div>
        </div>

        <div className="portfolio-carousel" ref={cardsRef}>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => {
            const heroImages = ['char_1.jpg', 'char_2.jpg', 'char_3.jpg', 'char_4.jpeg', 'char_5.jpg', 'gun_1.jpeg', 'gun_2.jpg']
            const categories = [
              '3D Design',
              'Character Art',
              'Animation',
              'Visual Effects',
              'Motion Graphics',
              'Concept Art',
              'Brand Design',
            ]
            return (
              <div key={i} className="portfolio-card" style={{ perspective: '1000px' }}>
                <div className="card-shine"></div>
                <div className="card-content">
                  <img
                    src={`/images/hero/${heroImages[i]}`}
                    alt={`Project ${i}`}
                    draggable={false}
                    loading="lazy"
                  />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-info">
                  <span className="card-category">{categories[i - 1]}</span>
                  <h3>PROJECT {i}</h3>
                  <p>Creative Excellence Showcase</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="interaction-indicator">
          <div className="indicator-dot"></div>
          <span>Hover to scroll • Drag to navigate</span>
        </div>
      </div>

      <button className="cta-button hero-cta" style={{ marginTop: '10px' }}>
        <span>View Our Work</span>
      </button>
    </section>
  )
}
