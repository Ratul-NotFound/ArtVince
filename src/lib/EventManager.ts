/**
 * EVENT MANAGER
 * Centralized event handling with automatic cleanup
 * Eliminates repeated addEventListener/removeEventListener patterns
 */

export type EventListener = (...args: any[]) => void

export interface EventBinding {
  target: EventTarget
  event: string
  listener: EventListener
  options?: AddEventListenerOptions
}

export class EventManager {
  private bindings: EventBinding[] = []

  /**
   * Add event listener with automatic tracking for cleanup
   */
  on(
    target: EventTarget,
    event: string,
    listener: EventListener,
    options?: AddEventListenerOptions
  ): void {
    target.addEventListener(event, listener as any, options)
    this.bindings.push({ target, event, listener, options })
  }

  /**
   * Remove single event listener
   */
  off(target: EventTarget, event: string, listener: EventListener): void {
    target.removeEventListener(event, listener as any)
    this.bindings = this.bindings.filter(
      (b) => !(b.target === target && b.event === event && b.listener === listener)
    )
  }

  /**
   * Add one-time event listener
   */
  once(
    target: EventTarget,
    event: string,
    listener: EventListener,
    options?: AddEventListenerOptions
  ): void {
    const onceWrapper: EventListener = (...args: any[]) => {
      listener(...args)
      this.off(target, event, onceWrapper)
    }
    this.on(target, event, onceWrapper, options)
  }

  /**
   * Clean up all event listeners
   */
  cleanup(): void {
    this.bindings.forEach(({ target, event, listener, options }) => {
      target.removeEventListener(event, listener as any, options)
    })
    this.bindings = []
  }

  /**
   * Get number of active bindings
   */
  getBindingCount(): number {
    return this.bindings.length
  }
}

/**
 * Factory function to create and manage EventManager instances
 */
export function createEventManager(): EventManager {
  return new EventManager()
}
