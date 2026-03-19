export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">PS</span>
            <p>Prathmesh Sutar — Software Engineer</p>
          </div>
          <div className="footer-socials">
            <a href="mailto:prathmesh.p.sutar@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com/in/prathmesh-sutar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Prathmesh Sutar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
