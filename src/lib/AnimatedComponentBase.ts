/**
 * ANIMATED COMPONENT BASE
 * Abstract base class for components with common animation/event patterns
 * Reduces boilerplate in component implementations
 */

import { MutableRefObject } from 'react'
import { EventManager } from './EventManager'
import { AnimationController } from './AnimationController'
import { ObserverManager } from './ObserverManager'

export abstract class AnimatedComponentBase {
  protected eventManager: EventManager
  protected animationController: AnimationController
  protected observerManager: ObserverManager
  protected containerRef: MutableRefObject<HTMLElement | null>

  constructor(containerRef: MutableRefObject<HTMLElement | null>) {
    this.eventManager = new EventManager()
    this.animationController = new AnimationController()
    this.observerManager = new ObserverManager()
    this.containerRef = containerRef
  }

  /**
   * Initialize component (called on mount)
   */
  abstract init(): void

  /**
   * Clean up resources (called on unmount)
   */
  cleanup(): void {
    this.eventManager.cleanup()
    this.animationController.killAll()
    this.observerManager.cleanup()
  }

  /**
   * Get container element
   */
  getContainer(): HTMLElement | null {
    return this.containerRef.current
  }

  /**
   * Query element within container
   */
  querySelector<T extends Element = Element>(selector: string): T | null {
    return this.getContainer()?.querySelector(selector) ?? null
  }

  /**
   * Query all elements within container
   */
  querySelectorAll<T extends Element = Element>(selector: string): T[] {
    const container = this.getContainer()
    return container ? Array.from(container.querySelectorAll(selector)) : []
  }

  /**
   * Add class to container
   */
  addClass(className: string): void {
    this.getContainer()?.classList.add(className)
  }

  /**
   * Remove class from container
   */
  removeClass(className: string): void {
    this.getContainer()?.classList.remove(className)
  }

  /**
   * Toggle class on container
   */
  toggleClass(className: string): void {
    this.getContainer()?.classList.toggle(className)
  }
}

/**
 * Factory for creating component instances with lifecycle management
 */
export function createAnimatedComponent<T extends AnimatedComponentBase>(
  ComponentClass: new (ref: MutableRefObject<HTMLElement | null>) => T,
  containerRef: MutableRefObject<HTMLElement | null>
): T {
  return new ComponentClass(containerRef)
}
