import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from './icons'

const AUTOPLAY_MS = 6000

const SLIDES = [
  { id: 1, image: '/carousel/loose-leaf-series.png', label: 'Tea Series', href: '#loose-leaf' },
  { id: 2, image: '/carousel/matcha-series.png', label: 'Matcha Series', href: '#matcha' },
  { id: 3, image: '/carousel/hojicha-series.png', label: 'Hojicha Series', href: '#hojicha' },
  { id: 4, image: '/carousel/coffee-series.png', label: 'Coffee Series', href: '#coffee' },
]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  const goTo = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  // Auto-advance every 6 seconds; resets whenever the active slide changes
  // (including manual navigation), so a click gives a fresh 6s window.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [active])

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label="Featured">
      <div className="carousel-track">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide${index === active ? ' is-active' : ''}`}
            aria-hidden={index !== active}
          >
            <img className="carousel-image" src={slide.image} alt={slide.label} />
            <div className="carousel-caption">
              <h2>{slide.label}</h2>
              <a href={slide.href} className="carousel-cta">
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="carousel-arrow prev" onClick={prev} aria-label="Previous slide">
        <ChevronLeft />
      </button>
      <button type="button" className="carousel-arrow next" onClick={next} aria-label="Next slide">
        <ChevronRight />
      </button>

      <div className="carousel-dots" role="tablist" aria-label="Choose slide">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={index === active ? 'is-active' : ''}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === active}
            role="tab"
          />
        ))}
      </div>
    </section>
  )
}
