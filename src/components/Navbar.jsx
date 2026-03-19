import { useState, useEffect } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a
          className="nav-logo"
          onClick={() => handleNavClick('#hero')}
          role="button"
          tabIndex={0}
        >
          <span className="logo-text">PS</span>
        </a>

        <ul className={`nav-links${mobileOpen ? ' active' : ''}`} id="navLinks">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                className="nav-link"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              className="nav-link nav-contact-btn"
              onClick={() => handleNavClick('#contact')}
            >
              Contact
            </button>
          </li>
        </ul>

        <button
          className={`nav-toggle${mobileOpen ? ' active' : ''}`}
          id="navToggle"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  )
}
