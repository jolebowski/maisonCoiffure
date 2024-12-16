import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
];

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');

  return (
    <section className="py-20 bg-gray-50" id="reservation">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Réserver un rendez-vous</h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/5"
              >
                <option value="">Sélectionnez un service</option>
                <option value="coupe">Coupe</option>
                <option value="coloration">Coloration</option>
                <option value="soins">Soins</option>
                <option value="evenementiel">Événementiel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/5"
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Horaire disponible
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border ${
                    selectedTime === time
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
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
                Téléphone
              </label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/5"
                placeholder="Votre numéro"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes supplémentaires
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/5"
                rows={4}
                placeholder="Informations complémentaires..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-black/90 transition-colors duration-300"
            >
              Confirmer la réservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}