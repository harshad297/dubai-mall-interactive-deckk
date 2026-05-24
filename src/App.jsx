import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { AIVideo } from './components/AIVideo';
import { FashionAvenue } from './components/FashionAvenue';
import { Highlights } from './components/Highlights';
import { EventsOffers } from './components/EventsOffers';
import { WhatsNew } from './components/WhatsNew';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <AIVideo />
        <FashionAvenue />
        <Highlights />
        <EventsOffers />
        <WhatsNew />
      </main>
      <Footer />
    </div>
  );
}
