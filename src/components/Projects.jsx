const projects = [
  {
    id: 'project-edubridge',
    title: 'Edubridge-AI',
    icon: 'fas fa-robot',
    gradient: 'gradient-1',
    description:
      'A multi-PDF AI chatbot to assist students with contextual question answering over academic PDFs using LangChain, LLMs, and FAISS.',
    features: [
      'LangChain + LLM-powered semantic search',
      'FAISS vector database integration',
      'React frontend with PDF upload',
      'Flask backend for embeddings & queries',
    ],
    tech: ['Python', 'LangChain', 'FAISS', 'Flask', 'React.js'],
  },
  {
    id: 'project-movie-rec',
    title: 'Movie Recommendation System',
    icon: 'fas fa-film',
    gradient: 'gradient-2',
    description:
      'A content-based movie recommendation system using TF-IDF Vectorizer and Cosine Similarity for personalized movie suggestions.',
    features: [
      'TF-IDF vectorization on metadata',
      'Cosine similarity scoring',
      'Content-based filtering',
      'Clean & intuitive UI',
    ],
    tech: ['Python', 'TF-IDF', 'Cosine Similarity', 'Scikit-learn'],
    link: 'https://github.com/Prathmesh-sutar-09/Movie-Recommendation-System',
  },
  {
    id: 'project-sql-gen',
    title: 'SQL Query Generator',
    icon: 'fas fa-database',
    gradient: 'gradient-3',
    description:
      'A natural language to SQL converter that allows users to query SQLite databases using plain English, powered by GenAI and Streamlit.',
    features: [
      'Natural Language to SQL conversion',
      'Interactive Streamlit UI',
      'LangChain & LLM integration (GPT-4/Qwen)',
      'Database introspection for context retrieval',
      'Excel/CSV data ingestion utility',
    ],
    tech: ['Python', 'LangChain', 'OpenAI', 'Streamlit', 'SQLite', 'Pandas'],
    link: 'https://github.com/Prathmesh-sutar-09/SQL-query-generator.git',
  },
]


export default function Projects() {
  return (
    <section className="section section-dark" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">What I've Built</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div className="project-card" key={proj.id} id={proj.id}>
              <div className="project-thumbnail">
                <div className="project-overlay">
                  <div className="project-icon">
                    <i className={proj.icon}></i>
                  </div>
                </div>
                <div className={`project-gradient-bg ${proj.gradient}`}></div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{proj.title}</h3>
                  <a href={proj.link} className="project-link" title="View Code" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>

                </div>
                <p className="project-desc">{proj.description}</p>
                <ul className="project-features">
                  {proj.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
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
