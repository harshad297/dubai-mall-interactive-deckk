import { Instagram, Youtube, Twitter, Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">
          <div>
            <h3 className="footer-newsletter-title">Sign Up to Our Newsletter</h3>
            <p className="footer-newsletter-sub">Be the first to know about events, new openings and exclusive offers.</p>
          </div>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className="footer-newsletter-input" />
            <button type="submit" className="footer-newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">GRAND MALL</div>
          <p className="footer-tagline">The ultimate destination for shopping, dining, and entertainment.</p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="footer-social-link" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="footer-social-link" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="footer-social-link" aria-label="Youtube"><Youtube size={18} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Visitor Info</h4>
          <ul className="footer-col-list">
            {['Mall Map', 'Opening Hours', 'Getting Here', 'Parking', 'Gift Cards', 'The Lounge'].map((l) => (
              <li key={l}><a href="#" className="footer-col-link">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Explore</h4>
          <ul className="footer-col-list">
            {['Fashion Avenue', 'Fountain Views', 'Dining Guide', 'Entertainment', 'Events', 'Offers'].map((l) => (
              <li key={l}><a href="#" className="footer-col-link">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">About</h4>
          <ul className="footer-col-list">
            {['About Grand Mall', 'Careers', 'Media Centre', 'Leasing Enquiries', 'Privacy Policy', 'Terms'].map((l) => (
              <li key={l}><a href="#" className="footer-col-link">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <Phone size={14} />
              <span>800 GRAND MALL</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} />
              <a href="mailto:hello@grandmall.com" className="footer-col-link">hello@grandmall.com</a>
            </div>
          </div>
          <div className="footer-hours">
            <strong>Open Daily</strong>
            <span>10:00 AM – 11:00 PM</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Grand Mall. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a>
          <a href="#" className="footer-bottom-link">Terms &amp; Conditions</a>
          <a href="#" className="footer-bottom-link">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
