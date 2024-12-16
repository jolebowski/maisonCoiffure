import { Scissors } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center justify-center" id="accueil">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80"
          alt="Salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Scissors className="w-12 h-12 mr-2" />
          <h1 className="text-4xl md:text-6xl font-bold">Maison Coiffure</h1>
        </div>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Votre style, notre expertise. Prenez rendez-vous en ligne dès maintenant.
        </p>
        <button
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold 
          hover:bg-gray-100 transition-colors duration-300"
        >
          Réserver un rendez-vous
        </button>
      </div>
    </div>
  )
}
