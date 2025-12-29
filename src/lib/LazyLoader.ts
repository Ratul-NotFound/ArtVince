/**
 * LAZY LOADER
 * Efficient lazy loading for images, sections, and components
 * Replaces repeated lazy-loading code
 */

export interface LazyLoaderConfig {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  onLoad?: () => void
}

export class LazyLoader {
  private observer: IntersectionObserver | null = null
  private loadedElements = new Set<Element>()

  /**
   * Create and start observer
   */
  observe(
    elements: Element[] | NodeListOf<Element>,
    callback: (element: Element) => void,
    config: LazyLoaderConfig = {}
  ): void {
    const { root = null, rootMargin = '50px', threshold = 0.1, onLoad } = config

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.loadedElements.has(entry.target)) {
            this.loadedElements.add(entry.target)
            callback(entry.target)
            if (onLoad) onLoad()
            this.observer?.unobserve(entry.target)
          }
        })
      },
      { root, rootMargin, threshold }
    )

    Array.from(elements).forEach((el) => this.observer!.observe(el))
  }

  /**
   * Load images lazily
   */
  lazyLoadImages(selector: string, config: LazyLoaderConfig = {}): void {
    const images = document.querySelectorAll(selector) as NodeListOf<HTMLImageElement>

    this.observe(
      images,
      (element) => {
        const img = element as HTMLImageElement
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.removeAttribute('data-src')
          img.classList.add('loaded')
        }
      },
      config
    )
  }

  /**
   * Load sections lazily
   */
  lazyLoadSections(selector: string, config: LazyLoaderConfig = {}): void {
    const sections = document.querySelectorAll(selector)

    this.observe(
      sections,
      (element) => {
        element.classList.add('section-loaded')
      },
      config
    )
  }

  /**
   * Unobserve all elements
   */
  disconnect(): void {
    this.observer?.disconnect()
    this.loadedElements.clear()
  }

  /**
   * Get count of loaded elements
   */
  getLoadedCount(): number {
    return this.loadedElements.size
  }
}

export function createLazyLoader(): LazyLoader {
  return new LazyLoader()
}
