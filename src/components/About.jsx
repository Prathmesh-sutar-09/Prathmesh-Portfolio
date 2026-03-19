export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Who Am I</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <div className="about-image-glow"></div>
              <div className="about-avatar">
                <i className="fas fa-user-astronaut"></i>
              </div>
              <div className="about-image-info">
                <h3>Prathmesh Sutar</h3>
                <p>B.Tech CSE Graduate</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="about-text">
              I am a motivated <strong>Software Engineering graduate</strong> from
              D. Y. Patil College of Engineering and Technology, Kolhapur. With
              strong skills in <strong>Python, Java, SQL, and web technologies</strong>,
              I bring hands-on experience building full-stack applications and
              RESTful APIs.
            </p>
            <p className="about-text">
              Experienced in working with <strong>Flask, React, and AI-based systems</strong>{' '}
              during internship and academic projects, I am passionate about
              developing scalable, efficient, and user-focused software solutions
              that make a real impact.
            </p>

            <div className="about-info-grid">
              <InfoItem icon="fas fa-envelope" label="Email" value="prathmesh.p.sutar@gmail.com" />
              <InfoItem
                icon="fab fa-linkedin"
                label="LinkedIn"
                value="prathmesh-sutar"
                href="https://linkedin.com/in/prathmesh-sutar"
              />
              <InfoItem icon="fas fa-graduation-cap" label="Degree" value="B.Tech CSE" />
              <InfoItem icon="fas fa-map-marker-alt" label="Location" value="Kolhapur, India" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon, label, value, href }) {
  return (
    <div className="info-item">
      <i className={icon}></i>
      <div>
        <span className="info-label">{label}</span>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="info-value info-link">
            {value}
          </a>
        ) : (
          <span className="info-value">{value}</span>
        )}
      </div>
    </div>
  )
}
