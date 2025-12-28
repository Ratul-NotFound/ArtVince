'use client'

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Rajdhani:wght@500;600;700&family=Syncopate:wght@700&display=swap');

      :root {
        --bg: #080808;
        --surface: #111;
        --text: #ffffff;
        --dim: #888;
        --accent: #CCFF00;
        --accent-glow: rgba(204, 255, 0, 0.4);
        --line: rgba(255, 255, 255, 0.1);
        --font-head: 'Syncopate', sans-serif;
        --font-ui: 'Rajdhani', sans-serif;
        --font-body: 'Inter', sans-serif;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        cursor: none;
      }

      html, body {
        background-color: var(--bg);
        color: var(--text);
        scroll-behavior: smooth;
        font-family: var(--font-body);
        overflow-x: hidden;
        font-size: 16px;
        opacity: 1;
        width: 100%;
        height: auto;
        overflow-y: auto;
      }

      /* --- BACKGROUND FX --- */
      .bg-grid {
        position: fixed;
        inset: 0;
        z-index: -1;
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 80%);
        opacity: 0.5;
      }

      /* --- CURSOR --- */
      .cursor-dot {
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        box-shadow: 0 0 8px var(--accent), 0 0 16px rgba(204, 255, 0, 0.4);
        will-change: left, top;
        transform: translate(-50%, -50%);
        left: -10px;
        top: -10px;
      }

      .cursor-circle {
        width: 40px;
        height: 40px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        will-change: left, top;
        transform: translate(-50%, -50%);
        left: -10px;
        top: -10px;
      }

      body.hovered .cursor-circle {
        border-color: var(--accent);
        box-shadow: 0 0 20px var(--accent-glow), inset 0 0 15px rgba(204, 255, 0, 0.05);
        border-width: 3px;
      }

      body.hovered .cursor-dot {
        box-shadow: 0 0 12px var(--accent), 0 0 24px rgba(204, 255, 0, 0.5);
      }

      /* --- NAV --- */
      .nav {
        position: fixed;
        top: 0;
        width: 100%;
        padding: clamp(12px, 3vw, 24px) 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        background: linear-gradient(135deg, rgba(8, 8, 8, 0.85) 0%, rgba(15, 15, 25, 0.80) 100%);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        border-bottom: 1px solid rgba(204, 255, 0, 0.08);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(204, 255, 0, 0.05);
        overflow: visible;
        position: relative;
      }

      .nav::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 20% 0%, rgba(204, 255, 0, 0.03) 0%, transparent 50%);
        pointer-events: none;
        z-index: 0;
      }

      .nav-bg-effect {
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, rgba(204, 255, 0, 0.02) 0%, transparent 25%, transparent 75%, rgba(204, 255, 0, 0.02) 100%);
        animation: shimmer 3s ease-in-out infinite;
        pointer-events: none;
      }

      @keyframes shimmer {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.7; }
      }

      .nav.scrolled {
        padding: clamp(8px, 2vw, 16px) 5%;
        background: linear-gradient(135deg, rgba(8, 8, 8, 0.95) 0%, rgba(12, 12, 20, 0.92) 100%);
        border-bottom: 1px solid rgba(204, 255, 0, 0.2);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(204, 255, 0, 0.08);
      }

      .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 clamp(0px, 1vw, 20px);
        position: relative;
        z-index: 1;
      }

      .brand {
        font-family: var(--font-ui);
        font-size: clamp(16px, 2.8vw, 26px);
        font-weight: 900;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--accent);
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: flex;
        gap: clamp(3px, 0.8vw, 8px);
        align-items: center;
        align-items: baseline;
        position: relative;
        white-space: nowrap;
        min-width: fit-content;
        flex-shrink: 0;
      }

      .brand-glow {
        position: absolute;
        inset: -10px;
        background: radial-gradient(circle, rgba(204, 255, 0, 0.2) 0%, transparent 70%);
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
        filter: blur(8px);
      }

      .brand:hover .brand-glow {
        opacity: 1;
      }

      .brand:hover {
        filter: drop-shadow(0 0 15px rgba(204, 255, 0, 0.6)) drop-shadow(0 0 30px rgba(204, 255, 0, 0.2));
        transform: scale(1.05);
        letter-spacing: 3px;
      }

      .brand-text {
        position: relative;
        display: inline-block;
        color: var(--accent);
        font-weight: 900;
      }

      .brand-dot {
        color: var(--accent);
        font-size: 1.4em;
        animation: float 3s ease-in-out infinite;
        text-shadow: 0 0 10px rgba(204, 255, 0, 0.5);
      }

      @keyframes float {
        0%, 100% { 
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        50% { 
          transform: translateY(-3px) scale(1.1);
          opacity: 0.8;
        }
      }

      .brand-studio {
        position: relative;
        color: #ffffff;
        font-weight: 700;
        letter-spacing: 0.5px;
      }

      .hamburger-menu {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        width: clamp(24px, 5vw, 32px);
        height: clamp(20px, 4vw, 28px);
        justify-content: center;
        align-items: center;
        background: rgba(204, 255, 0, 0.05);
        border: 1px solid rgba(204, 255, 0, 0.15);
        border-radius: 8px;
        padding: clamp(6px, 1.5vw, 10px);
        z-index: 100;
        position: relative;
        transition: all 0.3s ease;
      }

      .hamburger-menu:hover {
        background: rgba(204, 255, 0, 0.1);
        border-color: rgba(204, 255, 0, 0.3);
        filter: drop-shadow(0 0 8px rgba(204, 255, 0, 0.4));
        transform: scale(1.05);
      }

      .hamburger-line {
        width: 100%;
        height: clamp(2px, 0.4vw, 3px);
        background: linear-gradient(90deg, var(--accent), rgba(204, 255, 0, 0.8));
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        border-radius: 2px;
        box-shadow: 0 0 8px rgba(204, 255, 0, 0.3);
      }

      .hamburger-menu.active .hamburger-line:nth-child(1) {
        transform: translateY(calc(5px + 2.5px)) rotate(45deg);
      }

      .hamburger-menu.active .hamburger-line:nth-child(2) {
        opacity: 0;
        transform: translateX(-10px);
      }

      .hamburger-menu.active .hamburger-line:nth-child(3) {
        transform: translateY(calc(-5px - 2.5px)) rotate(-45deg);
      }

      .menu-label {
        position: absolute;
        font-size: clamp(7px, 1.2vw, 9px);
        letter-spacing: 1px;
        color: var(--accent);
        font-family: var(--font-ui);
        top: 100%;
        margin-top: 6px;
        font-weight: 700;
        white-space: nowrap;
        text-shadow: 0 0 8px rgba(204, 255, 0, 0.3);
        animation: slideInLabel 0.3s ease;
      }

      @keyframes slideInLabel {
        from {
          opacity: 0;
          transform: translateY(-3px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .mobile-menu-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 99;
        animation: fadeInOverlay 0.3s ease;
      }

      @keyframes fadeInOverlay {
        from { 
          opacity: 0;
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
        }
        to { 
          opacity: 1;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      }

      .menu {
        display: flex;
        gap: clamp(20px, 3vw, 45px);
        align-items: center;
        position: relative;
      }

      .menu-link {
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
        font-size: clamp(10px, 1.4vw, 13px);
        font-family: var(--font-ui);
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        white-space: nowrap;
        padding: clamp(6px, 1vw, 12px);
        border-radius: 6px;
      }

      .link-bg {
        position: absolute;
        inset: 0;
        background: rgba(204, 255, 0, 0.05);
        border-radius: 6px;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: -1;
      }

      .link-text {
        position: relative;
        z-index: 2;
        transition: all 0.3s ease;
        display: block;
      }

      .link-underline {
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, rgba(204, 255, 0, 0.4), var(--accent), rgba(204, 255, 0, 0.4));
        transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
        box-shadow: 0 0 0 rgba(204, 255, 0, 0.4);
      }

      .menu-link:hover {
        color: var(--accent);
        text-shadow: 0 0 12px rgba(204, 255, 0, 0.6);
        transform: translateY(-2px);
      }

      .menu-link:hover .link-bg {
        opacity: 1;
        transform: scaleX(1.1);
      }

      .menu-link:hover .link-underline {
        width: 100%;
        box-shadow: 0 0 12px rgba(204, 255, 0, 0.5);
      }

      .menu-link.active {
        color: var(--accent);
        text-shadow: 0 0 15px rgba(204, 255, 0, 0.6);
      }

      .menu-link.active .link-bg {
        opacity: 1;
      }

      .menu-link.active .link-underline {
        width: 100%;
        box-shadow: 0 0 15px rgba(204, 255, 0, 0.6);
      }

      /* --- HERO PROFESSIONAL PORTFOLIO --- */
      .hero-professional {
        min-height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 5% 30px;
        position: relative;
        border-bottom: 1px solid var(--line);
        background: linear-gradient(135deg, rgba(8, 8, 8, 0.99) 0%, rgba(13, 13, 13, 0.97) 50%, rgba(8, 8, 8, 0.99) 100%);
        overflow: hidden;
      }

      .hero-glow-bg {
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 80% 80% at 50% 0%, rgba(204, 255, 0, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 120% 100% at 50% 100%, rgba(204, 255, 0, 0.04) 0%, transparent 60%);
        pointer-events: none;
        z-index: 1;
        animation: ambient-glow 8s ease-in-out infinite;
      }

      @keyframes ambient-glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.1); }
      }

      .hero-professional::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(circle at 20% 50%, rgba(204, 255, 0, 0.05) 0%, transparent 40%),
          radial-gradient(circle at 80% 50%, rgba(204, 255, 0, 0.03) 0%, transparent 40%);
        pointer-events: none;
        z-index: 1;
      }

      .hero-professional-content {
        position: relative;
        z-index: 10;
        width: 100%;
        max-width: 1400px;
      }

      .hero-intro {
        text-align: center;
        margin-bottom: 25px;
        perspective: 1200px;
      }

      .hero-title-animated {
        font-family: var(--font-head);
        font-size: clamp(28px, 5vw, 72px);
        font-weight: 700;
        color: var(--text);
        line-height: 1.05;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 
          0 8px 30px rgba(0, 0, 0, 0.8),
          0 0 50px rgba(204, 255, 0, 0.12);
        margin-bottom: 12px;
        transform: translate3d(0, 0, 0);
      }

      .hero-word {
        display: block;
        will-change: transform, opacity;
      }

      .hero-word.hero-accent {
        background: linear-gradient(120deg, var(--accent) 0%, #d4ff00 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: none;
        filter: drop-shadow(0 8px 16px rgba(204, 255, 0, 0.25));
      }

      .hero-subtitle-animated {
        font-family: var(--font-body);
        font-size: clamp(12px, 1.8vw, 14px);
        color: rgba(255, 255, 255, 0.75);
        line-height: 1.5;
        max-width: 650px;
        margin: 0 auto 12px;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        letter-spacing: 0.5px;
        will-change: transform, opacity;
      }

      .scroll-hint {
        font-family: var(--font-ui);
        font-size: 10px;
        color: var(--accent);
        letter-spacing: 2px;
        text-transform: uppercase;
        opacity: 0.6;
        animation: float-hint 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        will-change: transform, opacity;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .scroll-hint:hover {
        opacity: 1;
        transform: scale(1.05);
      }

      @keyframes float-hint {
        0%, 100% { 
          opacity: 0.5;
          transform: translateY(0);
        }
        50% { 
          opacity: 1;
          transform: translateY(-8px);
        }
      }

      .portfolio-carousel {
        display: flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        gap: 20px;
        perspective: 1500px;
        min-height: 360px;
        margin-bottom: 25px;
        position: relative;
        will-change: transform;
        transition: all 0.3s ease;
      }

      .portfolio-carousel:hover {
        filter: drop-shadow(0 0 40px rgba(204, 255, 0, 0.1));
      }

      .portfolio-carousel:active {
        cursor: grabbing;
      }

      .portfolio-card {
        position: absolute;
        width: 280px;
        height: 380px;
        border-radius: 16px;
        overflow: visible;
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        opacity: 0.4;
        scale: 0.8;
        cursor: grab;
        will-change: transform, opacity, filter, box-shadow;
        transform-style: preserve-3d;
      }

      .portfolio-card::before {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(204, 255, 0, 0.1) 0%, transparent 50%, rgba(204, 255, 0, 0.05) 100%);
        opacity: 0;
        transition: opacity 0.6s ease;
        z-index: -1;
      }

      .portfolio-card::after {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: 16px;
        background: conic-gradient(from 45deg, var(--accent), rgba(204, 255, 0, 0), var(--accent));
        opacity: 0;
        z-index: -2;
        transition: opacity 0.4s ease;
        filter: blur(8px);
      }

      .portfolio-card:hover::after {
        opacity: 0.3;
      }

      .portfolio-card::after {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: 16px;
        background: conic-gradient(from 45deg, var(--accent), rgba(204, 255, 0, 0), var(--accent));
        opacity: 0;
        z-index: -2;
        transition: opacity 0.4s ease;
        filter: blur(8px);
      }

      .portfolio-card:hover::after {
        opacity: 0.3;
      }

      .portfolio-card:active {
        cursor: grabbing;
      }

      .card-shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transform: skewX(-20deg);
        z-index: 10;
        pointer-events: none;
        opacity: 0;
      }

      .portfolio-card:hover .card-shine {
        animation: shine-sweep 0.6s ease-in-out;
      }

      @keyframes shine-sweep {
        0% { left: -100%; opacity: 0; }
        20% { opacity: 0.5; }
        50% { opacity: 1; }
        80% { opacity: 0.5; }
        100% { left: 100%; opacity: 0; }
      }

      .card-content {
        position: relative;
        width: 100%;
        height: 280px;
        overflow: hidden;
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        border: 2px solid rgba(204, 255, 0, 0.15);
        border-radius: 14px;
        margin-bottom: 15px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(204, 255, 0, 0.1);
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .portfolio-card:hover .card-content {
        border-color: rgba(204, 255, 0, 0.4);
        box-shadow: 0 30px 80px rgba(204, 255, 0, 0.25), inset 0 1px 0 rgba(204, 255, 0, 0.2);
      }

      .card-overlay {
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(circle at 30% 30%, rgba(204, 255, 0, 0.2) 0%, transparent 60%),
          linear-gradient(135deg, rgba(204, 255, 0, 0.08) 0%, transparent 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: 5;
      }

      .portfolio-card:hover .card-overlay {
        opacity: 1;
      }

      .card-content img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        filter: brightness(0.75) contrast(1.2) saturate(1);
      }

      .portfolio-card:hover .card-content img {
        filter: brightness(1.1) contrast(1.4) saturate(1.4);
        scale: 1.08;
      }

      .card-info {
        padding: 0;
        position: relative;
        z-index: 5;
      }

      .card-category {
        display: inline-block;
        font-family: var(--font-ui);
        font-size: 10px;
        font-weight: 700;
        color: var(--bg);
        background: var(--accent);
        padding: 4px 10px;
        border-radius: 20px;
        margin-bottom: 8px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(204, 255, 0, 0.2);
      }

      .portfolio-card:hover .card-category {
        box-shadow: 0 6px 20px rgba(204, 255, 0, 0.4);
        transform: scale(1.05);
      }

      .card-info h3 {
        font-family: var(--font-ui);
        font-size: 14px;
        font-weight: 700;
        color: var(--accent);
        letter-spacing: 1px;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 5px;
        transition: all 0.3s ease;
      }

      .portfolio-card:hover .card-info h3 {
        text-shadow: 0 0 12px var(--accent), 0 0 24px rgba(204, 255, 0, 0.3);
      }

      .card-info p {
        font-family: var(--font-body);
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
        letter-spacing: 1px;
        transition: color 0.3s ease;
      }

      .portfolio-card:hover .card-info p {
        color: rgba(204, 255, 0, 0.8);
      }

      .cta-button {
        padding: 18px 56px;
        border: 2px solid var(--accent);
        background: transparent;
        color: var(--accent);
        font-family: var(--font-ui);
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        overflow: hidden;
        box-shadow: 
          0 0 20px rgba(204, 255, 0, 0.2),
          inset 0 0 20px rgba(204, 255, 0, 0);
        outline: none;
        will-change: transform, box-shadow;
      }

      .cta-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: var(--accent);
        z-index: -1;
        transition: left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .cta-button::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, rgba(204, 255, 0, 0.2) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
      }

      .cta-button:hover {
        color: #000;
        box-shadow: 
          0 15px 50px rgba(204, 255, 0, 0.4),
          inset 0 0 20px rgba(204, 255, 0, 0.1);
        transform: translateY(-3px);
      }

      .cta-button:hover::before {
        left: 0;
      }

      .cta-button:hover::after {
        opacity: 1;
      }

      .cta-button:focus {
        box-shadow: 
          0 0 40px rgba(204, 255, 0, 0.6),
          inset 0 0 30px rgba(204, 255, 0, 0.1);
      }

      .cta-button:active {
        transform: translateY(-1px);
        box-shadow: 
          0 8px 25px rgba(204, 255, 0, 0.3),
          inset 0 0 20px rgba(204, 255, 0, 0.15);
      }

      .hero-cta {
        animation: button-float 3s ease-in-out infinite;
      }

      @keyframes button-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      /* --- INTERACTIVE ELEMENTS --- */
      .hint-icon {
        display: inline-block;
        margin-right: 8px;
        animation: arrow-bounce 2s ease-in-out infinite;
        font-size: 16px;
      }

      @keyframes arrow-bounce {
        0%, 100% { transform: translateY(0); opacity: 0.6; }
        50% { transform: translateY(-6px); opacity: 1; }
      }

      .interaction-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 15px;
        font-family: var(--font-body);
        font-size: 11px;
        color: rgba(255, 255, 255, 0.45);
        letter-spacing: 0.8px;
        text-transform: uppercase;
      }

      .indicator-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent);
        animation: pulse-dot 2s ease-in-out infinite;
      }

      @keyframes pulse-dot {
        0%, 100% { 
          transform: scale(1);
          opacity: 1;
        }
        50% { 
          transform: scale(1.3);
          opacity: 0.6;
        }
      }

      /* --- OLD GAME HERO (KEPT FOR BACKWARD COMPAT) --- */
      .hero-game {
        min-height: 60vh;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 80px 5% 60px;
        position: relative;
        border-bottom: 2px solid var(--line);
        background: linear-gradient(135deg, rgba(8, 8, 8, 0.95) 0%, rgba(17, 17, 17, 0.85) 100%);
        overflow: hidden;
      }

      .hero-game::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(circle at 20% 50%, rgba(204, 255, 0, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(204, 255, 0, 0.03) 0%, transparent 50%);
        pointer-events: none;
        z-index: 1;
      }

      .hero-game-content {
        position: relative;
        z-index: 10;
        width: 100%;
        max-width: 1200px;
      }

      .hero-header {
        text-align: center;
        margin-bottom: 50px;
      }

      .hero-header h2 {
        font-family: var(--font-head);
        font-size: 48px;
        font-weight: 700;
        color: var(--text);
        text-transform: uppercase;
        letter-spacing: 4px;
        text-shadow: 0 4px 20px rgba(204, 255, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.8);
        margin-bottom: 10px;
      }

      .hero-header p {
        font-family: var(--font-ui);
        font-size: 14px;
        color: var(--accent);
        letter-spacing: 3px;
        text-transform: uppercase;
        opacity: 0.8;
      }

      .cards-carousel {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        perspective: 1200px;
        margin-bottom: 50px;
        cursor: grab;
        user-select: none;
        min-height: 360px;
        position: relative;
      }

      .cards-carousel:active {
        cursor: grabbing;
      }

      .character-card {
        position: absolute;
        width: 280px;
        height: 320px;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        opacity: 0;
        scale: 0;
        filter: brightness(0.6);
        z-index: 10;
        pointer-events: none;
      }

      .character-card.active {
        pointer-events: auto;
      }

      .card-image {
        position: absolute;
        inset: 0;
        overflow: hidden;
        border: 2px solid rgba(204, 255, 0, 0.3);
        border-radius: 6px;
      }

      .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
        filter: brightness(0.75) contrast(1.2) saturate(1.1);
      }

      .character-card:hover .card-image img {
        filter: brightness(0.95) contrast(1.3) saturate(1.3);
        scale: 1.05;
      }

      .card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 20px;
        opacity: 0;
        transition: all 0.4s ease;
        border-radius: 6px;
      }

      .character-card:hover .card-overlay {
        opacity: 1;
      }

      .card-title {
        font-family: var(--font-ui);
        font-size: 16px;
        font-weight: 700;
        color: var(--accent);
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 5px;
      }

      .card-category {
        font-family: var(--font-ui);
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      .game-ui {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px;
        background: linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(13, 13, 13, 0.8) 100%);
        border: 2px solid var(--line);
        border-radius: 8px;
        backdrop-filter: blur(10px);
      }

      .counter {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: var(--font-ui);
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      .counter-label {
        color: var(--dim);
      }

      .counter-number {
        color: var(--accent);
        font-weight: 700;
        font-size: 18px;
        min-width: 60px;
      }

      .controls {
        display: flex;
        gap: 15px;
      }

      .control-btn {
        width: 50px;
        height: 50px;
        border: 2px solid var(--accent);
        background: transparent;
        color: var(--accent);
        font-size: 18px;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }

      .control-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .control-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--accent);
        z-index: -1;
        width: 0;
        transition: width 0.3s ease;
      }

      .control-btn:not(:disabled):hover {
        color: #000;
        box-shadow: 0 0 20px rgba(204, 255, 0, 0.4);
      }

      .control-btn:not(:disabled):hover::before {
        width: 100%;
      }

      .control-btn:not(:disabled):active {
        transform: scale(0.95);
      }

      .hint-text {
        font-family: var(--font-ui);
        font-size: 12px;
        color: var(--dim);
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      /* --- OLD CAROUSEL CSS (KEPT FOR BACKWARD COMPAT) --- */
      .hero-assets {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
        z-index: 0;
        overflow-x: auto;
        overflow-y: hidden;
        gap: 60px;
        padding: 0 10%;
        scroll-snap-type: x mandatory;
        perspective: 1200px;
        scrollbar-width: none;
        -ms-overflow-style: none;
        will-change: scroll-position;
      }

      .hero-assets::-webkit-scrollbar {
        display: none;
      }

      .asset-preview {
        position: relative;
        width: 320px;
        height: 320px;
        min-width: 320px;
        min-height: 320px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
        scroll-snap-align: center;
        scroll-snap-stop: always;
        border: 2px solid var(--accent);
        border-radius: 8px;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5),
          0 0 40px rgba(204, 255, 0, 0.15),
          inset 0 0 30px rgba(204, 255, 0, 0.05);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transform-style: preserve-3d;
        pointer-events: auto;
        opacity: 0.6;
        filter: brightness(0.7) drop-shadow(0 0 20px rgba(204, 255, 0, 0));
        animation: cardIdle 3s ease-in-out infinite;
      }

      .asset-preview::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(204, 255, 0, 0.2) 0%, rgba(204, 255, 0, 0) 100%);
        z-index: 3;
        pointer-events: none;
        border-radius: 6px;
        opacity: 0;
        transition: opacity 0.5s ease;
        animation: glitchOverlay 4s ease-in-out infinite;
      }

      .asset-preview::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        z-index: 3;
        pointer-events: none;
        border-radius: 6px;
        opacity: 0;
        transition: opacity 0.5s ease;
        box-shadow: inset 0 0 30px rgba(204, 255, 0, 0.1);
      }

      @keyframes cardIdle {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-8px);
        }
      }

      .asset-preview:hover {
        transform: scale(1.15) translateY(-25px) rotateX(12deg) rotateZ(-2deg);
        box-shadow: 0 50px 120px rgba(204, 255, 0, 0.4),
          0 0 60px rgba(204, 255, 0, 0.6),
          inset 0 0 60px rgba(204, 255, 0, 0.25),
          0 0 100px rgba(204, 255, 0, 0.3);
        border-color: rgba(204, 255, 0, 1);
        border-width: 3px;
        opacity: 1;
        filter: brightness(1.3) drop-shadow(0 0 40px rgba(204, 255, 0, 0.8));
        animation: none;
      }

      .asset-preview:hover::before {
        opacity: 1;
      }

      .asset-preview:hover::after {
        opacity: 1;
        animation: shineEffect 0.8s ease-in-out;
      }

      .asset-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.85) contrast(1.2) saturate(1.15) hue-rotate(-5deg);
        transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
        transform: scale(1.08);
        will-change: transform, filter;
      }

      .asset-preview:hover img {
        filter: brightness(1.2) contrast(1.35) saturate(1.4) hue-rotate(0deg);
        transform: scale(1.02);
      }

      /* --- MARQUEE --- */
      .marquee-wrap {
        padding: 20px 0;
        background: var(--accent);
        color: #000;
        overflow: hidden;
        display: flex;
        transform: rotate(-1deg) scale(1.02);
        z-index: 5;
        position: relative;
      }

      .marquee-inner {
        display: flex;
        white-space: nowrap;
        animation: scroll 20s linear infinite;
      }

      .marquee-item {
        font-family: var(--font-head);
        font-size: 30px;
        font-weight: 700;
        margin: 0 40px;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      /* --- HERO ASSET CARD ANIMATIONS --- */
      @keyframes shineEffect {
        0% {
          box-shadow: inset -100px -100px 50px rgba(255, 255, 255, 0);
        }
        50% {
          box-shadow: inset 100px 100px 50px rgba(255, 255, 255, 0.2);
        }
        100% {
          box-shadow: inset 0 0 30px rgba(204, 255, 0, 0.1);
        }
      }

      /* Scroll perspective states */
      .asset-preview.left-side {
        opacity: 0.45;
        filter: brightness(0.5) drop-shadow(0 0 10px rgba(204, 255, 0, 0.2));
        transform: perspective(1200px) rotateY(25deg) scale(0.85) translateX(-20px);
      }

      .asset-preview.center {
        opacity: 1;
        filter: brightness(1) drop-shadow(0 0 30px rgba(204, 255, 0, 0.4));
        transform: perspective(1200px) rotateY(0deg) scale(1);
        box-shadow:
          0 25px 50px rgba(0, 0, 0, 0.5),
          0 0 40px rgba(204, 255, 0, 0.25),
          inset 0 0 30px rgba(204, 255, 0, 0.08);
        border-color: rgba(204, 255, 0, 0.8);
      }

      .asset-preview.right-side {
        opacity: 0.45;
        filter: brightness(0.5) drop-shadow(0 0 10px rgba(204, 255, 0, 0.2));
        transform: perspective(1200px) rotateY(-25deg) scale(0.85) translateX(20px);
      }

      /* --- FAST CARD REVEAL ANIMATIONS --- */
      @keyframes slideFromLeft {
        0% {
          transform: translateX(-120%) scale(0.8);
          opacity: 0;
        }
        100% {
          transform: translateX(0) scale(1);
          opacity: 1;
        }
      }

      @keyframes slideFromRight {
        0% {
          transform: translateX(120%) scale(0.8);
          opacity: 0;
        }
        100% {
          transform: translateX(0) scale(1);
          opacity: 1;
        }
      }

      @keyframes slideFromTop {
        0% {
          transform: translateY(-120%) scale(0.8);
          opacity: 0;
        }
        100% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
      }

      @keyframes slideFromBottom {
        0% {
          transform: translateY(120%) scale(0.8);
          opacity: 0;
        }
        100% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
      }

      @keyframes rotateReveal {
        0% {
          transform: rotate(-15deg) scale(0.5);
          opacity: 0;
        }
        100% {
          transform: rotate(0) scale(1);
          opacity: 1;
        }
      }

      .card-fast-reveal {
        animation: slideFromLeft 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .card-fast-reveal.from-left {
        animation: slideFromLeft 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .card-fast-reveal.from-right {
        animation: slideFromRight 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .card-fast-reveal.from-top {
        animation: slideFromTop 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .card-fast-reveal.from-bottom {
        animation: slideFromBottom 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .card-fast-reveal.rotate {
        animation: rotateReveal 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      /* --- WORK GRID --- */
      .section-header {
        padding: clamp(50px, 10vw, 120px) 5% clamp(30px, 6vw, 60px);
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }

      .sec-title {
        font-family: var(--font-head);
        font-size: clamp(32px, 5vw, 48px);
        color: #fff;
        line-height: 1;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: clamp(15px, 3vw, 40px);
        padding: 0 5%;
        padding-bottom: clamp(40px, 10vw, 100px);
        scroll-behavior: smooth;
      }

      /* The Card Container - Tech Frame Style */
      .card {
        position: relative;
        height: 50vh;
        width: 100%;
        background: #0a0a15;
        cursor: pointer;
        perspective: 1000px;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        /* Tech Corners */
        clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%);
        overflow: hidden;
      }

      .card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--accent);
        z-index: 10;
        transform-origin: top;
        transform: scaleY(1);
        transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        pointer-events: none;
      }

      .card.revealed::before {
        transform: scaleY(0);
      }

      /* Gaming Neon Glow Border Animation */
      .card::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, 
          var(--accent) 0%, 
          rgba(204, 255, 0, 0.5) 25%,
          transparent 50%,
          rgba(204, 255, 0, 0.5) 75%,
          var(--accent) 100%);
        background-size: 200% 200%;
        opacity: 0;
        z-index: 11;
        pointer-events: none;
        animation: gamingGlow 3s ease-in-out infinite;
        filter: blur(8px);
        mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
        -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      }

      @keyframes gamingGlow {
        0% { 
          opacity: 0.3;
          background-position: 0% 0%;
        }
        50% { 
          opacity: 0.6;
          background-position: 100% 100%;
        }
        100% { 
          opacity: 0.3;
          background-position: 0% 0%;
        }
      }

      .card:hover::after {
        opacity: 0.8;
      }

      .card:active {
        transform: scale(0.98);
      }

      .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        transform-style: flat;
        transition: transform 0.2s ease, box-shadow 0.5s ease;
        box-shadow: 
          0 0 20px rgba(204, 255, 0, 0.3),
          0 20px 60px rgba(0, 0, 0, 0.9),
          inset 0 1px 0 rgba(204, 255, 0, 0.1);
      }

      .card:hover .card-inner {
        box-shadow: 
          0 0 40px rgba(204, 255, 0, 0.6),
          0 40px 100px rgba(204, 255, 0, 0.3),
          inset 0 1px 0 rgba(204, 255, 0, 0.2);
      }

      /* The Image */
      .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.7) contrast(1.2) saturate(0.8) hue-rotate(-10deg);
        transform: scale(1.15);
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
      }

      /* Hover Effects with Gaming Vibe */
      .card:hover .card-img {
        transform: scale(1.03);
        filter: brightness(1.2) contrast(1.4) saturate(1.4) hue-rotate(5deg) drop-shadow(0 0 20px rgba(204, 255, 0, 0.4));
      }

      /* Tech Overlay Border - Gaming Style */
      .card-border {
        position: absolute;
        inset: 0;
        border: 2px solid rgba(204, 255, 0, 0.2);
        z-index: 1;
        pointer-events: none;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 
          inset 0 0 40px rgba(204, 255, 0, 0),
          0 0 0 1px rgba(204, 255, 0, 0.1);
      }

      .card:hover .card-border {
        border-color: var(--accent);
        box-shadow: 
          inset 0 0 40px rgba(204, 255, 0, 0.1),
          0 0 30px rgba(204, 255, 0, 0.4),
          0 0 60px rgba(204, 255, 0, 0.2);
        border-width: 2px;
      }

      /* Card Selection State - Gaming Highlight */
      .card.selected {
        box-shadow: 
          0 0 100px rgba(204, 255, 0, 0.9),
          0 0 60px rgba(204, 255, 0, 0.5),
          inset 0 0 60px rgba(204, 255, 0, 0.25) !important;
        border-color: rgba(204, 255, 0, 1) !important;
        z-index: 50 !important;
      }

      .card.selected .card-img {
        filter: brightness(1.4) saturate(1.6) contrast(1.4) hue-rotate(10deg) drop-shadow(0 0 30px rgba(204, 255, 0, 0.5)) !important;
      }

      .card.selected .card-border {
        box-shadow: 
          inset 0 0 60px rgba(204, 255, 0, 0.2),
          0 0 50px rgba(204, 255, 0, 0.4) !important;
      }

      /* Card Info - Gaming Style Gradient */
      .card-info {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: clamp(20px, 4vw, 30px);
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.6) 40%,
          rgba(0, 0, 0, 0.95) 100%
        );
        z-index: 10;
        transform: translateY(0);
        opacity: 1;
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        border-top: 2px solid rgba(204, 255, 0, 0.1);
      }

      .card:hover .card-info {
        border-top-color: rgba(204, 255, 0, 0.4);
        box-shadow: inset 0 20px 40px rgba(204, 255, 0, 0.1);
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.7) 40%,
          rgba(0, 0, 0, 0.98) 100%
        );
      }

      .service-badge {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(204, 255, 0, 0.1);
        border: 2px solid rgba(204, 255, 0, 0.4);
        color: var(--accent);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
        border-radius: 4px;
        z-index: 4;
        font-family: var(--font-ui);
        clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);
        transition: all 0.3s ease;
      }

      .card:hover .service-badge {
        background: rgba(204, 255, 0, 0.2);
        border-color: var(--accent);
        box-shadow: 0 0 20px rgba(204, 255, 0, 0.4);
      }

      .card-cat {
        font-family: var(--font-ui);
        color: var(--accent);
        letter-spacing: 2px;
        font-size: 11px;
        margin-bottom: 10px;
        text-transform: uppercase;
        display: inline-block;
        padding: 6px 14px;
        border: 1.5px solid rgba(204, 255, 0, 0.3);
        border-radius: 4px;
        transition: all 0.3s ease;
        font-weight: 700;
        position: relative;
        background: rgba(204, 255, 0, 0.05);
      }

      .card-cat::before {
        content: '';
        position: absolute;
        inset: -1px;
        border: 1.5px solid rgba(204, 255, 0, 0.15);
        border-radius: 4px;
        z-index: -1;
      }

      .card:hover .card-cat {
        border-color: var(--accent);
        box-shadow: 
          0 0 15px rgba(204, 255, 0, 0.4),
          inset 0 0 15px rgba(204, 255, 0, 0.1),
          0 0 8px rgba(204, 255, 0, 0.3);
        text-shadow: 0 0 10px rgba(204, 255, 0, 0.6);
        background: rgba(204, 255, 0, 0.1);
      }

      .card-title {
        font-family: var(--font-head);
        font-size: clamp(22px, 2.5vw, 32px);
        color: #fff;
        margin: 0;
        transition: all 0.4s ease;
        text-shadow: 0 0 20px rgba(204, 255, 0, 0);
        font-weight: 700;
        line-height: 1.3;
      }

      .card:hover .card-title {
        text-shadow: 0 0 25px rgba(204, 255, 0, 0.5), 0 0 50px rgba(204, 255, 0, 0.2);
        letter-spacing: 1px;
        color: var(--accent);
      }

      /* Gaming Service Card Enhancements */
      .service-glow {
        position: absolute;
        inset: 0;
        background: transparent;
        pointer-events: none;
        z-index: 0;
        opacity: 0;
        animation: none;
        display: none;
      }

      .service-badge {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, rgba(204, 255, 0, 0.2), rgba(204, 255, 0, 0.05));
        border: 2px solid rgba(204, 255, 0, 0.3);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-ui);
        font-size: 20px;
        font-weight: 900;
        color: var(--accent);
        z-index: 7;
        box-shadow: 0 0 20px rgba(204, 255, 0, 0.2);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        clip-path: polygon(0 0, 85% 0, 100% 85%, 100% 100%, 0 100%);
      }

      .card:hover .service-badge {
        background: linear-gradient(135deg, rgba(204, 255, 0, 0.3), rgba(204, 255, 0, 0.1));
        border-color: var(--accent);
        box-shadow: 0 0 40px rgba(204, 255, 0, 0.4), inset 0 0 20px rgba(204, 255, 0, 0.1);
        transform: scale(1.1) translateY(-5px);
      }

      .service-accent-line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--accent), transparent);
        margin-top: 15px;
        transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .card:hover .service-accent-line {
        width: 100%;
      }

      /* --- ABOUT --- */
      .about-sec {
        padding: clamp(50px, 10vw, 100px) 5%;
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: clamp(30px, 6vw, 60px);
        border-top: 1px solid var(--line);
      }

      .profile-img {
        width: 100%;
        border-radius: 4px;
        filter: grayscale(100%);
        transition: 0.5s;
        border: 1px solid var(--line);
      }

      .profile-img:hover {
        filter: grayscale(0%);
        border-color: var(--accent);
      }

      .stat-row {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--line);
        padding: 25px 0;
        font-family: var(--font-ui);
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: 0.3s;
      }

      .stat-row:hover {
        padding-left: 20px;
        border-color: var(--accent);
        color: var(--accent);
      }

      /* --- FOOTER --- */
      .footer-professional {
        padding: clamp(60px, 12vw, 120px) 3%;
        border-top: 1px solid var(--line);
        background: linear-gradient(135deg, rgba(8, 8, 8, 0.99) 0%, rgba(13, 13, 13, 0.97) 100%);
        position: relative;
        overflow: hidden;
      }

      .footer-professional::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--accent) 50%, transparent);
      }

      .footer-content {
        max-width: 1400px;
        margin: 0 auto;
      }

      .footer-section {
        margin-bottom: 80px;
      }

      .footer-label {
        font-family: var(--font-ui);
        font-size: 13px;
        color: var(--accent);
        letter-spacing: 3px;
        text-transform: uppercase;
        margin-bottom: 30px;
        opacity: 0.8;
      }

      .footer-cta {
        font-family: var(--font-head);
        font-size: 48px;
        color: var(--text);
        line-height: 1.2;
        display: inline-block;
        margin-bottom: 60px;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .arrow-icon {
        display: inline-block;
        margin-left: 12px;
        transition: all 0.3s ease;
      }

      .footer-cta:hover {
        color: var(--accent);
        text-shadow: 0 0 20px var(--accent-glow);
        transform: translateY(-3px);
      }

      .footer-cta:hover .arrow-icon {
        transform: translateX(8px);
      }

      .footer-divider {
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, var(--accent), transparent);
        margin: 60px auto;
      }

      .footer-links {
        display: flex;
        justify-content: center;
        gap: 50px;
        margin-bottom: 100px;
      }

      .footer-link {
        font-family: var(--font-ui);
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
        letter-spacing: 2px;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
      }

      .footer-link::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 0;
        height: 1px;
        background: var(--accent);
        transition: width 0.3s ease;
      }

      .footer-link:hover {
        color: var(--accent);
      }

      .footer-link:hover::after {
        width: 100%;
      }

      .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid var(--line);
        padding-top: 40px;
        font-family: var(--font-ui);
        font-size: 12px;
        color: var(--dim);
        letter-spacing: 1px;
      }

      .footer-info {
        display: flex;
        gap: 15px;
        align-items: center;
      }

      .separator {
        color: var(--accent);
      }

      .footer-socials {
        display: flex;
        gap: 30px;
      }

      .social-link {
        font-size: 12px;
        color: var(--dim);
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .social-link:hover {
        color: var(--accent);
      }

      footer {
        padding: 150px 5%;
        text-align: center;
        border-top: 1px solid var(--line);
        background: #0b0b0b;
      }

      /* --- PRELOADER --- */
      .loader {
        position: fixed;
        inset: 0;
        background: #000;
        z-index: 20000;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease, pointer-events 0.3s ease;
        pointer-events: none;
      }

      .loader-text {
        font-family: var(--font-ui);
        color: var(--accent);
        letter-spacing: 4px;
        margin-bottom: 20px;
        font-size: 18px;
      }

      .loader-track {
        width: 250px;
        height: 2px;
        background: #222;
        position: relative;
        overflow: hidden;
      }

      .loader-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0%;
        background: var(--accent);
      }

      /* --- GLOBAL INTERACTIONS --- */
      a {
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      button {
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      input, textarea {
        transition: all 0.3s ease;
      }

      input:focus, textarea:focus {
        outline: none;
        border-color: var(--accent);
        box-shadow: 0 0 20px rgba(204, 255, 0, 0.2);
      }

      /* --- SMOOTH SCROLL --- */
      @supports (scroll-behavior: smooth) {
        html {
          scroll-behavior: smooth;
        }
      }

      /* --- SELECTION COLOR --- */
      ::selection {
        background: var(--accent);
        color: #000;
      }

      ::-moz-selection {
        background: var(--accent);
        color: #000;
      }

      /* --- RESPONSIVE DESIGN --- */
      @media (max-width: 1200px) {
        .nav {
          padding: 20px 3%;
        }
        .brand {
          font-size: 20px;
        }
        .menu {
          gap: 20px;
        }
        .hero {
          padding: 0 3%;
        }
        .hero-assets {
          padding: 0 5%;
          gap: 50px;
        }
        .asset-preview {
          width: 280px;
          height: 280px;
        }
        .grid {
          gap: 30px;
        }
        .card {
          height: 55vh;
        }
        .section-header {
          padding: 100px 3% 50px;
        }
        .sec-title {
          font-size: 40px;
        }
      }

      @media (max-width: 1024px) {
        .nav {
          padding: 18px 3%;
        }
        .brand {
          font-size: clamp(16px, 4vw, 22px);
        }
        .menu {
          gap: 25px;
        }
        .menu-link {
          font-size: clamp(10px, 1.2vw, 12px);
        }
        .hero {
          padding: 0 3%;
        }
        .hero-assets {
          padding: 0 3%;
          gap: 40px;
        }
        .asset-preview {
          width: 260px;
          height: 260px;
        }
        .grid {
          gap: 25px;
        }
        .card {
          height: 50vh;
        }
        .section-header {
          padding: 80px 3% 50px;
        }
        .sec-title {
          font-size: clamp(32px, 5vw, 48px);
        }

        /* Team and section grids */
        .team-grid,
        .blog-grid,
        .values-grid,
        .process-steps,
        .culture-highlights {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .team-card,
        .blog-card,
        .value-item,
        .process-step,
        .highlight,
        .tool-item {
          padding: 30px 25px;
        }

        .testimonials-section,
        .team-section,
        .blog-section {
          padding: 60px 3%;
        }

        .contact-content {
          gap: 40px;
        }
      }

      @media (max-width: 768px) {
        * {
          cursor: auto;
        }
        .cursor-dot,
        .cursor-circle {
          display: none;
        }

        .nav {
          padding: clamp(10px, 2vw, 14px) 3%;
          justify-content: space-between;
        }
        .nav-container {
          width: 100%;
          justify-content: space-between;
          max-width: 100%;
          padding: 0;
        }
        .brand {
          font-size: clamp(13px, 3.5vw, 18px);
          letter-spacing: 0.8px;
          gap: 2px;
          flex-shrink: 0;
          min-width: fit-content;
        }
        
        .brand-studio {
          font-size: clamp(10px, 2.5vw, 13px);
        }

        .brand-glow {
          inset: -6px;
        }

        .hamburger-menu {
          display: flex;
          width: clamp(24px, 4.5vw, 30px);
          height: clamp(20px, 3.5vw, 26px);
          gap: clamp(3px, 0.5vw, 5px);
          background: linear-gradient(135deg, rgba(204, 255, 0, 0.08) 0%, rgba(204, 255, 0, 0.04) 100%);
          border: 1px solid rgba(204, 255, 0, 0.2);
          border-radius: 8px;
          padding: clamp(5px, 1vw, 8px);
        }

        .hamburger-menu:active {
          background: linear-gradient(135deg, rgba(204, 255, 0, 0.12) 0%, rgba(204, 255, 0, 0.06) 100%);
          border-color: rgba(204, 255, 0, 0.3);
        }

        .menu-label {
          font-size: clamp(6px, 1vw, 8px);
          letter-spacing: 0.8px;
          top: 100%;
          margin-top: 4px;
        }

        .menu {
          display: none;
          flex-direction: column;
          gap: 0;
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, rgba(8, 8, 8, 0.98) 0%, rgba(12, 12, 18, 0.96) 100%);
          padding: 15px 0;
          border-bottom: 1.5px solid rgba(204, 255, 0, 0.15);
          z-index: 99;
          width: 100%;
          align-items: stretch;
          animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .menu.mobile-active {
          display: flex;
        }

        .menu-link {
          font-size: clamp(10px, 1.3vw, 12px);
          letter-spacing: 0.6px;
          padding: clamp(12px, 2vw, 16px) clamp(14px, 3vw, 20px);
          width: 100%;
          border-left: 3px solid transparent;
          position: relative;
          flex-direction: row;
          gap: 12px;
          align-items: center;
          text-shadow: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: transparent;
        }

        .menu-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--accent), rgba(204, 255, 0, 0.3));
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .menu-link:active,
        .menu-link:hover,
        .menu-link.active {
          background: rgba(204, 255, 0, 0.08);
          padding-left: clamp(18px, 4vw, 24px);
          color: var(--accent);
          text-shadow: 0 0 8px rgba(204, 255, 0, 0.4);
        }

        .menu-link:active::before,
        .menu-link:hover::before,
        .menu-link.active::before {
          transform: scaleY(1);
        }

        .link-bg,
        .link-underline {
          display: none;
        }

        .hero-professional {
          min-height: 100vh;
          padding: 60px 3% 40px;
        }
        .hero-intro {
          margin-bottom: 40px;
        }
        .hero-title-animated {
          font-size: clamp(24px, 5vw, 48px);
          margin-bottom: 15px;
        }
        .hero-subtitle-animated {
          font-size: clamp(13px, 3vw, 14px);
          max-width: 100%;
          margin-bottom: 15px;
        }
        .scroll-hint {
          font-size: 10px;
        }
        .portfolio-carousel {
          min-height: 300px;
          margin-bottom: 30px;
          gap: 10px;
        }
        .portfolio-card {
          width: clamp(200px, 70vw, 260px);
          height: clamp(280px, 100vw, 360px);
          border-radius: 12px;
        }
        .card-content {
          height: auto;
          margin-bottom: 10px;
        }
        .card-info h3 {
          font-size: 11px;
        }
        .card-info p {
          font-size: 10px;
        }
        .cta-button {
          padding: clamp(10px, 3vw, 14px) clamp(20px, 5vw, 36px);
          font-size: 11px;
        }

        .hero-game {
          min-height: auto;
          padding: 40px 3%;
        }
        .hero-header h2 {
          font-size: clamp(24px, 5vw, 40px);
          letter-spacing: 1px;
        }
        .hero-header p {
          font-size: 11px;
        }
        .cards-carousel {
          min-height: 300px;
          margin-bottom: 30px;
          gap: 10px;
        }
        .character-card {
          width: clamp(160px, 50vw, 200px);
          height: clamp(200px, 60vw, 240px);
        }
        .game-ui {
          flex-wrap: wrap;
          gap: 12px;
          padding: 15px;
          justify-content: center;
        }
        .counter {
          font-size: 12px;
        }
        .counter-number {
          min-width: 40px;
          font-size: 16px;
        }
        .control-btn {
          width: 36px;
          height: 36px;
          font-size: 14px;
        }
        .hint-text {
          font-size: 10px;
          width: 100%;
          text-align: center;
        }

        .hero-assets {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 30px 3%;
          gap: 15px;
          height: auto;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .asset-preview {
          width: clamp(180px, 50vw, 240px);
          height: clamp(180px, 50vw, 240px);
          min-width: clamp(180px, 50vw, 240px);
          border-radius: 8px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(204, 255, 0, 0.08);
        }
        .asset-preview:hover {
          transform: scale(1.05) translateY(-8px);
        }

        .marquee-wrap {
          padding: 12px 0;
          transform: rotate(-1deg) scale(1.01);
        }
        .marquee-item {
          font-size: clamp(14px, 3vw, 20px);
          margin: 0 clamp(15px, 3vw, 25px);
        }

        .section-header {
          padding: 50px 3% 30px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
        .sec-title {
          font-size: clamp(24px, 5vw, 40px);
        }

        .grid {
          grid-template-columns: 1fr;
          gap: 15px;
          padding: 0 3% 40px;
        }
        .card {
          height: clamp(250px, 60vw, 400px);
          clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);
        }
        .card-title {
          font-size: clamp(14px, 3vw, 20px);
        }
        .card-cat {
          font-size: 10px;
        }
        .card-info {
          padding: 15px;
        }

        .about-sec {
          grid-template-columns: 1fr;
          padding: 50px 3%;
          gap: 25px;
        }
        .profile-img {
          max-width: 100%;
          height: auto;
        }
        .stat-row {
          padding: 12px 0;
          font-size: clamp(14px, 3vw, 18px);
        }

        footer {
          padding: 60px 3%;
        }
        .footer-cta {
          font-size: clamp(24px, 6vw, 48px);
          margin-bottom: 25px;
        }
      }

      @media (max-width: 640px) {
        .nav {
          padding: clamp(8px, 1.5vw, 12px) 3%;
        }
        .brand {
          font-size: clamp(12px, 3.2vw, 16px);
          gap: 1px;
          flex-shrink: 0;
          min-width: fit-content;
          letter-spacing: 0.6px;
        }
        
        .brand-studio {
          font-size: clamp(9px, 2.2vw, 12px);
        }
        .menu {
          top: 55px;
        }
        .menu-link {
          font-size: clamp(10px, 1.2vw, 11px);
          letter-spacing: 0.4px;
          padding: clamp(10px, 1.5vw, 14px) clamp(12px, 2.5vw, 16px);
        }
        .hamburger-menu {
          width: clamp(22px, 4vw, 26px);
          height: clamp(18px, 3vw, 22px);
          padding: clamp(4px, 0.8vw, 6px);
        }
        .hamburger-line {
          height: 2px;
        }
        .menu-label {
          font-size: 6px;
          letter-spacing: 0.6px;
        }

        .hero {
          padding: 70px 3% 30px;
        }
        .hero-label {
          font-size: 11px;
          gap: 8px;
          margin-bottom: 12px;
        }
        .hero-label::before {
          width: 20px;
        }
        .hero h1 {
          font-size: clamp(28px, 5.5vw, 48px);
        }
        .sub-bio {
          font-size: 13px;
          margin-bottom: 20px;
        }
        .btn-main {
          padding: 10px 20px;
          font-size: 12px;
        }

        .hero-assets {
          gap: 15px;
          padding: 25px 3%;
        }
        .asset-preview {
          width: 200px;
          height: 200px;
          min-width: 200px;
        }

        .marquee-item {
          font-size: 14px;
          margin: 0 15px;
        }

        .section-header {
          padding: 50px 3% 30px;
        }
        .sec-title {
          font-size: 24px;
        }

        .grid {
          gap: 15px;
          padding: 0 3% 45px;
        }
        .card {
          height: 40vh;
        }
        .card-info {
          padding: 15px;
        }

        .about-sec {
          padding: 50px 3% 30px;
          gap: 25px;
        }

        footer {
          padding: 60px 3% 30px;
        }
        .footer-cta {
          font-size: 6vw;
          margin-bottom: 25px;
        }
      }

      @media (max-width: 480px) {
        .nav {
          padding: clamp(7px, 1.3vw, 10px) 2%;
        }
        .brand {
          font-size: clamp(11px, 3vw, 14px);
          letter-spacing: 0.5px;
          gap: 1px;
          flex-shrink: 0;
          min-width: fit-content;
        }
        
        .brand-studio {
          font-size: clamp(8px, 2vw, 11px);
        }
        .brand-glow {
          inset: -4px;
        }
        .menu {
          gap: 0;
          top: 50px;
          padding: 12px 0;
        }
        .menu-link {
          font-size: clamp(9px, 1vw, 10px);
          letter-spacing: 0.3px;
          padding: clamp(10px, 1.2vw, 12px) clamp(12px, 2vw, 14px);
        }
        .hamburger-menu {
          width: clamp(20px, 3.5vw, 24px);
          height: clamp(16px, 2.8vw, 20px);
          gap: clamp(2.5px, 0.4vw, 3px);
          padding: clamp(3px, 0.6vw, 4px);
        }
        .hamburger-line {
          height: 1.5px;
        }
        .menu-label {
          font-size: clamp(5px, 0.9vw, 6px);
          letter-spacing: 0.5px;
          margin-top: 3px;
        }

        .hero-professional {
          padding: 50px 2% 30px;
          min-height: 90vh;
        }
        .hero-title-animated {
          font-size: clamp(18px, 4vw, 32px);
          margin-bottom: 10px;
        }
        .hero-subtitle-animated {
          font-size: clamp(11px, 2.5vw, 13px);
          margin-bottom: 10px;
        }
        .scroll-hint {
          font-size: 8px;
        }
        .portfolio-carousel {
          min-height: 250px;
          margin-bottom: 20px;
          gap: 8px;
        }
        .portfolio-card {
          width: clamp(140px, 50vw, 200px);
          height: clamp(200px, 70vw, 320px);
        }
        .card-info h3 {
          font-size: 10px;
        }
        .card-info p {
          font-size: 9px;
        }
        .cta-button {
          padding: 8px clamp(12px, 3vw, 20px);
          font-size: 10px;
          letter-spacing: 1px;
        }

        .hero-game {
          padding: 30px 2%;
        }
        .hero-header h2 {
          font-size: clamp(18px, 4vw, 28px);
        }
        .hero-header p {
          font-size: 9px;
        }
        .cards-carousel {
          min-height: 220px;
          margin-bottom: 20px;
        }
        .character-card {
          width: clamp(120px, 40vw, 180px);
          height: clamp(150px, 50vw, 220px);
        }
        .game-ui {
          gap: 8px;
          padding: 12px;
        }
        .counter {
          font-size: 10px;
          gap: 6px;
        }
        .counter-number {
          min-width: 30px;
          font-size: 14px;
        }
        .control-btn {
          width: 32px;
          height: 32px;
          font-size: 12px;
        }

        .hero-assets {
          padding: 15px 2%;
          gap: 10px;
        }
        .asset-preview {
          width: clamp(120px, 40vw, 180px);
          height: clamp(120px, 40vw, 180px);
          min-width: clamp(120px, 40vw, 180px);
          border-radius: 4px;
        }
        .asset-preview:hover {
          transform: scale(1.03) translateY(-4px);
        }

        .marquee-wrap {
          padding: 8px 0;
        }
        .marquee-item {
          font-size: clamp(10px, 2.5vw, 14px);
          margin: 0 clamp(8px, 2vw, 15px);
        }

        .section-header {
          padding: 30px 2% 20px;
        }
        .sec-title {
          font-size: clamp(18px, 4vw, 28px);
        }

        .grid {
          gap: 10px;
          padding: 0 2% 30px;
        }
        .card {
          height: clamp(200px, 50vw, 320px);
          min-height: 200px;
        }
        .card-title {
          font-size: clamp(12px, 2.5vw, 16px);
        }
        .card-cat {
          font-size: 9px;
        }
        .card-info {
          padding: 10px;
        }

        .about-sec {
          padding: 30px 2%;
          gap: 15px;
        }
        .stat-row {
          padding: 8px 0;
          font-size: clamp(12px, 2.5vw, 14px);
        }

        footer {
          padding: 40px 2%;
        }
        .footer-cta {
          font-size: clamp(18px, 5vw, 36px);
          margin-bottom: 15px;
        }
        .footer-links {
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }
        .footer-link {
          font-size: 10px;
        }
        .footer-bottom {
          flex-direction: column;
          gap: 15px;
          padding-top: 20px;
          text-align: center;
        }
        .footer-info {
          flex-direction: column;
          gap: 8px;
        }
        .footer-socials {
          gap: 15px;
        }

        /* Page-specific adjustments */
        .page-header {
          padding: 40px 2% 25px;
        }

        .page-header-content h1 {
          font-size: clamp(18px, 4vw, 32px);
          margin-bottom: 10px;
        }

        .page-header-content p {
          font-size: 10px;
        }

        .mission-container h2,
        .values-container h2,
        .process-container h2,
        .tools-container h2,
        .culture-container h2,
        .careers-container h2 {
          font-size: clamp(18px, 4vw, 28px);
        }

        .values-grid,
        .process-steps,
        .culture-highlights,
        .tools-grid {
          gap: 12px;
        }

        .value-item,
        .process-step,
        .highlight,
        .tool-item {
          padding: 15px;
        }

        .step-number {
          font-size: 28px;
        }

        .team-section,
        .testimonials-section,
        .blog-section,
        .contact-section {
          padding: 30px 2%;
        }

        .team-grid,
        .blog-grid {
          gap: 15px;
        }

        .team-card,
        .testimonial-card,
        .blog-card,
        .contact-form,
        .contact-info {
          padding: 15px;
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          font-size: 36px;
        }

        .team-name {
          font-size: 16px;
        }

        .form-group input,
        .form-group textarea {
          padding: 8px 10px;
          font-size: 12px;
        }

        .submit-btn {
          padding: 10px 12px;
          font-size: 11px;
        }

        .contact-content {
          grid-template-columns: 1fr;
        }

        .contact-form,
        .contact-info {
          padding: 15px;
        }
      }

      /* --- TEAM SECTION --- */
      .team-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        background: linear-gradient(135deg, rgba(204, 255, 0, 0.03) 0%, rgba(204, 255, 0, 0) 100%);
        border-top: 1px solid var(--line);
      }

      .team-container {
        max-width: 1400px;
        margin: 0 auto;
      }

      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 40px;
        margin-top: 60px;
      }

      .team-card {
        background: linear-gradient(135deg, var(--surface) 0%, rgba(20, 20, 20, 0.5) 100%);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 40px 30px;
        text-align: center;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        overflow: hidden;
      }

      .team-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 0%, rgba(204, 255, 0, 0.08), transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .team-card:hover {
        border-color: var(--accent);
        box-shadow: 0 10px 40px rgba(204, 255, 0, 0.1), inset 0 0 20px rgba(204, 255, 0, 0.03);
        transform: translateY(-8px);
      }

      .team-card:hover::before {
        opacity: 1;
      }

      .team-avatar {
        width: 120px;
        height: 120px;
        margin: 0 auto 20px;
        background: linear-gradient(135deg, var(--accent) 0%, rgba(204, 255, 0, 0.5) 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
        font-family: var(--font-head);
        color: var(--bg);
      }

      .team-name {
        font-size: 20px;
        font-weight: 700;
        font-family: var(--font-ui);
        margin-bottom: 5px;
        color: var(--text);
      }

      .team-role {
        font-size: 13px;
        color: var(--accent);
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      .team-bio {
        font-size: 14px;
        color: var(--dim);
        line-height: 1.6;
      }

      /* --- TESTIMONIALS SECTION --- */
      .testimonials-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        border-top: 1px solid var(--line);
      }

      .testimonials-container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .testimonials-intro {
        font-size: 16px;
        color: var(--dim);
        margin-top: 40px;
        margin-bottom: 60px;
        max-width: 600px;
      }

      .testimonials-content {
        position: relative;
      }

      .testimonial-card {
        background: linear-gradient(135deg, var(--surface) 0%, rgba(20, 20, 20, 0.5) 100%);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 50px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .stars {
        display: flex;
        gap: 8px;
        margin-bottom: 20px;
      }

      .star {
        font-size: 20px;
        color: var(--accent);
      }

      .testimonial-text {
        font-size: 18px;
        font-style: italic;
        line-height: 1.8;
        color: var(--text);
        margin-bottom: 30px;
        font-family: var(--font-body);
      }

      .testimonial-author h4 {
        font-size: 16px;
        font-weight: 600;
        color: var(--text);
        margin-bottom: 5px;
      }

      .testimonial-author p {
        font-size: 13px;
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .testimonial-indicators {
        display: flex;
        gap: 12px;
        margin-top: 40px;
        justify-content: center;
      }

      .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid var(--dim);
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .indicator.active {
        background: var(--accent);
        border-color: var(--accent);
        box-shadow: 0 0 12px var(--accent);
      }

      /* --- BLOG SECTION --- */
      .blog-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        border-top: 1px solid var(--line);
      }

      .blog-container {
        max-width: 1400px;
        margin: 0 auto;
      }

      .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 40px;
        margin-top: 60px;
      }

      .blog-card {
        background: linear-gradient(135deg, var(--surface) 0%, rgba(20, 20, 20, 0.5) 100%);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 40px;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        cursor: pointer;
      }

      .blog-card:hover {
        border-color: var(--accent);
        box-shadow: 0 10px 40px rgba(204, 255, 0, 0.1);
        transform: translateY(-5px);
      }

      .blog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .blog-category {
        font-size: 11px;
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 600;
      }

      .blog-date {
        font-size: 12px;
        color: var(--dim);
      }

      .blog-title {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.4;
        margin-bottom: 15px;
        color: var(--text);
      }

      .blog-excerpt {
        font-size: 14px;
        color: var(--dim);
        line-height: 1.6;
        margin-bottom: 20px;
      }

      .blog-link {
        font-size: 13px;
        color: var(--accent);
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
      }

      .blog-link:hover {
        transform: translateX(5px);
        text-shadow: 0 0 10px var(--accent);
      }

      /* --- CONTACT SECTION --- */
      .contact-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        border-top: 1px solid var(--line);
        background: linear-gradient(135deg, rgba(204, 255, 0, 0.02) 0%, rgba(204, 255, 0, 0) 100%);
      }

      .contact-container {
        max-width: 1400px;
        margin: 0 auto;
      }

      .contact-header {
        text-align: center;
        margin-bottom: 60px;
      }

      .contact-content {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 60px;
        align-items: start;
      }

      .contact-info {
        background: linear-gradient(135deg, var(--surface) 0%, rgba(20, 20, 20, 0.5) 100%);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 40px;
      }

      .info-group h3 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 30px;
        color: var(--text);
      }

      .info-item {
        font-size: 14px;
        margin-bottom: 20px;
        line-height: 1.8;
      }

      .info-item strong {
        color: var(--accent);
        display: block;
        margin-bottom: 5px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .info-item a {
        color: var(--text);
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .info-item a:hover {
        color: var(--accent);
        text-shadow: 0 0 10px var(--accent);
      }

      .contact-form {
        background: linear-gradient(135deg, var(--surface) 0%, rgba(20, 20, 20, 0.5) 100%);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 40px;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
      }

      .form-group.full-width {
        grid-column: 1 / -1;
      }

      .form-group label {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--dim);
        margin-bottom: 10px;
      }

      .form-group input,
      .form-group textarea {
        background: transparent;
        border: 1px solid var(--line);
        color: var(--text);
        padding: 12px 15px;
        border-radius: 6px;
        font-size: 14px;
        font-family: var(--font-body);
        transition: all 0.3s ease;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: var(--accent);
        box-shadow: 0 0 12px rgba(204, 255, 0, 0.2), inset 0 0 8px rgba(204, 255, 0, 0.05);
      }

      .form-group textarea {
        resize: vertical;
        font-family: var(--font-body);
      }

      .submit-btn {
        width: 100%;
        padding: 14px 20px;
        background: linear-gradient(90deg, var(--accent) 0%, rgba(204, 255, 0, 0.8) 100%);
        border: none;
        color: var(--bg);
        font-weight: 700;
        font-size: 14px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        margin-top: 20px;
      }

      .submit-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(204, 255, 0, 0.3);
      }

      /* --- SECTION HEADERS --- */
      .section-title {
        font-size: 42px;
        font-weight: 700;
        font-family: var(--font-head);
        margin-bottom: 15px;
        background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .section-subtitle {
        font-size: 16px;
        color: var(--dim);
        font-family: var(--font-ui);
        letter-spacing: 1.5px;
        text-transform: uppercase;
      }

      .section-header {
        margin-bottom: 40px;
      }

      @media (max-width: 1024px) {
        .contact-content {
          grid-template-columns: 1fr;
        }

        .form-row {
          grid-template-columns: 1fr;
        }

        .team-grid {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .blog-grid {
          grid-template-columns: 1fr;
        }

        .testimonial-card {
          padding: 30px;
        }

        .section-title {
          font-size: 32px;
        }
      }

      @media (max-width: 768px) {
        .team-section,
        .testimonials-section,
        .blog-section,
        .contact-section {
          padding: 60px 3%;
        }

        .team-card,
        .testimonial-card,
        .blog-card,
        .contact-form,
        .contact-info {
          padding: 25px;
        }

        .team-name {
          font-size: 18px;
        }

        .blog-title {
          font-size: 16px;
        }

        .section-title {
          font-size: 24px;
        }

        .section-subtitle {
          font-size: 12px;
        }
      }

      @media (max-width: 480px) {
        .team-section,
        .testimonials-section,
        .blog-section,
        .contact-section {
          padding: 40px 2%;
        }

        .team-grid,
        .blog-grid {
          gap: 20px;
        }

        .team-card,
        .testimonial-card,
        .blog-card,
        .contact-form,
        .contact-info {
          padding: 20px;
        }

        .form-group input,
        .form-group textarea {
          padding: 10px 12px;
          font-size: 13px;
        }

        .submit-btn {
          padding: 12px 16px;
          font-size: 12px;
        }

        .section-title {
          font-size: 18px;
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          font-size: 36px;
        }
      }

      /* --- PAGE HEADER --- */
      .page-header {
        padding: 120px 5% 80px;
        text-align: center;
        border-bottom: 1px solid var(--line);
        background: linear-gradient(135deg, rgba(8, 8, 8, 0.99) 0%, rgba(13, 13, 13, 0.97) 100%);
        position: relative;
        overflow: hidden;
      }

      .page-header::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 80% 80% at 50% 0%, rgba(204, 255, 0, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 120% 100% at 50% 100%, rgba(204, 255, 0, 0.04) 0%, transparent 60%);
        pointer-events: none;
        z-index: 1;
      }

      .page-header-content {
        position: relative;
        z-index: 2;
      }

      .page-header-content h1 {
        font-family: var(--font-head);
        font-size: clamp(40px, 8vw, 100px);
        font-weight: 700;
        color: var(--text);
        margin-bottom: 20px;
        background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: fade-in-down 0.8s ease-out;
      }

      .page-header-content p {
        font-size: clamp(14px, 2vw, 18px);
        color: var(--dim);
        font-family: var(--font-ui);
        letter-spacing: 1.5px;
        text-transform: uppercase;
        animation: fade-in-up 0.8s ease-out 0.2s both;
      }

      @keyframes fade-in-down {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* --- MISSION SECTION --- */
      .mission-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        background: linear-gradient(135deg, rgba(204, 255, 0, 0.02) 0%, rgba(204, 255, 0, 0) 100%);
        border-bottom: 1px solid var(--line);
      }

      .mission-container {
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
      }

      .mission-container h2 {
        font-family: var(--font-head);
        font-size: 48px;
        color: var(--text);
        margin-bottom: 30px;
        background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .mission-container p {
        font-size: 16px;
        color: var(--dim);
        line-height: 1.8;
        letter-spacing: 0.5px;
      }

      /* --- VALUES SECTION --- */
      .values-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        border-bottom: 1px solid var(--line);
      }

      .values-container {
        max-width: 1400px;
        margin: 0 auto;
      }

      .values-container h2 {
        font-family: var(--font-head);
        font-size: 48px;
        color: var(--text);
        margin-bottom: 60px;
        text-align: center;
        background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 40px;
      }

      .value-item {
        background: linear-gradient(135deg, var(--surface) 0%, rgba(20, 20, 20, 0.5) 100%);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 40px;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        overflow: hidden;
      }

      .value-item::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: conic-gradient(from 45deg, var(--accent), rgba(204, 255, 0, 0), var(--accent));
        opacity: 0;
        z-index: -1;
        transition: opacity 0.4s ease;
        filter: blur(8px);
        border-radius: 12px;
      }

      .value-item:hover::before {
        opacity: 0.25;
      }

      .value-item:hover {
        border-color: var(--accent);
        box-shadow: 0 15px 50px rgba(204, 255, 0, 0.15);
        transform: translateY(-8px);
      }

      .value-item h3 {
        font-size: 20px;
        font-weight: 700;
        color: var(--accent);
        margin-bottom: 15px;
        transition: all 0.3s ease;
      }

      .value-item:hover h3 {
        text-shadow: 0 0 12px var(--accent);
      }

      .value-item p {
        font-size: 14px;
        color: var(--dim);
        line-height: 1.6;
      }

      /* --- SERVICES FULL SECTION --- */
      .services-full-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        border-bottom: 1px solid var(--line);
      }

      .services-container {
        max-width: 1400px;
        margin: 0 auto;
      }

      .section-intro {
        text-align: center;
        margin-bottom: 80px;
      }

      .section-intro h2 {
        font-family: var(--font-head);
        font-size: 48px;
        color: var(--text);
        margin-bottom: 20px;
        background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .section-intro p {
        font-size: 16px;
        color: var(--dim);
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.8;
      }

      /* --- PROCESS SECTION --- */
      .process-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        background: linear-gradient(135deg, rgba(204, 255, 0, 0.02) 0%, rgba(204, 255, 0, 0) 100%);
        border-bottom: 1px solid var(--line);
      }

      .process-container {
        max-width: 1400px;
        margin: 0 auto;
      }

      .process-container h2 {
        font-family: var(--font-head);
        font-size: 48px;
        color: var(--text);
        margin-bottom: 60px;
        text-align: center;
        background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .process-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
      }

      .process-step {
        background: linear-gradient(135deg, var(--surface) 0%, rgba(20, 20, 20, 0.5) 100%);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 40px;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        overflow: hidden;
      }

      .process-step::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: conic-gradient(from 45deg, var(--accent), rgba(204, 255, 0, 0), var(--accent));
        opacity: 0;
        z-index: -1;
        transition: opacity 0.4s ease;
        filter: blur(8px);
        border-radius: 12px;
      }

      .process-step:hover::before {
        opacity: 0.25;
      }

      .process-step:hover {
        border-color: var(--accent);
        box-shadow: 0 15px 50px rgba(204, 255, 0, 0.15);
        transform: translateY(-8px);
      }

      .step-number {
        font-family: var(--font-head);
        font-size: 36px;
        font-weight: 700;
        color: var(--accent);
        margin-bottom: 15px;
        transition: all 0.3s ease;
      }

      .process-step:hover .step-number {
        text-shadow: 0 0 12px var(--accent);
        font-size: 40px;
      }

      .process-step h3 {
        font-size: 18px;
        font-weight: 700;
        color: var(--text);
        margin-bottom: 10px;
        transition: all 0.3s ease;
      }

      .process-step:hover h3 {
        color: var(--accent);
        letter-spacing: 0.5px;
      }

      .process-step p {
        font-size: 14px;
        color: var(--dim);
        line-height: 1.6;
      }

      /* --- TOOLS SECTION --- */
      .tools-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        border-bottom: 1px solid var(--line);
      }

      .tools-container {
        max-width: 1400px;
        margin: 0 auto;
        text-align: center;
      }

      .tools-container h2 {
        font-family: var(--font-head);
        font-size: 48px;
        color: var(--text);
        margin-bottom: 20px;
        background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .tools-container > p {
        font-size: 16px;
        color: var(--dim);
        margin-bottom: 60px;
      }

      .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
      }

      .tool-item {
        background: linear-gradient(135deg, var(--surface) 0%, rgba(20, 20, 20, 0.5) 100%);
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 25px;
        font-family: var(--font-ui);
        font-size: 16px;
        font-weight: 700;
        color: var(--accent);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        overflow: hidden;
      }

      .tool-item::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: conic-gradient(from 45deg, var(--accent), rgba(204, 255, 0, 0), var(--accent));
        opacity: 0;
        z-index: -1;
        transition: opacity 0.4s ease;
        filter: blur(6px);
        border-radius: 8px;
      }

      .tool-item:hover::before {
        opacity: 0.3;
      }

      .tool-item:hover {
        border-color: var(--accent);
        box-shadow: 0 10px 35px rgba(204, 255, 0, 0.2);
        transform: scale(1.08);
        text-shadow: 0 0 12px var(--accent);
      }

      /* --- CULTURE SECTION --- */
      .culture-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        background: linear-gradient(135deg, rgba(204, 255, 0, 0.02) 0%, rgba(204, 255, 0, 0) 100%);
        border-bottom: 1px solid var(--line);
      }

      .culture-container {
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;
      }

      .culture-container h2 {
        font-family: var(--font-head);
        font-size: 48px;
        color: var(--text);
        margin-bottom: 30px;
        background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .culture-container > p {
        font-size: 16px;
        color: var(--dim);
        line-height: 1.8;
        margin-bottom: 60px;
      }

      .culture-highlights {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
      }

      .highlight {
        background: linear-gradient(135deg, var(--surface) 0%, rgba(20, 20, 20, 0.5) 100%);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 30px;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        overflow: hidden;
      }

      .highlight::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: conic-gradient(from 45deg, var(--accent), rgba(204, 255, 0, 0), var(--accent));
        opacity: 0;
        z-index: -1;
        transition: opacity 0.4s ease;
        filter: blur(8px);
        border-radius: 12px;
      }

      .highlight:hover::before {
        opacity: 0.2;
      }

      .highlight:hover {
        border-color: var(--accent);
        box-shadow: 0 15px 45px rgba(204, 255, 0, 0.12);
        transform: translateY(-6px);
      }

      .highlight h3 {
        font-size: 18px;
        font-weight: 700;
        color: var(--accent);
        margin-bottom: 10px;
        transition: all 0.3s ease;
      }

      .highlight:hover h3 {
        text-shadow: 0 0 10px var(--accent);
      }

      .highlight p {
        font-size: 13px;
        color: var(--dim);
      }

      /* --- CAREERS SECTION --- */
      .careers-section {
        padding: clamp(40px, 10vw, 80px) 5%;
        border-bottom: 1px solid var(--line);
        text-align: center;
      }

      .careers-container {
        max-width: 900px;
        margin: 0 auto;
      }

      .careers-container h2 {
        font-family: var(--font-head);
        font-size: 48px;
        color: var(--text);
        margin-bottom: 20px;
        background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .careers-container p {
        font-size: 16px;
        color: var(--dim);
        line-height: 1.8;
        margin-bottom: 40px;
      }

      .careers-btn {
        padding: 14px 40px;
        background: linear-gradient(90deg, var(--accent) 0%, rgba(204, 255, 0, 0.8) 100%);
        border: none;
        color: var(--bg);
        font-weight: 700;
        font-size: 14px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        overflow: hidden;
      }

      .careers-btn::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: conic-gradient(from 45deg, var(--accent), rgba(204, 255, 0, 0), var(--accent));
        opacity: 0;
        z-index: -1;
        transition: opacity 0.3s ease;
        filter: blur(8px);
      }

      .careers-btn:hover::before {
        opacity: 0.4;
      }

      .careers-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(204, 255, 0, 0.35);
        text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      }

      @media (max-width: 1024px) {
        .page-header {
          padding: 80px 3% 60px;
        }

        .page-header-content h1 {
          font-size: clamp(32px, 6vw, 80px);
        }

        .mission-section,
        .values-section,
        .services-full-section,
        .process-section,
        .tools-section,
        .culture-section,
        .careers-section {
          padding: 60px 3%;
        }
      }

      @media (max-width: 768px) {
        .page-header {
          padding: 60px 3% 40px;
        }

        .page-header-content h1 {
          font-size: clamp(24px, 5vw, 60px);
        }

        .mission-section,
        .values-section,
        .services-full-section,
        .process-section,
        .tools-section,
        .culture-section,
        .careers-section {
          padding: 40px 3%;
        }

        .section-intro h2,
        .values-container h2,
        .process-container h2,
        .tools-container h2,
        .culture-container h2,
        .careers-container h2,
        .mission-container h2 {
          font-size: 32px;
        }

        .values-grid,
        .process-steps,
        .culture-highlights {
          gap: 20px;
        }
      }

      @media (max-width: 480px) {
        .page-header {
          padding: 40px 2% 30px;
        }

        .page-header-content h1 {
          font-size: 20px;
          margin-bottom: 15px;
        }

        .page-header-content p {
          font-size: 11px;
        }

        .mission-section,
        .values-section,
        .services-full-section,
        .process-section,
        .tools-section,
        .culture-section,
        .careers-section {
          padding: 30px 2%;
        }

        .section-intro h2,
        .values-container h2,
        .process-container h2,
        .tools-container h2,
        .culture-container h2,
        .careers-container h2,
        .mission-container h2 {
          font-size: 22px;
        }

        .value-item,
        .process-step,
        .highlight {
          padding: 20px;
        }
      }
    `}</style>
  )
}

