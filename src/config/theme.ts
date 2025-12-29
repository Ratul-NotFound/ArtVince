/**
 * THEME CONFIGURATION
 * Centralized styling configuration and theme management
 */

/**
 * CSS Custom Properties (Variables) for theming
 * These should match the values in src/styles/globals.css
 */
export const cssVariables = {
  // Base Colors
  '--bg': '#080808',
  '--surface': '#111',
  '--text': '#ffffff',
  '--dim': '#888',
  '--accent': '#CCFF00',
  '--line': 'rgba(255, 255, 255, 0.1)',

  // Accent Variants
  '--accent-glow': 'rgba(204, 255, 0, 0.4)',
  '--accent-02': 'rgba(204, 255, 0, 0.02)',
  '--accent-03': 'rgba(204, 255, 0, 0.03)',
  '--accent-04': 'rgba(204, 255, 0, 0.04)',
  '--accent-05': 'rgba(204, 255, 0, 0.05)',
  '--accent-06': 'rgba(204, 255, 0, 0.06)',
  '--accent-08': 'rgba(204, 255, 0, 0.08)',
  '--accent-10': 'rgba(204, 255, 0, 0.10)',
  '--accent-12': 'rgba(204, 255, 0, 0.12)',
  '--accent-15': 'rgba(204, 255, 0, 0.15)',
  '--accent-20': 'rgba(204, 255, 0, 0.20)',
  '--accent-30': 'rgba(204, 255, 0, 0.30)',
  '--accent-40': 'rgba(204, 255, 0, 0.40)',
  '--accent-50': 'rgba(204, 255, 0, 0.50)',
  '--accent-60': 'rgba(204, 255, 0, 0.60)',
  '--accent-80': 'rgba(204, 255, 0, 0.80)',
  '--accent-90': 'rgba(204, 255, 0, 0.90)',

  // Background Variants
  '--bg-80': 'rgba(8, 8, 8, 0.80)',
  '--bg-85': 'rgba(8, 8, 8, 0.85)',
  '--bg-95': 'rgba(8, 8, 8, 0.95)',
  '--bg-98': 'rgba(8, 8, 8, 0.98)',
  '--bg-99': 'rgba(8, 8, 8, 0.99)',

  // Surface Variants
  '--surface-80': 'rgba(15, 15, 25, 0.80)',
  '--surface-90': 'rgba(12, 12, 20, 0.90)',
  '--surface-92': 'rgba(12, 12, 20, 0.92)',
  '--surface-96': 'rgba(12, 12, 18, 0.96)',
  '--surface-97': 'rgba(13, 13, 13, 0.97)',
  '--surface-98': 'rgba(13, 13, 13, 0.98)',
  '--surface-99': 'rgba(8, 8, 8, 0.99)',

  // Text Variants
  '--text-20': 'rgba(255, 255, 255, 0.20)',
  '--text-40': 'rgba(255, 255, 255, 0.40)',
  '--text-45': 'rgba(255, 255, 255, 0.45)',
  '--text-60': 'rgba(255, 255, 255, 0.60)',
  '--text-75': 'rgba(255, 255, 255, 0.75)',
  '--text-85': 'rgba(255, 255, 255, 0.85)',

  // Shadow Colors
  '--shadow-dark-15': 'rgba(0, 0, 0, 0.15)',
  '--shadow-dark-25': 'rgba(0, 0, 0, 0.25)',
  '--shadow-dark-30': 'rgba(0, 0, 0, 0.30)',
  '--shadow-dark-40': 'rgba(0, 0, 0, 0.40)',
  '--shadow-dark-50': 'rgba(0, 0, 0, 0.50)',
  '--shadow-dark-60': 'rgba(0, 0, 0, 0.60)',
  '--shadow-dark-80': 'rgba(0, 0, 0, 0.80)',
  '--shadow-dark-90': 'rgba(0, 0, 0, 0.90)',
  '--shadow-dark-95': 'rgba(0, 0, 0, 0.95)',

  // Card & UI Colors
  '--card-bg': '#1a1a1a',
  '--card-bg-dark': '#0a0a15',
  '--card-dark': 'rgba(20, 20, 20, 0.5)',
  '--surface-dark': '#0d0d0d',

  // Scrollbar Colors
  '--scrollbar-track': '#1a1a2e',
  '--scrollbar-thumb': '#75c4f9',
  '--scrollbar-thumb-hover': '#147ec7',

  // Fonts
  '--font-head': "'Syncopate', sans-serif",
  '--font-ui': "'Rajdhani', sans-serif",
  '--font-body': "'Inter', sans-serif",
} as const

/**
 * Theme object for JavaScript access
 */
export const theme = {
  colors: {
    background: '#080808',
    surface: '#111',
    text: '#ffffff',
    dim: '#888',
    accent: '#CCFF00',
    line: 'rgba(255, 255, 255, 0.1)',
  },

  fonts: {
    heading: "'Syncopate', sans-serif",
    ui: "'Rajdhani', sans-serif",
    body: "'Inter', sans-serif",
  },

  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    xxl: '1400px',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
    glow: '0 0 20px rgba(204, 255, 0, 0.3)',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    verySlow: '800ms',
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    offcanvas: 1050,
    modal: 1060,
    popover: 1070,
    tooltip: 1080,
    cursor: 9999,
    loader: 20000,
  },
} as const

/**
 * Helper function to apply theme variables to an element
 */
export function applyTheme(element: HTMLElement) {
  Object.entries(cssVariables).forEach(([key, value]) => {
    element.style.setProperty(key, value)
  })
}

/**
 * Function to dynamically change theme
 */
export function updateThemeVariable(variableName: string, value: string) {
  document.documentElement.style.setProperty(variableName, value)
}

/**
 * Get all available theme variables
 */
export function getThemeVariables() {
  return cssVariables
}
