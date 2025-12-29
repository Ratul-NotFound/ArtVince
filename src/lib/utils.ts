/**
 * UTILITY FUNCTIONS
 * Helper functions for common operations
 */

// ============================================================================
// STRING UTILITIES
// ============================================================================

export const string = {
  /**
   * Convert string to URL slug
   */
  slugify: (str: string): string => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  },

  /**
   * Capitalize first letter
   */
  capitalize: (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  },

  /**
   * Truncate string to length
   */
  truncate: (str: string, length: number, suffix = '...'): string => {
    if (str.length <= length) return str
    return str.slice(0, length - suffix.length) + suffix
  },

  /**
   * Format string to title case
   */
  toTitleCase: (str: string): string => {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
  },
}

// ============================================================================
// NUMBER UTILITIES
// ============================================================================

export const number = {
  /**
   * Clamp number between min and max
   */
  clamp: (num: number, min: number, max: number): number => {
    return Math.max(min, Math.min(max, num))
  },

  /**
   * Format number with thousand separators
   */
  formatNumber: (num: number): string => {
    return num.toLocaleString()
  },

  /**
   * Percentage between two numbers
   */
  getPercentage: (current: number, total: number): number => {
    return (current / total) * 100
  },

  /**
   * Linear interpolation
   */
  lerp: (a: number, b: number, t: number): number => {
    return a + (b - a) * t
  },
}

// ============================================================================
// ARRAY UTILITIES
// ============================================================================

export const array = {
  /**
   * Shuffle array
   */
  shuffle: <T,>(arr: T[]): T[] => {
    const newArr = [...arr]
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }
    return newArr
  },

  /**
   * Remove duplicates
   */
  unique: <T,>(arr: T[]): T[] => {
    return [...new Set(arr)]
  },

  /**
   * Group array by property
   */
  groupBy: <T,>(arr: T[], key: keyof T): Record<string, T[]> => {
    return arr.reduce(
      (result, item) => {
        const groupKey = String(item[key])
        if (!result[groupKey]) result[groupKey] = []
        result[groupKey].push(item)
        return result
      },
      {} as Record<string, T[]>
    )
  },

  /**
   * Chunk array into smaller arrays
   */
  chunk: <T,>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = []
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size))
    }
    return chunks
  },
}

// ============================================================================
// OBJECT UTILITIES
// ============================================================================

export const object = {
  /**
   * Deep merge objects
   */
  deepMerge: <T extends Record<string, any>>(target: T, source: Partial<T>): T => {
    const output = { ...target } as T
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach((key) => {
        const sourceValue = source[key as keyof typeof source]
        if (sourceValue && isObject(sourceValue)) {
          if (!(key in output)) {
            Object.assign(output, { [key]: sourceValue })
          } else {
            const targetValue = output[key as keyof T]
            if (isObject(targetValue)) {
              object.deepMerge(targetValue as Record<string, any>, sourceValue)
            }
          }
        } else {
          Object.assign(output, { [key]: sourceValue })
        }
      })
    }
    return output
  },

  /**
   * Pick specific keys from object
   */
  pick: <T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
    return keys.reduce((result, key) => {
      result[key] = obj[key]
      return result
    }, {} as Pick<T, K>)
  },

  /**
   * Omit specific keys from object
   */
  omit: <T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
    const result: any = {}
    Object.keys(obj).forEach((key) => {
      if (!keys.includes(key as K)) {
        result[key] = obj[key as keyof T]
      }
    })
    return result
  },
}

// ============================================================================
// CLASS UTILITIES
// ============================================================================

export const className = {
  /**
   * Combine class names
   */
  combine: (...classes: (string | undefined | false)[]): string => {
    return classes.filter(Boolean).join(' ')
  },

  /**
   * Conditional classes
   */
  conditional: (condition: boolean, className: string): string => {
    return condition ? className : ''
  },
}

// ============================================================================
// DATE UTILITIES
// ============================================================================

export const date = {
  /**
   * Format date to string
   */
  format: (date: Date | string, format: string = 'MM/DD/YYYY'): string => {
    const d = typeof date === 'string' ? new Date(date) : date
    const map: Record<string, number> = {
      MM: d.getMonth() + 1,
      DD: d.getDate(),
      YYYY: d.getFullYear(),
      HH: d.getHours(),
      mm: d.getMinutes(),
      ss: d.getSeconds(),
    }
    return format.replace(/MM|DD|YYYY|HH|mm|ss/g, (matched) => String(map[matched]).padStart(2, '0'))
  },

  /**
   * Get relative time (e.g., "2 days ago")
   */
  formatRelative: (date: Date | string): string => {
    const d = typeof date === 'string' ? new Date(date) : date
    const now = new Date()
    const seconds = Math.floor((now.getTime() - d.getTime()) / 1000)

    let interval = seconds / 31536000
    if (interval > 1) return Math.floor(interval) + ' years ago'

    interval = seconds / 2592000
    if (interval > 1) return Math.floor(interval) + ' months ago'

    interval = seconds / 86400
    if (interval > 1) return Math.floor(interval) + ' days ago'

    interval = seconds / 3600
    if (interval > 1) return Math.floor(interval) + ' hours ago'

    interval = seconds / 60
    if (interval > 1) return Math.floor(interval) + ' minutes ago'

    return Math.floor(seconds) + ' seconds ago'
  },
}

// ============================================================================
// DOM UTILITIES
// ============================================================================

export const dom = {
  /**
   * Check if element is in viewport
   */
  isInViewport: (element: Element): boolean => {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  },

  /**
   * Scroll to element
   */
  scrollTo: (element: Element, options?: ScrollIntoViewOptions): void => {
    element.scrollIntoView(options)
  },

  /**
   * Get scroll position
   */
  getScrollPosition: (): { x: number; y: number } => {
    return {
      x: window.scrollX || window.pageXOffset,
      y: window.scrollY || window.pageYOffset,
    }
  },
}

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

export const validate = {
  /**
   * Validate email
   */
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  /**
   * Validate URL
   */
  url: (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  },

  /**
   * Validate phone number
   */
  phone: (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
  },
}

// ============================================================================
// TYPE GUARDS
// ============================================================================

function isObject(obj: any): obj is Record<string, any> {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
}
