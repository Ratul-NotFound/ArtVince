/**
 * TYPE DEFINITIONS
 * Centralized TypeScript types and interfaces
 */

// ============================================================================
// USER & AUTH
// ============================================================================

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user' | 'guest'
  avatar?: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

// ============================================================================
// NAVIGATION
// ============================================================================

export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
}

export interface NavState {
  isOpen: boolean
  activeItem: string | null
  isScrolled: boolean
}

// ============================================================================
// SERVICES
// ============================================================================

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image?: string
  path: string
  category?: string
  tags?: string[]
}

export interface ServiceDetail extends Service {
  fullDescription: string
  features: string[]
  gallery?: string[]
  testimonials?: Testimonial[]
}

// ============================================================================
// TEAM
// ============================================================================

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  email?: string
  socials?: Record<string, string>
  specialties?: string[]
}

// ============================================================================
// TESTIMONIALS
// ============================================================================

export interface Testimonial {
  id: string
  author: string
  role: string
  company?: string
  content: string
  rating: number
  image?: string
  date: string
}

// ============================================================================
// API RESPONSES
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  statusCode: number
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// ============================================================================
// UI COMPONENTS
// ============================================================================

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type InputSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export interface InputProps {
  size?: InputSize
  placeholder?: string
  disabled?: boolean
  error?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
}

// ============================================================================
// PORTFOLIO & PROJECTS
// ============================================================================

export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  image: string
  images?: string[]
  link?: string
  year: number
  tags?: string[]
}

// ============================================================================
// FORM DATA
// ============================================================================

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

// ============================================================================
// THEME & STYLING
// ============================================================================

export interface ThemeConfig {
  colors: Record<string, string>
  fonts: Record<string, string>
  breakpoints: Record<string, number>
}

export interface ResponsiveValue<T> {
  mobile?: T
  tablet?: T
  desktop?: T
}

// ============================================================================
// CURSOR & INTERACTIONS
// ============================================================================

export interface CursorState {
  x: number
  y: number
  isActive: boolean
  isHovering: boolean
}

// ============================================================================
// ERROR HANDLING
// ============================================================================

export interface AppError {
  code: string
  message: string
  statusCode: number
  details?: Record<string, any>
}
