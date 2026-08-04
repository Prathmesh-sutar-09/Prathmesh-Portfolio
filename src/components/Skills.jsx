import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Programming & Web',
    icon: 'fas fa-code',
    skills: [
      { name: 'Python', icon: 'fab fa-python', level: 90 },
      { name: 'Java', icon: 'fab fa-java', level: 80 },
      { name: 'SQL', icon: 'fas fa-database', level: 85 },
      { name: 'JavaScript', icon: 'fab fa-js-square', level: 80 },
      { name: 'HTML/CSS', icon: 'fab fa-html5', level: 85 },
      { name: 'React.js', icon: 'fab fa-react', level: 80 },
      { name: 'Flask & Node', icon: 'fas fa-server', level: 75 },
      { name: 'C/C++', icon: 'fas fa-copyright', level: 60 },
    ],
  },
  {
    title: 'SAP Technologies',
    icon: 'fas fa-layer-group',
    skills: [
      { name: 'SAP BTP', icon: 'fas fa-cloud', level: 80 },
      { name: 'SAP CAP', icon: 'fas fa-cogs', level: 80 },
      { name: 'SAPUI5/Fiori', icon: 'fas fa-desktop', level: 80 },
      { name: 'OData V4', icon: 'fas fa-network-wired', level: 85 },
      { name: 'Core Data Svcs', icon: 'fas fa-database', level: 80 },
      { name: 'REST APIs/CRUD', icon: 'fas fa-exchange-alt', level: 85 },
      { name: 'MVC / XML Views', icon: 'fas fa-project-diagram', level: 75 },
    ],
  },
  {
    title: 'AI & Data Concepts',
    icon: 'fas fa-brain',
    skills: [
      { name: 'LangChain', icon: 'fas fa-link', level: 80 },
      { name: 'LLMs & RAG', icon: 'fas fa-robot', level: 80 },
      { name: 'Vector DBs', icon: 'fas fa-database', level: 75 },
      { name: 'FAISS/ChromaDB', icon: 'fas fa-cubes', level: 75 },
      { name: 'DSA & OOP', icon: 'fas fa-sitemap', level: 80 },
      { name: 'ETL/ELT', icon: 'fas fa-warehouse', level: 65 },
    ],
  },
  {
    title: 'Tools & Soft Skills',
    icon: 'fas fa-tools',
    skills: [
      { name: 'Git & GitHub', icon: 'fab fa-git-alt', level: 85 },
      { name: 'MySQL/MongoDB', icon: 'fas fa-database', level: 85 },
      { name: 'VS Code/Postman', icon: 'fas fa-laptop-code', level: 90 },
      { name: 'Jupyter/Tableau', icon: 'fas fa-chart-pie', level: 70 },
      { name: 'Power BI', icon: 'fas fa-chart-bar', level: 65 },
      { name: 'Communication', icon: 'fas fa-comments', level: 90 },
      { name: 'Teamwork', icon: 'fas fa-users', level: 90 },
      { name: 'Analytical Thinking', icon: 'fas fa-lightbulb', level: 85 },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const fills = sectionRef.current?.querySelectorAll('.skill-fill')
          fills?.forEach((el) => {
            const level = el.getAttribute('data-level')
            el.style.width = level + '%'
            el.classList.add('animated')
          })
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section section-dark" id="skills" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="skills-rows">
          {skillCategories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <h3 className="category-title">
                <i className={cat.icon}></i>
                <span>{cat.title}</span>
              </h3>
              <div className="skills-carousel-wrapper">
                <div className="skills-carousel">
                  {cat.skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          data-level={skill.level}
                        ></div>
                      </div>
                    </div>
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
