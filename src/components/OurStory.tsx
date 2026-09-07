export default function OurStory() {
  return (
    <section className="story" id="our-story">
      <div className="story-inner">
        <div className="story-copy">
          <p className="eyebrow">Our Story</p>
          <h2 className="section-title">Small moments of calm &amp; delight</h2>
          <p className="story-text">
            Whisk & Bean brings together Japanese simplicity and neighbourhood warmth — a quiet place to
            slow down over a well-pulled espresso, a stone-ground matcha, or a pot of loose leaf tea.
          </p>
          <p className="story-text">
            Everything on our menu is made to order by hand, from the cardamom pour over to the black
            sesame cold foam. We keep things simple, seasonal, and made with care.
          </p>
          <a href="#menu" className="outline-btn">
            Explore the Menu
          </a>
        </div>
        <div className="story-image">
          <img src="/cafe-interior.png" alt="Inside Whisk & Bean" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
