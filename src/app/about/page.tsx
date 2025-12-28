'use client'

import { Navigation, Footer } from '@/components'

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <Navigation />

      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>About Artvince</h1>
          <p>Creative Excellence Through Innovation</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <h2>Our Mission</h2>
          <p>
            Artvince is a creative design studio specializing in high-quality 3D character modeling, game-ready assets, and 
            graphic design. We bring ideas to life through detailed artistry, cutting-edge tools, and a passion for storytelling—
            serving game studios, creators, and brands worldwide.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Creative Passion</h3>
              <p>We pour heart and soul into every project, pushing creative boundaries.</p>
            </div>
            <div className="value-item">
              <h3>Quality Excellence</h3>
              <p>Industry-grade standards with meticulous attention to detail.</p>
            </div>
            <div className="value-item">
              <h3>Innovation First</h3>
              <p>Leveraging cutting-edge tools like Blender, Maya, and ZBrush.</p>
            </div>
            <div className="value-item">
              <h3>Client Success</h3>
              <p>Your vision is our priority. We collaborate to bring dreams to reality.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
