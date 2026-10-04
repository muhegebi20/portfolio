import { useState } from 'react'
import type { Contact as ContactType } from '../../types'

interface ContactProps {
  contact: ContactType
}

export function Contact({  }: ContactProps) {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    
    const formData = new FormData(event.currentTarget)
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY || '')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      
      if (data.success) {
        setResult('Message sent successfully! I\'ll get back to you soon.')
        ;(event.target as HTMLFormElement).reset()
      } else {
        setResult('Something went wrong. Please try again.')
      }
    } catch (error) {
      setResult('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>

      <div className="max-w-2xl mx-auto">
        <p className="text-text-secondary text-center mb-8">
          Interested in collaborating or want to chat? Feel free to reach out.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-card-bg border border-gray-800 rounded text-white placeholder-text-secondary focus:border-neon-lime focus:outline-none transition-colors"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-card-bg border border-gray-800 rounded text-white placeholder-text-secondary focus:border-neon-lime focus:outline-none transition-colors"
            />
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-card-bg border border-gray-800 rounded text-white placeholder-text-secondary focus:border-neon-lime focus:outline-none transition-colors"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-card-bg border border-gray-800 rounded text-white placeholder-text-secondary focus:border-neon-lime focus:outline-none transition-colors resize-none"
            />
          </div>

          {result && (
            <div
              className={`p-4 rounded text-center ${
                result.includes('successfully')
                  ? 'bg-green-900 border border-green-700 text-green-200'
                  : 'bg-red-900 border border-red-700 text-red-200'
              }`}
            >
              {result}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}