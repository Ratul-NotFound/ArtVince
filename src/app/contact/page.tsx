'use client'

import { Navigation, Footer } from '@/components'

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <Navigation />

      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>Get In Touch</h1>
          <p>Let's Bring Your Vision to Life</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section" style={{ padding: 'clamp(40px, 8vw, 80px) 3%', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 40px)', marginBottom: 'clamp(20px, 5vw, 40px)', textAlign: 'center', fontFamily: 'var(--font-head)', background: 'linear-gradient(90deg, var(--text) 0%, var(--accent) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Let's Work Together
          </h2>
          <form style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: 'clamp(8px, 2vw, 12px) 16px', background: '#111', border: '1px solid var(--line)', borderRadius: '8px', color: '#fff', fontSize: 'clamp(12px, 2vw, 14px)', fontFamily: 'var(--font-body)' }} />
              <input type="email" placeholder="Your Email" style={{ padding: 'clamp(8px, 2vw, 12px) 16px', background: '#111', border: '1px solid var(--line)', borderRadius: '8px', color: '#fff', fontSize: 'clamp(12px, 2vw, 14px)', fontFamily: 'var(--font-body)' }} />
            </div>
            <input type="text" placeholder="Project Title" style={{ padding: 'clamp(8px, 2vw, 12px) 16px', background: '#111', border: '1px solid var(--line)', borderRadius: '8px', color: '#fff', fontSize: 'clamp(12px, 2vw, 14px)', fontFamily: 'var(--font-body)' }} />
            <textarea placeholder="Tell us about your project..." rows={6} style={{ padding: 'clamp(8px, 2vw, 12px) 16px', background: '#111', border: '1px solid var(--line)', borderRadius: '8px', color: '#fff', fontSize: 'clamp(12px, 2vw, 14px)', fontFamily: 'var(--font-body)', resize: 'vertical' }} />
            <button type="submit" style={{ padding: 'clamp(10px, 2vw, 14px) clamp(16px, 4vw, 32px)', background: 'var(--accent)', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: 'clamp(12px, 2vw, 16px)', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s ease' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section style={{ padding: 'clamp(40px, 8vw, 80px) 3%', background: 'rgba(204, 255, 0, 0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 40px)', marginBottom: 'clamp(30px, 5vw, 60px)', textAlign: 'center', fontFamily: 'var(--font-head)', background: 'linear-gradient(90deg, var(--text) 0%, var(--accent) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Get In Touch
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(20px, 4vw, 40px)', textAlign: 'center' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--accent)', marginBottom: '15px', fontFamily: 'var(--font-head)' }}>Email</h3>
              <p style={{ color: 'var(--dim)', fontSize: 'clamp(12px, 2vw, 14px)' }}>info.artvince@gmail.com</p>
              <p style={{ color: 'var(--dim)', fontSize: 'clamp(12px, 2vw, 14px)' }}>hello@artvince.com</p>
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--accent)', marginBottom: '15px', fontFamily: 'var(--font-head)' }}>Phone</h3>
              <p style={{ color: 'var(--dim)', fontSize: 'clamp(12px, 2vw, 14px)' }}>01311669293</p>
              <p style={{ color: 'var(--dim)', fontSize: 'clamp(12px, 2vw, 14px)' }}>0182-2220-44</p>
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--accent)', marginBottom: '15px', fontFamily: 'var(--font-head)' }}>Location</h3>
              <p style={{ color: 'var(--dim)', fontSize: 'clamp(12px, 2vw, 14px)' }}>Daffodil International University</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
