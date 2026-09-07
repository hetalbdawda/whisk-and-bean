import { useState } from 'react'
import { CloseIcon } from './icons'

type Props = {
  open: boolean
  onClose: () => void
}

export default function AccountModal({ open, onClose }: Props) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')

  if (!open) return null

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Placeholder — wire up to your auth provider later.
    onClose()
  }

  return (
    <div className="modal-scrim is-open" onClick={onClose}>
      <div
        className="account-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Account"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="icon-btn modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <h2 className="account-title">{mode === 'signin' ? 'Welcome back' : 'Create account'}</h2>
        <p className="account-sub">
          {mode === 'signin'
            ? 'Sign in to track orders and rewards points.'
            : 'Join to start earning rewards on every cup.'}
        </p>

        <form className="account-form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <label>
              Name
              <input type="text" autoComplete="name" required />
            </label>
          )}
          <label>
            Email
            <input type="email" autoComplete="email" required />
          </label>
          <label>
            Password
            <input type="password" autoComplete="current-password" required />
          </label>
          <button type="submit" className="solid-btn account-submit">
            {mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="account-switch">
          {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  )
}
