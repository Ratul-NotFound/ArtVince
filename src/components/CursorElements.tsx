'use client'

import { useEffect } from 'react'

export default function CursorElements() {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const dot = document.querySelector('.cursor-dot') as HTMLElement
      const circle = document.querySelector('.cursor-circle') as HTMLElement
      
      if (!dot || !circle) return

      let mouseX = 0
      let mouseY = 0
      let circleX = 0
      let circleY = 0

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX
        mouseY = e.clientY
        dot.style.left = mouseX + 'px'
        dot.style.top = mouseY + 'px'
      }

      let animationId: number
      const animateCursor = () => {
        circleX += (mouseX - circleX) * 0.15
        circleY += (mouseY - circleY) * 0.15
        circle.style.left = circleX + 'px'
        circle.style.top = circleY + 'px'
        animationId = requestAnimationFrame(animateCursor)
      }

      const handleHover = () => {
        document.body.classList.add('hovered')
      }

      const handleLeave = () => {
        document.body.classList.remove('hovered')
      }

      // Add event listeners to interactive elements
      document.addEventListener('mousemove', handleMouseMove, { passive: true })
      
      const interactiveElements = document.querySelectorAll('a, button, .hover-trigger, [role="button"]')
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHover)
        el.addEventListener('mouseleave', handleLeave)
      })

      animateCursor()

      const cleanup = () => {
        document.removeEventListener('mousemove', handleMouseMove)
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleHover)
          el.removeEventListener('mouseleave', handleLeave)
        })
        cancelAnimationFrame(animationId)
      }

      return cleanup
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="bg-grid"></div>
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
    </>
  )
}
