const certs = [
  {
    id: 'cert-deloitte',
    title: 'Data Analytics',
    issuer: 'Deloitte – Forage',
    year: '2025',
    icon: 'fas fa-certificate',
    skills: ['Data Analysis', 'Data Modeling', 'Visualization', 'Spreadsheets'],
  },
  {
    id: 'cert-zscaler',
    title: 'Cybersecurity Fundamentals',
    issuer: 'Zscaler',
    year: '2024',
    icon: 'fas fa-shield-alt',
    skills: ['Cybersecurity', 'Zero Trust', 'Data Security', 'Security Ops'],
  },
  {
    id: 'cert-frontend',
    title: 'Frontend Development',
    issuer: 'Simplilearn',
    year: '2024',
    icon: 'fas fa-laptop-code',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Angular'],
  },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">My Achievements</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid">
          {certs.map((cert) => (
            <div className="cert-card" key={cert.id} id={cert.id}>
              <div className="cert-badge">
                <i className={cert.icon}></i>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-year">{cert.year}</span>
                <div className="cert-skills">
                  {cert.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
