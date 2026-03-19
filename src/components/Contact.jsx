import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just show success state
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get in Touch</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-side">
            <p className="contact-intro">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              <a href="mailto:prathmesh.p.sutar@gmail.com" className="contact-method" id="contact-email">
                <div className="contact-method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-method-info">
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">prathmesh.p.sutar@gmail.com</span>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/prathmesh-sutar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                id="contact-linkedin"
              >
                <div className="contact-method-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="contact-method-info">
                  <span className="contact-method-label">LinkedIn</span>
                  <span className="contact-method-value">prathmesh-sutar</span>
                </div>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                id="contact-github"
              >
                <div className="contact-method-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="contact-method-info">
                  <span className="contact-method-label">GitHub</span>
                  <span className="contact-method-value">prathmesh-sutar</span>
                </div>
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="form-success">
              <i className="fas fa-check-circle"></i>
              <p>Message sent successfully! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="formName" placeholder="Your Name" required />
                <label htmlFor="formName">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="formEmail" placeholder="Your Email" required />
                <label htmlFor="formEmail">Your Email</label>
              </div>
              <div className="form-group">
                <textarea id="formMessage" placeholder="Your Message" rows="5" required></textarea>
                <label htmlFor="formMessage">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary btn-full" id="submitBtn">
                <i className="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
