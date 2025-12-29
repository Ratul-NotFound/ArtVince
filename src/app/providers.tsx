'use client'

import { ReactNode } from 'react'
import { AuthProvider } from '@/context/AuthContext'

/**
 * Providers component - wraps the entire application with necessary providers
 * Add new providers here for global state management, authentication, etc.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
