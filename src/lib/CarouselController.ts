/**
 * CAROUSEL CONTROLLER
 * Reusable carousel logic for Hero, Testimonials, and other carousel components
 * Eliminates repeated carousel state management and event handling
 */

import { EventManager } from './EventManager'

export interface CarouselConfig {
  totalItems: number
  autoplay?: boolean
  autoplayDuration?: number
  sensibility?: number
  enableMouse?: boolean
  enableTouch?: boolean
  enableKeyboard?: boolean
}

export class CarouselController {
  private currentIndex: number = 0
  private eventManager: EventManager
  private autoplayTimer: NodeJS.Timeout | null = null
  private isDragging: boolean = false
  private dragStart: number = 0
  private lastX: number = 0
  private lastTime: number = 0
  private velocity: number = 0
  private config: Required<CarouselConfig>

  private onIndexChange: (index: number) => void = () => {}

  constructor(config: CarouselConfig) {
    this.eventManager = new EventManager()
    this.config = {
      autoplay: config.autoplay ?? false,
      autoplayDuration: config.autoplayDuration ?? 6000,
      sensibility: config.sensibility ?? 5,
      enableMouse: config.enableMouse ?? true,
      enableTouch: config.enableTouch ?? true,
      enableKeyboard: config.enableKeyboard ?? true,
      totalItems: config.totalItems,
    }

    if (this.config.autoplay) {
      this.startAutoplay()
    }
  }

  /**
   * Navigate to specific index
   */
  goToIndex(index: number): void {
    const normalized = ((index % this.config.totalItems) + this.config.totalItems) % this.config.totalItems
    if (normalized !== this.currentIndex) {
      this.currentIndex = normalized
      this.onIndexChange(this.currentIndex)
      this.resetAutoplay()
    }
  }

  /**
   * Move to next item
   */
  next(): void {
    this.goToIndex(this.currentIndex + 1)
  }

  /**
   * Move to previous item
   */
  prev(): void {
    this.goToIndex(this.currentIndex - 1)
  }

  /**
   * Get current index
   */
  getCurrentIndex(): number {
    return this.currentIndex
  }

  /**
   * Get distance from current item (handles wrapping)
   */
  getDistance(targetIndex: number): number {
    let distance = (targetIndex - this.currentIndex + this.config.totalItems) % this.config.totalItems
    if (distance > this.config.totalItems / 2) {
      distance = distance - this.config.totalItems
    }
    return distance
  }

  /**
   * Setup drag handling
   */
  setupDragHandling(element: HTMLElement): void {
    if (this.config.enableMouse) {
      this.eventManager.on(element, 'mousedown', (e: MouseEvent) => {
        this.startDrag(e.clientX)
      })

      this.eventManager.on(document, 'mousemove', (e: MouseEvent) => {
        if (this.isDragging) {
          this.updateDrag(e.clientX)
        }
      })

      this.eventManager.on(document, 'mouseup', () => {
        this.endDrag()
      })
    }

    if (this.config.enableTouch) {
      this.eventManager.on(element, 'touchstart', (e: TouchEvent) => {
        this.startDrag(e.touches[0].clientX)
      })

      this.eventManager.on(document, 'touchmove', (e: TouchEvent) => {
        if (this.isDragging) {
          this.updateDrag(e.touches[0].clientX)
        }
      })

      this.eventManager.on(document, 'touchend', () => {
        this.endDrag()
      })
    }

    if (this.config.enableKeyboard) {
      this.eventManager.on(document, 'keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') this.next()
        if (e.key === 'ArrowLeft') this.prev()
      })
    }
  }

  /**
   * Start drag operation
   */
  private startDrag(clientX: number): void {
    this.isDragging = true
    this.dragStart = clientX
    this.lastX = clientX
    this.lastTime = Date.now()
    this.velocity = 0
  }

  /**
   * Update drag operation
   */
  private updateDrag(clientX: number): void {
    if (!this.isDragging) return

    const now = Date.now()
    const delta = clientX - this.lastX
    const timeDelta = Math.max(now - this.lastTime, 16)

    this.velocity = delta / timeDelta

    this.lastX = clientX
    this.lastTime = now
  }

  /**
   * End drag operation
   */
  private endDrag(): void {
    if (!this.isDragging) return

    this.isDragging = false

    const dragDistance = this.lastX - this.dragStart
    const threshold = 50
    const velocityThreshold = 0.5

    if (Math.abs(dragDistance) > threshold || Math.abs(this.velocity) > velocityThreshold) {
      if (dragDistance > 0 || this.velocity > velocityThreshold) {
        this.prev()
      } else {
        this.next()
      }
    }
  }

  /**
   * Start autoplay
   */
  private startAutoplay(): void {
    if (this.autoplayTimer) clearInterval(this.autoplayTimer)

    this.autoplayTimer = setInterval(() => {
      this.next()
    }, this.config.autoplayDuration)
  }

  /**
   * Stop autoplay
   */
  stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer)
      this.autoplayTimer = null
    }
  }

  /**
   * Reset autoplay (restart timer)
   */
  private resetAutoplay(): void {
    if (this.config.autoplay) {
      this.stopAutoplay()
      this.startAutoplay()
    }
  }

  /**
   * Set index change callback
   */
  onIndexChangeCallback(callback: (index: number) => void): void {
    this.onIndexChange = callback
  }

  /**
   * Cleanup
   */
  destroy(): void {
    this.stopAutoplay()
    this.eventManager.cleanup()
  }
}

export function createCarouselController(config: CarouselConfig): CarouselController {
  return new CarouselController(config)
}
