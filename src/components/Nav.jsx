import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: "What's New", sub: [] },
  { label: 'Shop', sub: ['Fashion', 'Beauty', 'Electronics', 'Home', 'Toys'] },
  { label: 'Dine', sub: ['Restaurants', 'Cafes', 'Fine Dining', 'Food Court'] },
  { label: 'Entertain', sub: ['Cinema', 'Ice Rink', 'Aquarium', 'VR Zone', 'Kids Zone'] },
  { label: 'Plan Your Visit', sub: ['Opening Hours', 'Getting Here', 'Parking', 'Mall Map'] },
  { label: 'Services', sub: [] },
];

const subNav = ['Fashion Avenue', 'Fountain Views', 'Events', 'Offers', 'Directory'];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-top">
        <div className="nav-top-inner">
          <div className="nav-logo">
            <span className="nav-logo-text">GRAND MALL</span>
          </div>
          <div className="nav-actions">
            <button className="nav-icon-btn" aria-label="Search">
              <Search size={18} />
            </button>
            <button className="nav-cta-btn">Gift Card</button>
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <nav className="nav-main">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="nav-item"
              onMouseEnter={() => item.sub.length > 0 && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link">
                {item.label}
                {item.sub.length > 0 && <ChevronDown size={12} className="nav-chevron" />}
              </button>
              {item.sub.length > 0 && activeDropdown === item.label && (
                <div className="nav-dropdown">
                  {item.sub.map((s) => (
                    <a key={s} href="#" className="nav-dropdown-item">{s}</a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-sub">
        {subNav.map((s) => (
          <a key={s} href="#" className="nav-sub-link">{s}</a>
        ))}
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {navItems.map((item) => (
            <div key={item.label} className="nav-mobile-item">
              <span className="nav-mobile-label">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
