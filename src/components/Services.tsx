import { Crown, Palette, Scissors, SparkleIcon } from 'lucide-react'

const services = [
  {
    title: 'Coupe',
    description: 'Coupes personnalisées pour hommes, femmes et enfants',
    price: 'À partir de 35€',
    icon: Scissors,
    image:
      'https://images.unsplash.com/photo-1562259920-47afc3030ba2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Coloration',
    description: 'Colorations, mèches et balayages professionnels',
    price: 'À partir de 65€',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80',
  },
  {
    title: 'Soins',
    description: 'Traitements et soins capillaires spécifiques',
    price: 'À partir de 45€',
    icon: SparkleIcon,
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80',
  },
  {
    title: 'Événementiel',
    description: 'Coiffures pour mariages et événements spéciaux',
    price: 'À partir de 85€',
    icon: Crown,
    image:
      'https://images.unsplash.com/flagged/photo-1580820258381-20c91a156841?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUMzJTg5diVDMyVBOW5lbWVudGllbCUyMHBvdXIlMjBzYWxvbiUyMGRlJTIwY29pZmZ1cmV8ZW58MHx8MHx8fDA%3D',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-2">
                  <service.icon className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-200 mb-2">{service.description}</p>
                <p className="text-white font-semibold mb-4">{service.price}</p>
                <button
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold 
                  hover:bg-gray-100 transition-colors duration-300"
                >
                  Réserver maintenant
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
