import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'fas fa-code',
    skills: [
      { name: 'Python', icon: 'fab fa-python', level: 90 },
      { name: 'Java', icon: 'fab fa-java', level: 80 },
      { name: 'SQL', icon: 'fas fa-database', level: 85 },
      { name: 'JavaScript', icon: 'fab fa-js-square', level: 75 },
      { name: 'HTML/CSS', icon: 'fab fa-html5', level: 85 },
      { name: 'C/C++', icon: 'fas fa-copyright', level: 55 },
    ],
  },
  {
    title: 'Concepts & Frameworks',
    icon: 'fas fa-brain',
    skills: [
      { name: 'DSA', icon: 'fas fa-sitemap', level: 80 },
      { name: 'OOP', icon: 'fas fa-cubes', level: 85 },
      { name: 'LangChain', icon: 'fas fa-link', level: 75 },
      { name: 'Vector DB', icon: 'fas fa-vector-square', level: 70 },
      { name: 'LLMs', icon: 'fas fa-robot', level: 75 },
      { name: 'ETL/ELT', icon: 'fas fa-warehouse', level: 60 },
    ],
  },
  {
    title: 'Databases & Tools',
    icon: 'fas fa-tools',
    skills: [
      { name: 'MySQL', icon: 'fas fa-database', level: 85 },
      { name: 'MongoDB', icon: 'fas fa-leaf', level: 70 },
      { name: 'Git/GitHub', icon: 'fab fa-git-alt', level: 85 },
      { name: 'Postman', icon: 'fas fa-paper-plane', level: 80 },
      { name: 'Power BI', icon: 'fas fa-chart-bar', level: 65 },
      { name: 'Tableau', icon: 'fas fa-chart-pie', level: 60 },
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
