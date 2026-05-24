import { Calendar, Tag } from 'lucide-react';

const items = [
  {
    type: 'EVENT',
    title: 'Summer Fashion Week',
    desc: 'Exclusive runway shows and meet-the-designer events across Fashion Avenue.',
    date: 'Jul 15 – Jul 30',
    image: 'https://images.pexels.com/photos/19287629/pexels-photo-19287629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    type: 'OFFER',
    title: 'Shop & Earn Miles',
    desc: 'Earn loyalty miles with every purchase and redeem for exclusive rewards.',
    date: 'Until Aug 31',
    image: 'https://images.pexels.com/photos/28388982/pexels-photo-28388982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    type: 'EVENT',
    title: 'Grand Fountain Show',
    desc: 'Nightly light and music spectaculars at the iconic Grand Fountain.',
    date: 'Every Evening 8 PM',
    image: 'https://images.pexels.com/photos/237722/pexels-photo-237722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export function EventsOffers() {
  return (
    <section className="events-section">
      <div className="events-header">
        <h2 className="events-title">Discover Events &amp; Offers</h2>
        <div className="events-header-links">
          <a href="#" className="events-link">Discover events</a>
          <span className="events-link-sep" />
          <a href="#" className="events-link">Discover offers</a>
        </div>
      </div>

      <div className="events-grid">
        {items.map((item) => (
          <div key={item.title} className="event-card">
            <div
              className="event-card-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="event-card-overlay" />
              <span className={`event-card-badge ${item.type === 'OFFER' ? 'event-badge-offer' : ''}`}>
                {item.type === 'OFFER' ? <Tag size={11} /> : <Calendar size={11} />}
                {item.type}
              </span>
            </div>
            <div className="event-card-body">
              <p className="event-card-date">{item.date}</p>
              <h3 className="event-card-title">{item.title}</h3>
              <p className="event-card-desc">{item.desc}</p>
              <a href="#" className="event-card-cta">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
