import type { Project } from '../../types'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.name} className="card">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{p.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech_stack.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                      View
                    </a>
                  ) : (
                    <button className="btn-primary text-sm opacity-80 cursor-not-allowed" disabled>
                      View
                    </button>
                  )}

                  <a href="#contact" className="btn-secondary text-sm">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
