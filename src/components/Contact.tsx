import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/5"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/5"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/5"
                    rows={4}
                    placeholder="Votre message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-black/90 transition-colors duration-300"
                >
                  Envoyer
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <h3 className="font-semibold">Adresse</h3>
                </div>
                <p className="text-gray-600">123 Rue de la Coiffure<br />75001 Paris, France</p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Phone className="w-5 h-5 mr-2" />
                  <h3 className="font-semibold">Téléphone</h3>
                </div>
                <p className="text-gray-600">
                  <a href="tel:+33123456789" className="hover:text-black">
                    +33 1 23 45 67 89
                  </a>
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 mr-2" />
                  <h3 className="font-semibold">Horaires</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>Lundi - Vendredi: 9h - 19h</p>
                  <p>Samedi: 9h - 18h</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
              
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3414506!3d48.8615622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1647434591720!5m2!1sen!2sus"
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}