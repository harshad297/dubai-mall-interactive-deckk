export function FashionAvenue() {
  return (
    <section className="fashion-section">
      <div
        className="fashion-image"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/28388982/pexels-photo-28388982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)`,
        }}
      />
      <div className="fashion-content">
        <p className="fashion-eyebrow">Fashion Avenue</p>
        <h2 className="fashion-title">Redefining<br />Luxury</h2>
        <p className="fashion-body">
          More than 200 of the most covetable luxury brands — from Chanel and Louis Vuitton to
          Cartier and Bvlgari — ready for you to discover at Fashion Avenue.
        </p>
        <div className="fashion-brands">
          {['CHANEL', 'LOUIS VUITTON', 'CARTIER', 'BVLGARI', 'TIFFANY & CO.', 'GUCCI'].map((b) => (
            <span key={b} className="fashion-brand-tag">{b}</span>
          ))}
        </div>
        <a href="#" className="fashion-cta">Explore More</a>
      </div>
    </section>
  );
}
