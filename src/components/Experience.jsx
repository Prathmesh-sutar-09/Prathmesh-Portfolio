export default function Experience() {
  const techTags = ['LangChain', 'Vector Databases', 'LLMs', 'Flask', 'React.js']

  const highlights = [
    'Implemented chunking strategies and integrated vector databases to enhance information retrieval performance.',
    'Developed and worked with Flask-based RESTful APIs, gaining strong understanding of backend processing and data flow.',
    'Assisted in API integration and troubleshooting, supporting seamless communication between frontend and backend teams.',
    'Evaluated RAG-based chatbot performance using RAGAS metrics by analyzing accuracy, relevance, and faithfulness.',
  ]

  return (
    <section className="section" id="experience">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Where I've Worked</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-card">
          <div className="exp-card-glow"></div>

          <div className="exp-header">
            <div className="exp-company-info">
              <div className="exp-logo">
                <i className="fas fa-building"></i>
              </div>
              <div>
                <h3 className="exp-company">BETWOB Infoserv Pvt Ltd</h3>
                <span className="exp-role">Software Engineering Intern</span>
              </div>
            </div>
            <div className="exp-meta">
              <span className="exp-duration">
                <i className="fas fa-calendar-alt"></i>
                Jan 2025 – June 2025
              </span>
            </div>
          </div>

          <div className="exp-tech-tags">
            {techTags.map((tag) => (
              <span className="tech-tag" key={tag}>{tag}</span>
            ))}
          </div>

          <ul className="exp-highlights">
            {highlights.map((text, i) => (
              <li key={i}>
                <i className="fas fa-chevron-right"></i>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
