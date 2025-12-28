'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleLinkClick = () => {
      setIsMobileMenuOpen(false)
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const links = document.querySelectorAll('.menu-link')
    links.forEach(link => link.addEventListener('click', handleLinkClick))
    document.addEventListener('keydown', handleEscape)

    return () => {
      links.forEach(link => link.removeEventListener('click', handleLinkClick))
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleMenuItemHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (windowWidth > 768) {
      const text = e.currentTarget.querySelector('.link-text')
      if (text) {
        gsap.to(text, {
          letterSpacing: '3px',
          duration: 0.4,
          ease: 'power2.out',
        })
      }
      gsap.to(e.currentTarget, {
        y: -3,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleMenuItemLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (windowWidth > 768) {
      const text = e.currentTarget.querySelector('.link-text')
      if (text) {
        gsap.to(text, {
          letterSpacing: '1px',
          duration: 0.4,
          ease: 'power2.out',
        })
      }
      gsap.to(e.currentTarget, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-bg-effect"></div>
      <div className="nav-container">
        <Link href="/" className="brand hover-trigger">
          <span className="brand-text">ARTVINCE</span>
          <span className="brand-dot">.</span>
          <span className="brand-studio">STUDIO</span>
        </Link>
        
        <div className={`menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link
            href="/"
            className={`menu-link hover-trigger ${pathname === '/' ? 'active' : ''}`}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            <span className="link-bg"></span>
            <span className="link-text">Home</span>
            <span className="link-underline"></span>
          </Link>
          <Link
            href="/about"
            className={`menu-link hover-trigger ${pathname === '/about' ? 'active' : ''}`}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            <span className="link-bg"></span>
            <span className="link-text">About</span>
            <span className="link-underline"></span>
          </Link>
          <Link
            href="/services"
            className={`menu-link hover-trigger ${pathname === '/services' ? 'active' : ''}`}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            <span className="link-bg"></span>
            <span className="link-text">Services</span>
            <span className="link-underline"></span>
          </Link>
          <Link
            href="/team"
            className={`menu-link hover-trigger ${pathname === '/team' ? 'active' : ''}`}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            <span className="link-bg"></span>
            <span className="link-text">Team</span>
            <span className="link-underline"></span>
          </Link>
          <Link
            href="/contact"
            className={`menu-link hover-trigger ${pathname === '/contact' ? 'active' : ''}`}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            <span className="link-bg"></span>
            <span className="link-text">Contact</span>
            <span className="link-underline"></span>
          </Link>
        </div>

        <button 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="menu-label">MENU</span>
        </button>

        {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
      </div>
    </nav>
  )
}
