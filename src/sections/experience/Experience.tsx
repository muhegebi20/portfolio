import type { Experience as ExpType } from '../../types'

interface ExperienceProps {
  experience: ExpType[]
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.map((exp) => (
          <div key={exp.role + exp.company} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                <p className="text-text-secondary text-sm">{exp.company} • {exp.location}</p>
              </div>
              <div className="text-text-secondary text-sm">{exp.period}</div>
            </div>

            <ul className="mt-4 list-disc list-inside text-text-secondary text-sm space-y-2">
              {exp.responsibilities.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
