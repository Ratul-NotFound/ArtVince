/**
 * ANIMATION CONTROLLER
 * Centralized animation management using GSAP
 * Replaces repeated animation code patterns with reusable methods
 */

import gsap from 'gsap'

export interface AnimationConfig {
  duration?: number
  delay?: number
  stagger?: number | object
  ease?: string
  onComplete?: () => void
  onStart?: () => void
}

export class AnimationController {
  private activeAnimations = new Map<string, gsap.core.Tween | gsap.core.Timeline>()

  /**
   * Create a staggered reveal animation
   */
  revealStagger(
    elements: gsap.TweenTarget,
    config: AnimationConfig = {}
  ): gsap.core.Timeline {
    const timeline = gsap.timeline()
    const {
      duration = 0.8,
      stagger = 0.1,
      ease = 'back.out',
      onComplete,
      onStart,
    } = config

    timeline.fromTo(
      elements,
      { opacity: 0, y: 30, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger,
        ease,
      },
      0
    )

    if (onStart) timeline.eventCallback('onStart', onStart)
    if (onComplete) timeline.eventCallback('onComplete', onComplete)

    return timeline
  }

  /**
   * Create a fade-in animation
   */
  fadeIn(
    elements: gsap.TweenTarget,
    config: AnimationConfig = {}
  ): gsap.core.Tween {
    const { duration = 0.3, delay = 0, ease = 'power2.out' } = config

    return gsap.to(elements, {
      opacity: 1,
      duration,
      delay,
      ease,
    })
  }

  /**
   * Create a fade-out animation
   */
  fadeOut(
    elements: gsap.TweenTarget,
    config: AnimationConfig = {}
  ): gsap.core.Tween {
    const { duration = 0.3, delay = 0, ease = 'power2.out' } = config

    return gsap.to(elements, {
      opacity: 0,
      duration,
      delay,
      ease,
    })
  }

  /**
   * Create a slide-in animation
   */
  slideIn(
    elements: gsap.TweenTarget,
    direction: 'left' | 'right' | 'top' | 'bottom',
    config: AnimationConfig = {}
  ): gsap.core.Tween {
    const { duration = 0.5, ease = 'power2.out' } = config

    const fromValues: Record<string, any> = { opacity: 0 }
    const toValues: Record<string, any> = { opacity: 1 }

    switch (direction) {
      case 'left':
        fromValues.x = -100
        break
      case 'right':
        fromValues.x = 100
        break
      case 'top':
        fromValues.y = -100
        break
      case 'bottom':
        fromValues.y = 100
        break
    }

    return gsap.fromTo(elements, fromValues, { ...toValues, duration, ease })
  }

  /**
   * Create a scale pulse animation
   */
  pulse(elements: gsap.TweenTarget, config: AnimationConfig = {}): gsap.core.Timeline {
    const { duration = 0.5, ease = 'power2.out' } = config
    const timeline = gsap.timeline()

    timeline
      .to(elements, { scale: 1.05, duration: duration * 0.5, ease })
      .to(elements, { scale: 1, duration: duration * 0.5, ease }, '<')

    return timeline
  }

  /**
   * Create a rotate animation
   */
  rotate(
    elements: gsap.TweenTarget,
    angle: number,
    config: AnimationConfig = {}
  ): gsap.core.Tween {
    const { duration = 0.5, ease = 'power2.out' } = config

    return gsap.to(elements, {
      rotation: angle,
      duration,
      ease,
    })
  }

  /**
   * Create a glow effect animation
   */
  glow(elements: gsap.TweenTarget, config: AnimationConfig = {}): gsap.core.Timeline {
    const { duration = 0.3 } = config
    const timeline = gsap.timeline()

    timeline.to(elements, {
      boxShadow: '0 0 50px rgba(204,255,0,0.5), inset 0 0 50px rgba(204,255,0,0.2)',
      duration,
    })

    return timeline
  }

  /**
   * Kill animation for element
   */
  killAnimation(target: string | gsap.TweenTarget): void {
    if (typeof target === 'string') {
      const anim = this.activeAnimations.get(target)
      if (anim) anim.kill()
      this.activeAnimations.delete(target)
    } else {
      gsap.killTweensOf(target)
    }
  }

  /**
   * Kill all active animations
   */
  killAll(): void {
    this.activeAnimations.forEach((anim) => anim.kill())
    this.activeAnimations.clear()
  }

  /**
   * Store animation reference
   */
  store(id: string, animation: gsap.core.Tween | gsap.core.Timeline): void {
    this.activeAnimations.set(id, animation)
  }
}

export function createAnimationController(): AnimationController {
  return new AnimationController()
}
