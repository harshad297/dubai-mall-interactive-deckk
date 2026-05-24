import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

const slides = [
  {
    tag: 'AI EXPERIENCE',
    title: 'THE FUTURE OF SHOPPING IS HERE',
    subtitle: 'Discover our AI-powered personal shopping assistant — curating your perfect mall experience in real time.',
    cta: 'Explore AI Features',
    bg: 'https://images.pexels.com/photos/11395484/pexels-photo-11395484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overlay: 'rgba(0,0,0,0.45)',
  },
  {
    tag: 'FASHION AVENUE',
    title: 'REDEFINING LUXURY',
    subtitle: 'More than 200 of the most covetable luxury brands ready for you to discover.',
    cta: 'Explore More',
    bg: 'https://images.pexels.com/photos/35188183/pexels-photo-35188183.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overlay: 'rgba(0,0,0,0.4)',
  },
  {
    tag: 'ENTERTAINMENT',
    title: 'YOU SHOP. WE ENTERTAIN.',
    subtitle: 'World-class entertainment for every member of the family — all under one spectacular roof.',
    cta: 'Discover Entertainment',
    bg: 'https://images.pexels.com/photos/237722/pexels-photo-237722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overlay: 'rgba(0,0,0,0.5)',
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(idx) {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  }

  const slide = slides[current];

  return (
    <section className="hero">
      <div
        className={`hero-bg ${animating ? 'hero-bg-fade' : ''}`}
        style={{ backgroundImage: `url(${slide.bg})` }}
      >
        <div className="hero-overlay" style={{ background: slide.overlay }} />
      </div>

      <div className="hero-content">
        <span className="hero-tag">{slide.tag}</span>
        <h1 className="hero-title">{slide.title}</h1>
        <div className="hero-divider" />
        <p className="hero-subtitle">{slide.subtitle}</p>
        <a href="#" className="hero-cta">{slide.cta}</a>
      </div>

      <div className="hero-meta">
        <div className="hero-meta-item">
          <Clock size={14} />
          <span>Open Today <strong>10 AM – 11 PM</strong></span>
        </div>
        <div className="hero-meta-divider" />
        <div className="hero-meta-item">
          <MapPin size={14} />
          <a href="#" className="hero-meta-link">View Mall Map</a>
        </div>
      </div>

      <button className="hero-arrow hero-arrow-left" onClick={() => goTo((current - 1 + slides.length) % slides.length)}>
        <ChevronLeft size={24} />
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={() => goTo((current + 1) % slides.length)}>
        <ChevronRight size={24} />
      </button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'hero-dot-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
