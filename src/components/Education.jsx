export default function Education() {
  return (
    <section className="section section-dark" id="education">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="edu-card" id="edu-btech">
          <div className="edu-icon">
            <i className="fas fa-university"></i>
          </div>
          <div className="edu-content">
            <h3 className="edu-degree">B.Tech. Computer Science and Engineering</h3>
            <p className="edu-college">
              D. Y. Patil College of Engineering and Technology, Kolhapur
            </p>
            <div className="edu-details">
              <span className="edu-year">
                <i className="fas fa-calendar-alt"></i>
                Graduated: 2025
              </span>
              <span className="edu-cgpa">
                <i className="fas fa-star"></i>
                CGPA: 7.14 / 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
