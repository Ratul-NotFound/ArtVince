'use client'

import { useEffect, useRef } from 'react'
import { createAnimationController } from '@/lib/AnimationController'
import { useManagedEvents } from '@/hooks/ComponentHooks'
import '@/styles/marquee.css'

interface MarqueeItem {
  id: string
  text: string
  icon?: string
  color?: 'default' | 'cyan' | 'purple' | 'orange'
}

const marqueeItems: MarqueeItem[] = [
  { id: 'item-1', text: 'UNREAL ENGINE 5', color: 'default' },
  { id: 'item-2', text: 'ZBRUSH', color: 'cyan' },
  { id: 'item-3', text: 'MAYA', color: 'purple' },
  { id: 'item-4', text: 'SUBSTANCE PAINTER', color: 'orange' },
  { id: 'item-5', text: 'BLENDER', color: 'default' },
  { id: 'item-6', text: 'UNREAL ENGINE 5', color: 'cyan' },
  { id: 'item-7', text: 'ZBRUSH', color: 'purple' },
  { id: 'item-8', text: 'MAYA', color: 'orange' },
]

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const eventManager = useManagedEvents()
  const animControllerRef = useRef(createAnimationController())

  // Animation mode state
  useEffect(() => {
    if (!innerRef.current) return

    // Random animation mode for variety
    const modes = ['wave', 'rotate', 'pulse']
    const randomMode = modes[Math.floor(Math.random() * modes.length)]

    // Add animation mode class
    innerRef.current.classList.add(`marquee-inner--${randomMode}`)

    // Optional: Cycle between modes on interaction
    const handleInteraction = () => {
      if (!innerRef.current) return
      const currentMode = modes.find((mode) => innerRef.current?.classList.contains(`marquee-inner--${mode}`))
      const nextMode = modes[(modes.indexOf(currentMode || 'wave') + 1) % modes.length]

      modes.forEach((mode) => innerRef.current?.classList.remove(`marquee-inner--${mode}`))
      innerRef.current.classList.add(`marquee-inner--${nextMode}`)
    }

    // Listen for double-click to change animation mode
    eventManager.on(marqueeRef.current!, 'dblclick', handleInteraction)

    return () => {
      eventManager.cleanup()
    }
  }, [eventManager])

  // Stagger item reveals on load
  useEffect(() => {
    const items = marqueeRef.current?.querySelectorAll('.marquee-item')
    if (!items) return

    items.forEach((item, index) => {
      const element = item as HTMLElement
      element.style.animation = `float-up 0.6s ease-out ${index * 0.1}s both`
    })
  }, [])

  return (
    <section className="marquee-wrap" ref={marqueeRef} data-marquee-section>
      <div
        className="marquee-inner"
        ref={innerRef}
        role="region"
        aria-label="Featured tools and technologies"
      >
        {marqueeItems.map((item) => (
          <div
            key={item.id}
            className={`marquee-item marquee-item--${item.color}`}
            data-marquee-item={item.id}
            title={`Double-click marquee to change animation mode`}
          >
            {item.text}
          </div>
        ))}
      </div>
    </section>
  )
}
