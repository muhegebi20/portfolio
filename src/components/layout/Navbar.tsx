import { useState } from 'react'
import type { Header } from '../../types'

interface NavbarProps {
  header: Header
}

export function Navbar({ header }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-lime rounded flex items-center justify-center">
              <span className="font-bold text-black text-sm">MG</span>
            </div>
            <span className="font-bold text-neon-lime hidden sm:inline">
              {header.name.split(' ')[0]}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-neon-lime transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`mailto:${header.email}`}
              className="btn-primary text-sm"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-neon-lime transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-neon-lime transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-neon-lime transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-neon-lime transition-colors duration-200 block"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${header.email}`}
                className="btn-primary text-sm inline-block"
                onClick={closeMenu}
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
