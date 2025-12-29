/**
 * APPLICATION CONSTANTS
 * Centralized configuration for the entire application
 */

// ============================================================================
// THEME & COLORS
// ============================================================================

export const THEME = {
  colors: {
    // Base Colors
    background: '#080808',
    surface: '#111',
    text: '#ffffff',
    dim: '#888',
    accent: '#CCFF00',
    line: 'rgba(255, 255, 255, 0.1)',

    // Accent Variants (use CSS variables in practice)
    accentGlow: 'rgba(204, 255, 0, 0.4)',

    // Scrollbar
    scrollbarTrack: '#1a1a2e',
    scrollbarThumb: '#75c4f9',
    scrollbarThumbHover: '#147ec7',
  },

  fonts: {
    heading: "'Syncopate', sans-serif",
    ui: "'Rajdhani', sans-serif",
    body: "'Inter', sans-serif",
  },
} as const

// ============================================================================
// NAVIGATION
// ============================================================================

export const NAVIGATION = {
  items: [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'Services', href: '/services', icon: '⚙️' },
    { label: 'About', href: '/about', icon: 'ℹ️' },
    { label: 'Team', href: '/team', icon: '👥' },
    { label: 'Contact', href: '/contact', icon: '📧' },
  ],
  scrollThreshold: 50,
  mobileBreakpoint: 768,
} as const

// ============================================================================
// ANIMATION
// ============================================================================

export const ANIMATION = {
  durations: {
    fast: 200,
    normal: 300,
    slow: 500,
    verySlow: 800,
  },
  easing: {
    smooth: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    ease: 'ease',
    easeInOut: 'ease-in-out',
  },
  transitions: {
    default: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    fast: 'all 0.2s ease',
    slow: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const

// ============================================================================
// LAYOUT
// ============================================================================

export const LAYOUT = {
  containerMaxWidth: 1400,
  padding: {
    xs: '2%',
    sm: '3%',
    md: '5%',
    lg: '5%',
  },
  breakpoints: {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200,
    xxl: 1400,
  },
} as const

// ============================================================================
// SERVICES
// ============================================================================

export const SERVICES = [
  {
    id: '3d-product-animation',
    title: '3D Product Animation',
    icon: '🎬',
    path: '/services/3d-product-animation',
  },
  {
    id: 'character-modeling',
    title: 'Character Modeling',
    icon: '👤',
    path: '/services/character-modeling',
  },
  {
    id: 'game-assets',
    title: 'Game Assets',
    icon: '🎮',
    path: '/services/game-assets',
  },
  {
    id: 'game-environment',
    title: 'Game Environment',
    icon: '🌍',
    path: '/services/game-environment',
  },
  {
    id: 'concept-art',
    title: 'Concept Art',
    icon: '🎨',
    path: '/services/concept-art',
  },
  {
    id: '3d-industrial-design',
    title: '3D Industrial Design',
    icon: '⚙️',
    path: '/services/3d-industrial-design',
  },
] as const

// ============================================================================
// METADATA
// ============================================================================

export const METADATA = {
  title: 'artvince - 3D Design Solutions',
  description: '3D design solutions for games, film, and commercial applications.',
  keywords: [
    '3D design',
    'animation',
    'character modeling',
    'game assets',
    'visual effects',
    'concept art',
  ],
  author: 'artvince Studio',
  ogImage: '/images/og-image.jpg',
} as const

// ============================================================================
// API ENDPOINTS
// ============================================================================

export const API = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  endpoints: {
    auth: {
      login: '/auth/login',
      logout: '/auth/logout',
      register: '/auth/register',
      profile: '/auth/profile',
    },
    services: {
      list: '/services',
      detail: '/services/:id',
    },
    team: {
      list: '/team',
      detail: '/team/:id',
    },
    testimonials: {
      list: '/testimonials',
    },
  },
} as const

// ============================================================================
// FEATURE FLAGS
// ============================================================================

export const FEATURES = {
  enableAuth: true,
  enableBlog: false,
  enableShop: false,
  enableAnalytics: true,
  maintenanceMode: false,
} as const

// ============================================================================
// COMPONENT DEFAULTS
// ============================================================================

export const DEFAULTS = {
  buttonSize: 'md' as const,
  inputSize: 'md' as const,
  imageQuality: 85,
  imageSizes: {
    thumbnail: 150,
    small: 300,
    medium: 600,
    large: 1200,
  },
} as const
