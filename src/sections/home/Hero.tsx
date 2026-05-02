import heroImg from '../../assets/myphoto.jpeg'
import type { Home } from '../../types'

interface HeroProps {
  home: Home
  name: string
  email: string
}

export function Hero({ home, name, email }: HeroProps) {
  return (
    <section id="home" className="section pt-20 md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-neon-lime">Perfect Designing</span> Starts
            Here!
          </h1>

          <p className="text-lg leading-relaxed mb-6 text-text-secondary">
            {home.blurb}
          </p>

          {/* Tech Stack Badges */}
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {home.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="badge"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary text-center">
              See My Work
            </a>
            <a href={`mailto:${email}`} className="btn-secondary text-center">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Animated Glowing Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-lime via-purple-500 to-cyan-500 rounded-2xl p-1 animate-pulse">
              {/* Inner Container */}
              <div className="w-full h-full bg-dark-bg rounded-2xl p-2">
                {/* Image */}
                <img
                  src={heroImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl border-2 border-neon-lime"
                />
              </div>
            </div>

            {/* Decorative Glow Circles */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-neon-lime rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-16 md:mt-20">
        <a href="#skills" className="flex flex-col items-center gap-2 text-text-secondary hover:text-neon-lime transition-colors">
          <span className="text-sm font-medium">Explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
