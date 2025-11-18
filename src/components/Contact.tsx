import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Users, DollarSign } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+54 9 11 6418-4459",
      subInfo: "Andrés López - Director"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contacto@justiciarestaurativaar.org",
      subInfo: "Respuesta en 24 horas"
    }
  ];

  const supportOptions = [
    {
      icon: Heart,
      title: "Voluntariado",
      description: "Únete a nuestro equipo de voluntarios y contribuye directamente a la transformación de vidas.",
      buttonText: "Ser Voluntario",
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Donaciones",
      description: "Tu aporte financiero nos permite continuar y expandir nuestros programas de justicia restaurativa.",
      buttonText: "Donar Ahora",
      color: "green"
    },
    {
      icon: Users,
      title: "Alianzas",
      description: "Colabora con nosotros como organización, empresa o institución para multiplicar nuestro impacto.",
      buttonText: "Crear Alianza",
      color: "orange"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Construyamos Juntos una Sociedad Más Justa
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Únete a nuestra misión de acompañar procesos de reparación y transformación
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {supportOptions.map((option, index) => {
            const colorClasses = {
              blue: "from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600",
              green: "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",
              orange: "from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            };

            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colorClasses[option.color as keyof typeof colorClasses]} rounded-2xl mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                <button className={`bg-gradient-to-r ${colorClasses[option.color as keyof typeof colorClasses]} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}>
                  {option.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto ${
                index === 0 ? 'bg-gradient-to-br from-red-500 to-pink-500' :
                index === 1 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                index === 2 ? 'bg-gradient-to-br from-green-500 to-blue-500' :
                'bg-gradient-to-br from-indigo-500 to-purple-500'
              }`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-700 font-medium mb-1 break-words">{item.info}</p>
                <p className="text-gray-500 text-sm">{item.subInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
