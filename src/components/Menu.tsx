import { MENU } from '../menuData'
import { useCart } from '../cart/CartContext'
import { formatPrice } from '../cart/format'
import { LeafSprig } from './icons'

export default function Menu() {
  const { addItem } = useCart()

  return (
    <section className="menu" id="menu">
      <header className="menu-head">
        <LeafSprig size={44} />
        <h2 className="menu-title">Menu</h2>
        <span className="menu-rule" aria-hidden="true">
          ·
        </span>
      </header>

      {MENU.map((category) => (
        <div className="menu-category" id={category.id} key={category.id}>
          <div className="menu-category-head">
            <h3 className="menu-category-title">
              <span className="menu-category-emoji" aria-hidden="true">
                {category.emoji}
              </span>
              {category.title}
            </h3>
            {category.note && <p className="menu-category-note">{category.note}</p>}
          </div>

          <div className="drink-grid">
            {category.drinks.map((drink) => (
              <article className="drink-card" key={drink.name}>
                <div className="drink-image">
                  {drink.image ? (
                    <img src={drink.image} alt={drink.name} loading="lazy" />
                  ) : (
                    <span className="drink-image-label">Image of {drink.name}</span>
                  )}
                </div>
                <div className="drink-info">
                  <h4 className="drink-name">
                    {drink.name}
                    {drink.favorite && (
                      <span className="drink-star" aria-label="Barista favorite" title="Barista favorite">
                        ★
                      </span>
                    )}
                  </h4>
                  {drink.note && <p className="drink-note">{drink.note}</p>}
                  <div className="drink-order">
                    <span className="drink-price">{formatPrice(drink.price)}</span>
                    <button
                      type="button"
                      className="add-btn"
                      onClick={() =>
                        addItem({ name: drink.name, price: drink.price, image: drink.image })
                      }
                    >
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

      <p className="menu-legend">
        <span className="drink-star">★</span> Barista Favorite
      </p>
    </section>
  )
}
