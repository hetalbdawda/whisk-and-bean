import { useState } from 'react'
import { LeafSprig } from './icons'

const FOOTER_LINKS = [
  { label: 'Our Story', href: '#our-story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Allergy Information', href: '#allergy-information' },
  { label: 'Gift Cards', href: '#gift-cards' },
  { label: 'Rewards', href: '#rewards' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <LeafSprig size={38} />
          <span className="brand footer-brand-name">Whisk & Bean</span>
          <p className="footer-tagline">Japanese simplicity, one cup at a time.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <p className="footer-heading">Explore</p>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-subscribe">
          <p className="footer-heading">Subscribe &amp; stay updated</p>
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              aria-label="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          {submitted && <p className="subscribe-thanks">Thanks for subscribing!</p>}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Whisk & Bean. All rights reserved.</span>
      </div>
    </footer>
  )
}
