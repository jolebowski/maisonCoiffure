import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    comment: 'Un service exceptionnel ! Ma nouvelle coupe est exactement ce que je voulais.',
    service: 'Coupe et Brushing',
    rating: 5
  },
  {
    name: 'Thomas Dubois',
    comment: 'Équipe professionnelle et attentionnée. Je recommande vivement !',
    service: 'Coloration',
    rating: 5
  },
  {
    name: 'Marie Laurent',
    comment: 'Ambiance chaleureuse et résultat impeccable. Je reviendrai !',
    service: 'Coiffure de Mariage',
    rating: 5
  }
];

export default function About() {
  return (
    <section className="py-20 bg-white" id="a-propos">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">À Propos</h2>
          
          <div className="mb-16">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80"
                alt="Notre salon"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-4">
                Depuis 10 ans, notre salon de coiffure s'engage à offrir des services exceptionnels 
                dans une ambiance chaleureuse et professionnelle. Notre équipe de coiffeurs passionnés 
                combine expertise technique et créativité pour révéler votre plus belle version.
              </p>
              <p className="text-lg text-gray-600">
                Nous utilisons exclusivement des produits de haute qualité et restons à la pointe 
                des dernières tendances pour vous garantir un résultat optimal.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8">Témoignages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}