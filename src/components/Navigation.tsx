import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Scissors className={`w-8 h-8 ${isScrolled ? 'text-black' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
              Maison Coiffure
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Accueil', 'Services', 'Réservation', 'À propos', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Réservation' ? 'reservation' : item === 'À propos' ? 'a-propos' : item.toLowerCase()}`}
                className={`${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-gray-600 transition-colors duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item === 'Réservation' ? 'reservation' : item === 'À propos' ? 'a-propos' : item.toLowerCase());
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Accueil', 'Services', 'Réservation', 'À propos', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item === 'Réservation' ? 'reservation' : item === 'À propos' ? 'a-propos' : item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-800 hover:text-gray-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    const target = document.getElementById(item === 'Réservation' ? 'reservation' : item === 'À propos' ? 'a-propos' : item.toLowerCase());
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}