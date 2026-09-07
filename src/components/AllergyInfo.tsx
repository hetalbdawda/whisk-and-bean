const ALLERGENS = [
  { name: 'Dairy', note: 'In lattes, cold foam, and blended drinks. Oat & coconut milk available.' },
  { name: 'Tree Nuts', note: 'Coconut is used in the Matcha Cold Foam and select milks.' },
  { name: 'Sesame', note: 'Black sesame cold foam contains sesame seeds.' },
  { name: 'Soy', note: 'Some alternative milks and syrups may contain soy.' },
  { name: 'Caffeine', note: 'Coffee, matcha, hojicha, and green teas all contain caffeine.' },
]

export default function AllergyInfo() {
  return (
    <section className="allergy" id="allergy-information">
      <div className="allergy-inner">
        <p className="eyebrow">Allergy Information</p>
        <h2 className="section-title">Know before you sip</h2>
        <p className="allergy-lead">
          Our drinks are prepared in a shared space where dairy, nuts, sesame, and soy are present, so
          we cannot guarantee any item is fully free from cross-contact. If you have a severe allergy,
          please let a barista know before ordering.
        </p>

        <ul className="allergy-list">
          {ALLERGENS.map((item) => (
            <li className="allergy-item" key={item.name}>
              <span className="allergy-name">{item.name}</span>
              <span className="allergy-note">{item.note}</span>
            </li>
          ))}
        </ul>

        <p className="allergy-foot">
          Have a question about a specific drink? Ask us in-store or reach out any time — we're happy
          to help you find something you'll love.
        </p>
      </div>
    </section>
  )
}
