export default function GiftCards() {
  return (
    <section className="giftcards" id="gift-cards">
      <div className="giftcards-inner">
        <div className="giftcard-image">
          <img src="/menu/gift-card.png" alt="My Cafe gift card" loading="lazy" />
        </div>
        <div className="giftcards-copy">
          <p className="eyebrow">Gift Cards</p>
          <h2 className="section-title">Give a little calm</h2>
          <p className="story-text">
            A My Cafe gift card is a warm welcome for any coffee, matcha, or tea lover. Choose an
            amount, add a note, and send it by email — or pick up a physical card in-store.
          </p>
          <div className="giftcard-amounts">
            {['$15', '$25', '$50', '$100'].map((amount) => (
              <button type="button" className="chip" key={amount}>
                {amount}
              </button>
            ))}
          </div>
          <button type="button" className="solid-btn">
            Buy a Gift Card
          </button>
        </div>
      </div>
    </section>
  )
}
