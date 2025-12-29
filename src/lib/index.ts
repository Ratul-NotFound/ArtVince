/**
 * LIBRARY INDEX
 * Centralized exports for all OOP utilities and classes
 */

// ============================================================================
// MANAGERS & CONTROLLERS
// ============================================================================

export {
  EventManager,
  createEventManager,
  type EventListener,
  type EventBinding,
} from './EventManager'

export {
  AnimationController,
  createAnimationController,
  type AnimationConfig,
} from './AnimationController'

export {
  CarouselController,
  createCarouselController,
  type CarouselConfig,
} from './CarouselController'

export {
  ObserverManager,
  createObserverManager,
  type ObserverOptions,
} from './ObserverManager'

export { LazyLoader, createLazyLoader, type LazyLoaderConfig } from './LazyLoader'

// ============================================================================
// BASE CLASSES
// ============================================================================

export {
  AnimatedComponentBase,
  createAnimatedComponent,
} from './AnimatedComponentBase'

// ============================================================================
// DATA & UTILITIES
// ============================================================================

export {
  testimonialsData,
  servicesData,
  navigationData,
  marqueeData,
  portfolioItems,
  getDataById,
  filterByCategory,
  getPaginatedData,
  searchData,
  type Testimonial,
  type Service,
  type NavItem,
  type MarqueeItem,
  type PortfolioItem,
} from './DataFactory'

export {
  string,
  number,
  array,
  object,
  date,
  dom,
  validate,
  className,
} from './utils'

// ============================================================================
// QUICK START GUIDE
// ============================================================================

/**
 * QUICK START: Using the OOP Libraries
 *
 * 1. EVENTS - Use EventManager instead of addEventListener
 *    ─────────────────────────────────────────────────────
 *    const eventManager = new EventManager()
 *    eventManager.on(element, 'click', handler)
 *    eventManager.cleanup() // or use useManagedEvents()
 *
 * 2. ANIMATIONS - Use AnimationController instead of GSAP directly
 *    ────────────────────────────────────────────────────────────
 *    const anim = new AnimationController()
 *    anim.fadeIn(element)
 *    anim.slideIn(element, 'left')
 *    anim.killAll() // cleanup
 *
 * 3. CAROUSELS - Use CarouselController for carousel behavior
 *    ──────────────────────────────────────────────────────
 *    const carousel = createCarouselController({
 *      totalItems: 7,
 *      autoplay: true,
 *    })
 *    carousel.next()
 *    carousel.prev()
 *    carousel.setupDragHandling(element)
 *
 * 4. OBSERVERS - Use ObserverManager instead of creating observers
 *    ──────────────────────────────────────────────────────────
 *    const observers = new ObserverManager()
 *    observers.observeVisibility(element, (isVisible) => {})
 *    observers.observeResize(element, (size) => {})
 *    observers.cleanup()
 *
 * 5. DATA - Use DataFactory for all content
 *    ────────────────────────────────────
 *    import { servicesData, testimonialsData } from '@/lib'
 *    const results = searchData(servicesData, 'query', ['title'])
 *    const filtered = filterByCategory(portfolioItems, 'design')
 *
 * 6. HOOKS - Use managed hooks for automatic cleanup
 *    ────────────────────────────────────────────
 *    import {
 *      useManagedEvents,
 *      useManagedAnimations,
 *      useVisibility,
 *      useElementSize,
 *    } from '@/hooks'
 */
