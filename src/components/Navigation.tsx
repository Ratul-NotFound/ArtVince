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
  const [theme, setTheme] = useState('dark')

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

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Theme switching
    document.body.classList.remove('theme-dark', 'theme-light')
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen, theme])

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
      <div className="nav-container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
        <Link href="/" className="brand hover-trigger" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none'}}>
          <img src="/images/fabicon.png" alt="Artvince Logo" style={{height:'32px',width:'32px',borderRadius:'8px',boxShadow:'0 0 8px var(--accent-20)',alignSelf:'center'}} />
          <span className="brand-text" style={{textDecoration:'none',borderBottom:'none',fontWeight:700,letterSpacing:'2px',fontSize:'24px',lineHeight:'32px',alignSelf:'center'}}>ARTVINCE</span>
          {/* Professional accent glow effect */}
          <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'radial-gradient(circle,var(--accent-20) 40%,transparent 100%)',marginLeft:'4px',boxShadow:'0 0 12px var(--accent-20)',alignSelf:'center'}}></span>
        </Link>
       
        <style jsx global>{`
          .theme-switch-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid #2196f3;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(33, 150, 243, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          .theme-switch-btn:hover {
            background: rgba(33, 150, 243, 0.2);
            border-color: #2196f3;
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
          }
          .theme-switch-btn svg {
            transition: all 0.3s ease;
          }
        `}</style>
        
        {windowWidth <= 768 && (
          <button
            className={`hamburger-menu${isMobileMenuOpen ? ' active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            style={{ marginLeft: 12, zIndex: 20 }}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        )}

        <div
          className={`menu${windowWidth > 768 ? '' : isMobileMenuOpen ? ' mobile-active' : ''}`}
          style={
            windowWidth > 768
              ? {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  position: 'static',
                  background: 'none',
                  width: 'auto',
                  height: 'auto',
                  boxShadow: 'none',
                  padding: 0,
                  zIndex: 99,
                  transition: 'all 0.3s',
                }
              : {}
          }
        >
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
          {/* Theme Switch Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="theme-switch-btn"
            aria-label="Toggle theme"
            style={{ marginLeft: '20px' }}
          >
            {theme === 'dark' ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" fill="#fff" stroke="#2196f3" strokeWidth="2"/>
                <path d="M12 1v2M12 21v2M3.22 3.22l1.42 1.42M19.36 19.36l1.42 1.42M1 12h2M21 12h2M3.22 20.78l1.42-1.42M19.36 4.64l1.42-1.42" stroke="#2196f3" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#fff" stroke="#2196f3" strokeWidth="2"/>
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && windowWidth <= 768 && (
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'fixed',
              top: 24,
              right: 24,
              zIndex: 120,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <span style={{
              display: 'block',
              width: 32,
              height: 32,
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                width: '100%',
                height: 4,
                background: 'var(--accent)',
                borderRadius: 2,
                transform: 'rotate(45deg) translateY(-50%)',
                boxShadow: '0 0 8px var(--accent-20)',
                transition: 'all 0.3s',
              }}></span>
              <span style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                width: '100%',
                height: 4,
                background: 'var(--accent)',
                borderRadius: 2,
                transform: 'rotate(-45deg) translateY(-50%)',
                boxShadow: '0 0 8px var(--accent-20)',
                transition: 'all 0.3s',
              }}></span>
            </span>
          </button>
        )}

        {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
      </div>
    </nav>
  )
}