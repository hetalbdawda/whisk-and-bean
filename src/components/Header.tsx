import { useState } from 'react'
import { useCart } from '../cart/CartContext'
import AccountModal from './AccountModal'
import { UserIcon, CartIcon, MenuIcon, CloseIcon } from './icons'

const TABS = [
  { label: 'Our Story', href: '#our-story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Allergy Information', href: '#allergy-information' },
  { label: 'Gift Cards', href: '#gift-cards' },
  { label: 'Rewards', href: '#rewards' },
]

export default function Header() {
  const { count, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="header-left">
          <button
            type="button"
            className="icon-btn hamburger"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </button>
          {/* Brand */}
          <a href="#top" className="brand">
            Whisk & Bean
          </a>
        </div>

        <nav aria-label="Primary">
          <ul className="nav-tabs">
            {TABS.map((tab) => (
              <li key={tab.label}>
                <a href={tab.href}>{tab.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#menu" className="order-btn">
            Order Now
          </a>
          <button
            type="button"
            className="icon-btn"
            aria-label="Account"
            onClick={() => setAccountOpen(true)}
          >
            <UserIcon />
          </button>
          <button type="button" className="icon-btn cart-toggle" aria-label="Cart" onClick={openCart}>
            <CartIcon />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        className={`mobile-nav${mobileOpen ? ' is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-nav-scrim" onClick={() => setMobileOpen(false)} />
        <div className="mobile-nav-panel">
          <button
            type="button"
            className="icon-btn mobile-nav-close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <CloseIcon />
          </button>
          <ul>
            {TABS.map((tab) => (
              <li key={tab.label}>
                <a href={tab.href} onClick={() => setMobileOpen(false)}>
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AccountModal open={accountOpen} onClose={() => setAccountOpen(false)} />
    </>
  )
}
