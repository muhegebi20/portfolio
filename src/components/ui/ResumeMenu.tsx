import { useEffect, useRef, useState } from 'react'
import type { Header } from '../../types'

interface ResumeMenuProps {
  resume: Header['links']
  className?: string
}

const options = [
  { label: 'English', key: 'resume_en' },
  { label: 'Türkçe', key: 'resume_tr' },
] as const

export function ResumeMenu({ resume, className = '' }: ResumeMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const available = options.filter((o) => resume[o.key])

  useEffect(() => {
    if (!open) return

    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  if (available.length === 0) return null

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="btn-primary w-full text-center"
      >
        Resume
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 mt-2 z-20 min-w-full bg-card-bg border border-neon-lime rounded-lg shadow-lg overflow-hidden"
        >
          {available.map((o) => (
            <a
              key={o.key}
              role="menuitem"
              href={resume[o.key]}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-white hover:bg-neon-lime hover:text-black transition-colors whitespace-nowrap"
            >
              {o.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
