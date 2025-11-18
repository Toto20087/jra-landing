import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      role: "Participante del Programa",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Los talleres me ayudaron a entender el daño que causé y me dieron las herramientas para ser una mejor persona. Ahora tengo trabajo y una relación sana con mi familia.",
      program: "Talleres de Reflexión",
      rating: 5
    },
    {
      name: "Ana L.",
      role: "Familiar de Participante",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Ver la transformación de mi hijo ha sido increíble. Los profesionales de la fundación nos acompañaron en todo el proceso y nos ayudaron a sanar como familia.",
      program: "Reintegración Social",
      rating: 5
    },
    {
      name: "Miguel R.",
      role: "Participante del Programa",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Aprendí un oficio que me ha permitido mantener a mi familia dignamente. Pero más importante, aprendí a ser responsable de mis actos y a construir un futuro diferente.",
      program: "Capacitación Laboral",
      rating: 5
    }
  ];

  const impactStats = [
    {
      number: "95%",
      label: "Satisfacción de Participantes",
      description: "Califican nuestros programas como excelentes"
    },
    {
      number: "88%",
      label: "Recomendarían el Programa",
      description: "A otros en situación similar"
    },
    {
      number: "4.8/5",
      label: "Calificación Promedio",
      description: "En evaluaciones de impacto"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Voces de Transformación
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios de quienes han participado en nuestros talleres con sentido y procesos de reparación
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-center mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
                <div className="mt-2 inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                  {testimonial.program}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Lo Que Dicen Nuestros Participantes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl font-bold text-transparent bg-clip-text mb-4 ${
                  index === 0 ? 'bg-gradient-to-r from-red-600 to-pink-600' :
                  index === 1 ? 'bg-gradient-to-r from-yellow-600 to-green-600' :
                  'bg-gradient-to-r from-blue-600 to-purple-600'
                }`}>
                  {stat.number}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h4>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              ¿Quieres ser parte de estos procesos de transformación?
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Únete a Nuestra Misión
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
