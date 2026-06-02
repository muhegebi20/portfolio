import type { Project } from '../../types'

const projectImages = import.meta.glob('../../assets/projects/*.{jpg,jpeg,png,webp,svg}', { eager: true })

function getProjectImage(filename: string): string | undefined {
  const entry = Object.entries(projectImages).find(([path]) => path.endsWith(filename))
  if (entry) {
    const mod = entry[1] as { default: string }
    return mod.default
  }
  return undefined
}

interface ProjectsProps {
  projects: Project[]
}

function ProjectCard({ project }: { project: Project }) {
  const imageSrc = project.image ? getProjectImage(project.image) : undefined

  return (
    <article className="card text-left overflow-hidden p-0">
      <div className="relative w-full h-48 overflow-hidden border-b border-gray-800 bg-gray-900 flex items-center justify-center">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <span className="text-text-secondary text-sm">No image</span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
        <p className="text-text-secondary text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech_stack.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-neon-lime text-black text-xs font-semibold rounded hover:bg-white transition-all duration-200 inline-block">
              View Project
            </a>
          ) : (
            <button className="px-4 py-1.5 bg-neon-lime text-black text-xs font-semibold rounded opacity-50 cursor-not-allowed inline-block" disabled>
              View Project
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  )
}
