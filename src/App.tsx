import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Booking />
      <About />
      <Contact />
    </div>
  );
}

export default App;