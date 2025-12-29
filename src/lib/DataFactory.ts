/**
 * DATA FACTORY & STORE
 * Centralized data management for components
 * Eliminates repeated data definitions across components
 */

// ============================================================================
// TESTIMONIALS DATA
// ============================================================================

export interface Testimonial {
  id: string
  text: string
  author: string
  company: string
  rating: number
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    text: 'Artvince transformed our game assets with stunning 3D models. Their attention to detail and quick turnaround time exceeded expectations.',
    author: 'Studios Director',
    company: 'Game Studio',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    text: 'The character animations were phenomenal. Every frame captured our brand essence perfectly. Highly recommend!',
    author: 'Creative Lead',
    company: 'Animation Agency',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    text: 'Working with Artvince was a game-changer for our product visualization. Professional, creative, and results-driven.',
    author: 'Product Manager',
    company: 'Tech Company',
    rating: 5,
  },
]

// ============================================================================
// SERVICES DATA
// ============================================================================

export interface Service {
  id: string
  title: string
  description: string
}

export const servicesData: Service[] = [
  {
    id: '3d-product-animation',
    title: '3D PRODUCT ANIMATION',
    description: 'High-quality 3D Product Animation that brings your ideas and products to life with stunning visuals',
  },
  {
    id: '3d-industrial-design',
    title: '3D INDUSTRIAL DESIGN',
    description: 'Professional 3D Industrial Design services that transform concepts into functional and manufacturable designs',
  },
  {
    id: 'character-modeling',
    title: 'CHARACTER MODELING',
    description: 'Photorealistic character modeling and development for games, films, and interactive media',
  },
  {
    id: 'game-assets',
    title: 'LOW-POLY GAME ASSETS',
    description: 'Professional game-ready 3D assets optimized for performance and visual impact',
  },
  {
    id: 'game-environment',
    title: 'GAME ENVIRONMENT DESIGN',
    description: 'Immersive world-building and environmental asset creation for interactive experiences',
  },
  {
    id: 'concept-art',
    title: 'CONCEPT ART & MORE',
    description: 'Custom creative solutions including motion graphics, brand design, and concept art',
  },
]

// ============================================================================
// NAVIGATION DATA
// ============================================================================

export interface NavItem {
  id: string
  label: string
  href: string
  icon?: string
}

export const navigationData: NavItem[] = [
  { id: 'nav-home', label: 'Home', href: '/', icon: '🏠' },
  { id: 'nav-services', label: 'Services', href: '/services', icon: '⚙️' },
  { id: 'nav-about', label: 'About', href: '/about', icon: 'ℹ️' },
  { id: 'nav-team', label: 'Team', href: '/team', icon: '👥' },
  { id: 'nav-contact', label: 'Contact', href: '/contact', icon: '📧' },
]

// ============================================================================
// MARQUEE DATA
// ============================================================================

export interface MarqueeItem {
  id: string
  text: string
}

export const marqueeData: MarqueeItem[] = [
  { id: 'marquee-1', text: 'UNREAL ENGINE 5' },
  { id: 'marquee-2', text: 'ZBRUSH' },
  { id: 'marquee-3', text: 'MAYA' },
  { id: 'marquee-4', text: 'SUBSTANCE PAINTER' },
  { id: 'marquee-5', text: 'BLENDER' },
  { id: 'marquee-6', text: 'UNREAL ENGINE 5' },
  { id: 'marquee-7', text: 'ZBRUSH' },
  { id: 'marquee-8', text: 'MAYA' },
]

// ============================================================================
// PORTFOLIO ITEMS
// ============================================================================

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    title: 'Cyberpunk Character',
    category: 'Character Design',
    description: 'Futuristic character model with advanced rigging',
    image: '/images/portfolio/1.jpg',
  },
  {
    id: 'portfolio-2',
    title: 'Game Environment',
    category: 'Environment Design',
    description: 'Immersive game world with detailed assets',
    image: '/images/portfolio/2.jpg',
  },
  {
    id: 'portfolio-3',
    title: 'Product Visualization',
    category: 'Product Animation',
    description: '3D product showcase with realistic materials',
    image: '/images/portfolio/3.jpg',
  },
  {
    id: 'portfolio-4',
    title: 'Character Animation',
    category: 'Animation',
    description: 'Smooth character animations and movements',
    image: '/images/portfolio/4.jpg',
  },
  {
    id: 'portfolio-5',
    title: 'Industrial Design',
    category: 'Design',
    description: 'Complex mechanical design and visualization',
    image: '/images/portfolio/5.jpg',
  },
  {
    id: 'portfolio-6',
    title: 'Creature Design',
    category: 'Character Design',
    description: 'Detailed creature model with realistic texturing',
    image: '/images/portfolio/6.jpg',
  },
  {
    id: 'portfolio-7',
    title: 'Environmental Art',
    category: 'Environment Design',
    description: 'Detailed environmental assets and world building',
    image: '/images/portfolio/7.jpg',
  },
]

// ============================================================================
// DATA FACTORY METHODS
// ============================================================================

/**
 * Get data by ID with type safety
 */
export function getDataById<T extends { id: string }>(data: T[], id: string): T | undefined {
  return data.find((item) => item.id === id)
}

/**
 * Filter data by category
 */
export function filterByCategory<T extends { category?: string }>(
  data: T[],
  category: string
): T[] {
  return data.filter((item) => item.category === category)
}

/**
 * Get paginated data
 */
export function getPaginatedData<T>(data: T[], page: number, pageSize: number): T[] {
  const start = page * pageSize
  const end = start + pageSize
  return data.slice(start, end)
}

/**
 * Search data by text
 */
export function searchData<T extends Record<string, any>>(
  data: T[],
  query: string,
  searchFields: (keyof T)[]
): T[] {
  const lowerQuery = query.toLowerCase()
  return data.filter((item) =>
    searchFields.some((field) => String(item[field]).toLowerCase().includes(lowerQuery))
  )
}
