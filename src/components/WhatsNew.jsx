const newItems = [
  {
    tag: "NEW STORE",
    title: "Chinatown District",
    desc: "Discover authentic culture, cuisine, and retail in our newest immersive zone.",
    image: "https://images.pexels.com/photos/19332579/pexels-photo-19332579.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    tag: "OPENING",
    title: "AI Concierge Lounge",
    desc: "Step into the future — our AI-powered lounge helps plan your perfect mall day.",
    image: "https://images.pexels.com/photos/11395484/pexels-photo-11395484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    tag: "NEW DINING",
    title: "Rooftop Sky Garden",
    desc: "Fine dining above the city skyline — opening exclusively this season.",
    image: "https://images.pexels.com/photos/10313684/pexels-photo-10313684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    tag: "ENTERTAINMENT",
    title: "Holo-Theatre Dome",
    desc: "360-degree holographic shows that transport you to another dimension.",
    image: "https://images.pexels.com/photos/237722/pexels-photo-237722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export function WhatsNew() {
  return (
    <section className="whatsnew-section">
      <div className="whatsnew-header">
        <h2 className="whatsnew-title">What&apos;s New at Grand Mall</h2>
        <a href="#" className="whatsnew-all">Discover More</a>
      </div>
      <div className="whatsnew-grid">
        {newItems.map((item) => (
          <div key={item.title} className="whatsnew-card">
            <div
              className="whatsnew-card-img"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="whatsnew-card-tag">{item.tag}</span>
            </div>
            <div className="whatsnew-card-body">
              <h3 className="whatsnew-card-title">{item.title}</h3>
              <p className="whatsnew-card-desc">{item.desc}</p>
              <a href="#" className="whatsnew-card-link">Discover &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
