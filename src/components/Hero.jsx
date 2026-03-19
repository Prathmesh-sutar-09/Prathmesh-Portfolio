import { useEffect, useRef } from 'react'

export default function Hero() {
  const particlesRef = useRef(null)
  const statsRef = useRef(null)
  const animated = useRef(false)

  // Create floating particles
  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div')
      p.classList.add('particle')
      p.style.left = Math.random() * 100 + '%'
      p.style.animationDelay = Math.random() * 8 + 's'
      p.style.animationDuration = 6 + Math.random() * 6 + 's'
      p.style.width = p.style.height = 1 + Math.random() * 3 + 'px'
      container.appendChild(p)
    }
  }, [])

  // Animate stat counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const counters = statsRef.current?.querySelectorAll('.stat-number')
          counters?.forEach((el) => {
            const target = +el.getAttribute('data-target')
            let current = 0
            const step = Math.ceil(target / 40)
            const timer = setInterval(() => {
              current += step
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              el.textContent = current
            }, 40)
          })
        }
      },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-particles" ref={particlesRef}></div>
        <div className="hero-gradient"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Available for opportunities</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-greeting">Hello, I'm</span>
          <span className="hero-name">Prathmesh Sutar</span>
        </h1>
        <p className="hero-subtitle">Software Engineer</p>
        <p className="hero-description">
          Motivated Software Engineering graduate with strong skills in Python,
          Java, SQL, and web technologies. Passionate about building scalable,
          efficient, and user-focused software solutions.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
            <i className="fas fa-play"></i>
            <span>View My Work</span>
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('#contact')}>
            <i className="fas fa-envelope"></i>
            <span>Get in Touch</span>
          </button>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div className="stat">
            <span className="stat-number" data-target="5">0</span>
            <span className="stat-plus">+</span>
            <span className="stat-label">Months Intern Exp.</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number" data-target="3">0</span>
            <span className="stat-plus">+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number" data-target="6">0</span>
            <span className="stat-plus">+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
