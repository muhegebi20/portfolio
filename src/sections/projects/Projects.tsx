import type { Project } from '../../types'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {projects.map((p) => (
          <article key={p.name}  className="card text-left">
            <h3 className="text-lg font-semibold text-white mb-2">{p.name}</h3>
            <p className="text-text-secondary text-sm mb-4">{p.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech_stack.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>

            <div className="flex gap-2">
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-neon-lime text-black text-xs font-semibold rounded hover:bg-white transition-all duration-200 inline-block">
                  View
                </a>
              ) : (
                <button className="px-4 py-1.5 bg-neon-lime text-black text-xs font-semibold rounded opacity-50 cursor-not-allowed inline-block" disabled>
                  View
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
