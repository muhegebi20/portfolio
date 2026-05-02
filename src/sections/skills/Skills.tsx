import type { Skills as SkillsType } from '../../types'

interface SkillsProps {
  skills: SkillsType
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Arsenal</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <h3 className="text-neon-lime font-semibold mb-3">Languages</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {skills.languages.map((s) => (
              <li key={s} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-lime inline-block" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="text-neon-lime font-semibold mb-3">Frameworks</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {skills.frameworks.map((s) => (
              <li key={s} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-lime inline-block" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="text-neon-lime font-semibold mb-3">Databases</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {skills.databases.map((s) => (
              <li key={s} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-lime inline-block" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="text-neon-lime font-semibold mb-3">Tools</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {skills.tools.map((s) => (
              <li key={s} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-lime inline-block" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
