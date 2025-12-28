'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('footer-link')) {
        gsap.to(target, {
          x: 10,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('footer-link')) {
        gsap.to(target, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    const links = footerRef.current.querySelectorAll('.footer-link')
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter as EventListener)
      link.addEventListener('mouseleave', handleMouseLeave as EventListener)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter as EventListener)
        link.removeEventListener('mouseleave', handleMouseLeave as EventListener)
      })
    }
  }, [])

  return (
    <footer id="contact" ref={footerRef} className="footer-professional">
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-label">Ready to Transform Your Vision?</p>
          <a href="mailto:info.artvince@gmail.com" className="footer-cta hover-trigger">
            Get In Touch
            <span className="arrow-icon">→</span>
          </a>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section">
          <div className="footer-links">
            <a href="mailto:info.artvince@gmail.com" className="footer-link hover-trigger">
              Email Us
            </a>
            <a href="tel:+8801311669293" className="footer-link hover-trigger">
              Call Us
            </a>
            <a href="#services" className="footer-link hover-trigger">
              Services
            </a>
            <a href="/team" className="footer-link hover-trigger">
              Team
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <span>© 2025 ARTVINCE.STUDIO</span>
            <span className="separator">•</span>
            <span>Premium 3D Design & Animation Solutions</span>
          </div>
          <div className="footer-socials">
            <span className="social-link hover-trigger">Instagram</span>
            <span className="social-link hover-trigger">LinkedIn</span>
            <span className="social-link hover-trigger">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
