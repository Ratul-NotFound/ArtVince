/**
 * COMPONENT HOOKS
 * High-level React hooks built on top of manager classes
 * More efficient than raw DOM event listeners
 */

'use client'

import { useEffect, useRef, useState } from 'react'
import { EventManager } from '@/lib/EventManager'
import { ObserverManager } from '@/lib/ObserverManager'
import { AnimationController } from '@/lib/AnimationController'

/**
 * Hook for managed event listeners
 * Automatically cleans up on unmount
 */
export function useManagedEvents() {
  const managerRef = useRef<EventManager | null>(null)

  if (!managerRef.current) {
    managerRef.current = new EventManager()
  }

  useEffect(() => {
    return () => {
      managerRef.current?.cleanup()
    }
  }, [])

  return managerRef.current
}

/**
 * Hook for managed observers
 * Automatically cleans up on unmount
 */
export function useManagedObservers() {
  const managerRef = useRef<ObserverManager | null>(null)

  if (!managerRef.current) {
    managerRef.current = new ObserverManager()
  }

  useEffect(() => {
    return () => {
      managerRef.current?.cleanup()
    }
  }, [])

  return managerRef.current
}

/**
 * Hook for managed animations
 * Automatically cleans up on unmount
 */
export function useManagedAnimations() {
  const controllerRef = useRef<AnimationController | null>(null)

  if (!controllerRef.current) {
    controllerRef.current = new AnimationController()
  }

  useEffect(() => {
    return () => {
      controllerRef.current?.killAll()
    }
  }, [])

  return controllerRef.current
}

/**
 * Hook to observe element visibility
 * Replaces useInView with better performance
 */
export function useVisibility(
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
): boolean {
  const [isVisible, setIsVisible] = useState(false)
  const observerManager = useManagedObservers()

  useEffect(() => {
    if (!ref.current) return

    observerManager.observeVisibility(ref.current, setIsVisible, options?.threshold as number | undefined)
  }, [ref, observerManager, options])

  return isVisible
}

/**
 * Hook for element size tracking
 */
export function useElementSize(ref: React.RefObject<HTMLElement>) {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const observerManager = useManagedObservers()

  useEffect(() => {
    if (!ref.current) return

    observerManager.observeResize(ref.current, (rect) => {
      setSize({ width: rect.width, height: rect.height })
    })
  }, [ref, observerManager])

  return size
}

/**
 * Hook for mouse position tracking
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const eventManager = useManagedEvents()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    eventManager.on(document, 'mousemove', handleMouseMove, { passive: true })
  }, [eventManager])

  return position
}

/**
 * Hook for element focus detection
 */
export function useElementFocus(ref: React.RefObject<HTMLElement>) {
  const [isFocused, setIsFocused] = useState(false)
  const eventManager = useManagedEvents()

  useEffect(() => {
    if (!ref.current) return

    eventManager.on(ref.current, 'focus', () => setIsFocused(true))
    eventManager.on(ref.current, 'blur', () => setIsFocused(false))
  }, [ref, eventManager])

  return isFocused
}

/**
 * Hook for element hover detection
 */
export function useElementHover(ref: React.RefObject<HTMLElement>) {
  const [isHovered, setIsHovered] = useState(false)
  const eventManager = useManagedEvents()

  useEffect(() => {
    if (!ref.current) return

    eventManager.on(ref.current, 'mouseenter', () => setIsHovered(true))
    eventManager.on(ref.current, 'mouseleave', () => setIsHovered(false))
  }, [ref, eventManager])

  return isHovered
}
