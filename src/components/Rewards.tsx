export default function Rewards() {
  return (
    <section className="rewards" id="rewards">
      <div className="rewards-inner">
        <p className="eyebrow eyebrow-light">Rewards</p>
        <h2 className="section-title section-title-light">Join My Cafe Rewards</h2>
        <p className="rewards-text">
          Earn points on every order and unlock free drinks, seasonal treats, and members-only
          specials. It's our way of saying thanks for slowing down with us.
        </p>
        <div className="rewards-perks">
          <div className="perk">
            <span className="perk-num">1</span>
            <p>Earn points with every cup you order.</p>
          </div>
          <div className="perk">
            <span className="perk-num">2</span>
            <p>Redeem for free lattes, matcha, and pastries.</p>
          </div>
          <div className="perk">
            <span className="perk-num">3</span>
            <p>Get early access to seasonal menu drops.</p>
          </div>
        </div>
        <button type="button" className="solid-btn solid-btn-light">
          Join Rewards
        </button>
      </div>
    </section>
  )
}
