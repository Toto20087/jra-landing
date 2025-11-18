import React from 'react';
import { Eye, Target, Compass } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mision" className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Propósito, Misión y Visión
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiados por principios sólidos y una visión clara del futuro que queremos construir
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Propósito */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl mb-6 mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Propósito</h3>
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Contribuir a la construcción de una sociedad más justa, humana y pacífica, 
              acompañando a las personas privadas de libertad en procesos de reparación y transformación 
              que les permitan reconstruir su proyecto de vida con dignidad.
            </p>
            <div className="bg-red-50 rounded-xl p-4">
              <h4 className="font-semibold text-red-800 mb-2">Enfoque Principal:</h4>
              <p className="text-red-700 text-sm">
                Alejados de la violencia y el delito, construyendo vidas dignas.
              </p>
            </div>
          </div>

          {/* Misión */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-green-500 rounded-2xl mb-6 mx-auto">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Misión</h3>
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Diseñar y llevar adelante programas de justicia restaurativa y asistencia integral 
              para personas privadas de libertad, generando espacios de encuentro, escucha y aprendizaje 
              con talleres libres de violencia.
            </p>
            <div className="bg-yellow-50 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Metodología:</h4>
              <p className="text-yellow-700 text-sm">
                Talleres con sentido que fortalecen la empatía, responsabilidad y reconciliación.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 mx-auto">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visión</h3>
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Ser un referente en justicia restaurativa en Argentina y América Latina, 
              reconocido por transformar vidas y comunidades a través de procesos de reparación, 
              reconciliación y reinserción social.
            </p>
            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Aspiración:</h4>
              <p className="text-blue-700 text-sm">
                Un futuro donde las personas puedan vivir con dignidad, construyendo entornos libres de violencia.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Nuestro Compromiso</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Creemos firmemente en la capacidad de transformación de cada persona. 
            A través de la Justicia Restaurativa, acompañamos procesos de reparación que 
            permiten reconstruir proyectos de vida dignos, alejados de la violencia y el delito.
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
            Únete a Nuestra Misión
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;