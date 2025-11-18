import React from 'react';
import { ArrowRight, Users, Target, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Reparar Para
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              No Repetir
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Acompañamos a personas privadas de libertad en procesos de 
            <span className="text-pink-300 font-semibold"> reparación</span> y 
            <span className="text-purple-300 font-semibold"> transformación</span> a través de talleres con sentido
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
              <span>Conoce Nuestros Programas</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Únete Como Voluntario
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <Users className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">900+</div>
              <div className="text-blue-200">Personas Impactadas</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">92%</div>
              <div className="text-blue-200">Transformación Personal</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <Heart className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">16</div>
              <div className="text-blue-200">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;