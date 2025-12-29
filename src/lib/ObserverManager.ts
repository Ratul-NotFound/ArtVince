/**
 * OBSERVER MANAGER
 * Centralized IntersectionObserver and ResizeObserver management
 * Eliminates repeated observer setup code
 */

export interface ObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export class ObserverManager {
  private intersectionObservers: IntersectionObserver[] = []
  private resizeObservers: ResizeObserver[] = []
  private mutationObservers: MutationObserver[] = []

  /**
   * Create an IntersectionObserver with automatic tracking
   */
  createIntersectionObserver(
    callback: IntersectionObserverCallback,
    options?: ObserverOptions
  ): IntersectionObserver {
    const observer = new IntersectionObserver(callback, options)
    this.intersectionObservers.push(observer)
    return observer
  }

  /**
   * Create a ResizeObserver with automatic tracking
   */
  createResizeObserver(callback: ResizeObserverCallback): ResizeObserver {
    const observer = new ResizeObserver(callback)
    this.resizeObservers.push(observer)
    return observer
  }

  /**
   * Create a MutationObserver with automatic tracking
   */
  createMutationObserver(callback: MutationCallback): MutationObserver {
    const observer = new MutationObserver(callback)
    this.mutationObservers.push(observer)
    return observer
  }

  /**
   * Observe elements appearing/disappearing
   */
  observeVisibility(
    element: Element,
    callback: (isVisible: boolean) => void,
    threshold = 0.1
  ): IntersectionObserver {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry.isIntersecting)
        })
      },
      { threshold }
    )

    observer.observe(element)
    this.intersectionObservers.push(observer)

    return observer
  }

  /**
   * Observe element size changes
   */
  observeResize(element: Element, callback: (size: DOMRectReadOnly) => void): ResizeObserver {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.contentRect)
      })
    })

    observer.observe(element)
    this.resizeObservers.push(observer)

    return observer
  }

  /**
   * Observe DOM mutations
   */
  observeMutations(
    element: Element,
    callback: (mutations: MutationRecord[]) => void,
    config?: MutationObserverInit
  ): MutationObserver {
    const observer = new MutationObserver((mutations) => {
      callback(mutations)
    })

    observer.observe(element, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
      ...config,
    })

    this.mutationObservers.push(observer)
    return observer
  }

  /**
   * Stop observing all elements
   */
  cleanup(): void {
    this.intersectionObservers.forEach((obs) => obs.disconnect())
    this.resizeObservers.forEach((obs) => obs.disconnect())
    this.mutationObservers.forEach((obs) => obs.disconnect())

    this.intersectionObservers = []
    this.resizeObservers = []
    this.mutationObservers = []
  }

  /**
   * Get count of active observers
   */
  getObserverCount(): number {
    return this.intersectionObservers.length + this.resizeObservers.length + this.mutationObservers.length
  }
}

export function createObserverManager(): ObserverManager {
  return new ObserverManager()
}
