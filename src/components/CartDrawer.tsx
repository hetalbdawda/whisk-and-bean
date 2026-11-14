import { useEffect, useState } from 'react'
import { useCart, type CartItem } from '../cart/CartContext'
import { formatPrice } from '../cart/format'
import { asset } from '../asset'
import { CloseIcon } from './icons'

// Sales tax applied at checkout (the cart footer promises "Taxes calculated at checkout").
const TAX_RATE = 0.0875

type Receipt = {
  id: string
  placedAt: string
  items: CartItem[]
  subtotal: number
  tax: number
  total: number
}

export default function CartDrawer() {
  const { items, subtotal, count, isOpen, closeCart, setQty, removeItem, clear } = useCart()
  const [receipt, setReceipt] = useState<Receipt | null>(null)

  // Start fresh each time the drawer is reopened: drop any prior receipt so
  // a returning customer sees their (now empty) cart, not the old order.
  useEffect(() => {
    if (!isOpen) setReceipt(null)
  }, [isOpen])

  const handleCheckout = () => {
    const now = new Date()
    const tax = subtotal * TAX_RATE
    setReceipt({
      // Short, human-friendly order number derived from the timestamp.
      id: `WB-${now.getTime().toString().slice(-6)}`,
      placedAt: now.toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      items,
      subtotal,
      tax,
      total: subtotal + tax,
    })
    clear()
  }

  return (
    <>
      <div
        className={`drawer-scrim${isOpen ? ' is-open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`cart-drawer${isOpen ? ' is-open' : ''}`}
        aria-hidden={!isOpen}
        aria-label="Your order"
      >
        <header className="cart-head">
          <h2>{receipt ? 'Receipt' : 'Your Order'}</h2>
          <button type="button" className="icon-btn" onClick={closeCart} aria-label="Close cart">
            <CloseIcon />
          </button>
        </header>

        {receipt ? (
          <>
            <div className="cart-receipt">
              <div className="receipt-thanks">
                <h3>Thank you!</h3>
                <p>Here is your receipt.</p>
              </div>

              <div className="receipt-meta">
                <span>Order {receipt.id}</span>
                <span>{receipt.placedAt}</span>
              </div>

              <ul className="receipt-lines">
                {receipt.items.map((item) => (
                  <li className="receipt-line" key={item.name}>
                    <span className="receipt-line-qty">{item.qty}×</span>
                    <span className="receipt-line-name">{item.name}</span>
                    <span className="receipt-line-amt">{formatPrice(item.price * item.qty)}</span>
                  </li>
                ))}
              </ul>

              <div className="receipt-totals">
                <div className="receipt-row">
                  <span>Subtotal</span>
                  <span>{formatPrice(receipt.subtotal)}</span>
                </div>
                <div className="receipt-row">
                  <span>Tax</span>
                  <span>{formatPrice(receipt.tax)}</span>
                </div>
                <div className="receipt-row receipt-row-total">
                  <span>Total</span>
                  <span>{formatPrice(receipt.total)}</span>
                </div>
              </div>
            </div>

            <footer className="cart-foot">
              <button type="button" className="solid-btn cart-checkout" onClick={closeCart}>
                Done
              </button>
            </footer>
          </>
        ) : items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <p className="cart-empty-sub">Add a drink from the menu to get started.</p>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li className="cart-item" key={item.name}>
                  <div className="cart-item-thumb" aria-hidden="true">
                    {item.image && <img src={asset(item.image)} alt="" />}
                  </div>
                  <div className="cart-item-body">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">{formatPrice(item.price)}</p>
                    <div className="qty">
                      <button
                        type="button"
                        onClick={() => setQty(item.name, item.qty - 1)}
                        aria-label={`Decrease ${item.name}`}
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(item.name, item.qty + 1)}
                        aria-label={`Increase ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    <span>{formatPrice(item.price * item.qty)}</span>
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => removeItem(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="cart-foot">
              <div className="cart-subtotal">
                <span>Subtotal ({count} {count === 1 ? 'item' : 'items'})</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="cart-note">Taxes calculated at checkout.</p>
              <button type="button" className="solid-btn cart-checkout" onClick={handleCheckout}>
                Checkout
              </button>
              <button type="button" className="cart-clear" onClick={clear}>
                Clear cart
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}
