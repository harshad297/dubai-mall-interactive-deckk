const highlights = [
  {
    tag: 'ENTERTAIN',
    title: 'Grand Aquarium & Underwater Zoo',
    body: 'Marvel at the wonders of nature up-close, with more than 33,000 aquatic animals to admire.',
    image: 'https://images.pexels.com/photos/13355515/pexels-photo-13355515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ctaLabel: 'Explore More',
    ctaSecondary: 'Discover Entertainment',
  },
  {
    tag: 'DINE',
    title: 'World-Class Dining',
    body: 'From Michelin-starred chefs to beloved local favourites — over 200 restaurants await.',
    image: 'https://images.pexels.com/photos/19332579/pexels-photo-19332579.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ctaLabel: 'Explore More',
    ctaSecondary: 'Discover Dining',
  },
];

const quickCards = [
  {
    tag: 'STAY',
    title: 'The Palace Hotel',
    image: 'https://images.pexels.com/photos/10313684/pexels-photo-10313684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    tag: 'SHOP',
    title: 'New Arrivals',
    image: 'https://images.pexels.com/photos/27452443/pexels-photo-27452443.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export function Highlights() {
  return (
    <section className="highlights-section">
      {highlights.map((h, i) => (
        <div key={h.title} className={`highlight-item ${i % 2 === 1 ? 'highlight-reverse' : ''}`}>
          <div
            className="highlight-image"
            style={{ backgroundImage: `url(${h.image})` }}
          />
          <div className="highlight-content">
            <p className="highlight-tag">{h.tag}</p>
            <h2 className="highlight-title">{h.title}</h2>
            <p className="highlight-body">{h.body}</p>
            <div className="highlight-actions">
              <a href="#" className="highlight-cta-primary">{h.ctaLabel}</a>
              <a href="#" className="highlight-cta-ghost">{h.ctaSecondary}</a>
            </div>
          </div>
        </div>
      ))}

      <div className="quick-cards">
        {quickCards.map((c) => (
          <div
            key={c.title}
            className="quick-card"
            style={{ backgroundImage: `url(${c.image})` }}
          >
            <div className="quick-card-overlay" />
            <div className="quick-card-content">
              <span className="quick-card-tag">{c.tag}</span>
              <h3 className="quick-card-title">{c.title}</h3>
              <a href="#" className="quick-card-cta">Explore More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
