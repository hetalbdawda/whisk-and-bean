import { useCart } from '../cart/CartContext'
import { formatPrice } from '../cart/format'
import { asset } from '../asset'
import { CloseIcon } from './icons'

export default function CartDrawer() {
  const { items, subtotal, count, isOpen, closeCart, setQty, removeItem, clear } = useCart()

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
          <h2>Your Order</h2>
          <button type="button" className="icon-btn" onClick={closeCart} aria-label="Close cart">
            <CloseIcon />
          </button>
        </header>

        {items.length === 0 ? (
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
              <button type="button" className="solid-btn cart-checkout">
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
