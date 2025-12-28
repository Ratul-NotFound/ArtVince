'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Initialize - no auto-check needed
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // Placeholder - add actual API call when backend is ready
      console.log('Login attempt:', { email })
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  const register = async (email: string, password: string, name: string) => {
    try {
      // Placeholder - add actual API call when backend is ready
      console.log('Register attempt:', { email, name })
    } catch (error) {
      console.error('Register error:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
