import React, { useState } from 'react';
import { Users, Brain, Briefcase, Home, Clock, CheckCircle } from 'lucide-react';
import ProgramModal from './ProgramModal';

const Programs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const handleOpenModal = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  const programs = [
    {
      icon: Brain,
      title: "Talleres con Sentido",
      description: "Espacios libres de violencia dentro de la cárcel que ofrecen a las mujeres en contextos de encierro la posibilidad de sentirse en libertad, desarrollando habilidades prácticas y herramientas para construir una vida significativa.",
      duration: "Anual",
      participants: "40+ mujeres",
      features: [
        "Taller de Costura",
        "Taller de Carpintería",
        "Taller de Huerta Restaurativa",
        "Desarrollo de habilidades laborales y sociales"
      ],
      color: "red"
    },
    {
      icon: Users,
      title: "Aspecto Social",
      description: "Fomento de la colaboración, trabajo en equipo e inclusión social, desarrollando habilidades interpersonales y fortaleciendo redes de contención.",
      duration: "Proceso continuo",
      participants: "Grupos diversos",
      features: [
        "Trabajo en equipo y colaboración",
        "Reducción de barreras de discriminación",
        "Desarrollo de habilidades de comunicación",
        "Mayor conciencia social y derechos"
      ],
      color: "yellow"
    },
    {
      icon: Briefcase,
      title: "Aspecto Laboral",
      description: "Desarrollo de habilidades profesionales, mejora de empleabilidad y fortalecimiento de liderazgo para facilitar la reintegración laboral una vez recuperada la libertad.",
      duration: "Formación continua",
      participants: "Todas las participantes",
      features: [
        "Desarrollo de competencias profesionales",
        "Mejora de la empleabilidad",
        "Creatividad e innovación",
        "Liderazgo y autogestión"
      ],
      color: "green"
    },
    {
      icon: Home,
      title: "Integración Comunitaria",
      description: "Articulación con instituciones públicas, privadas y educativas para generar oportunidades reales de inclusión social y laboral.",
      duration: "Permanente",
      participants: "Red de apoyo amplia",
      features: [
        "Alianzas con empresas y fundaciones",
        "Articulación con universidades",
        "Capacitaciones especializadas",
        "Certificación de asistencia"
      ],
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: {
        bg: "from-red-500 to-pink-500",
        text: "text-red-600",
        bgLight: "bg-red-50",
        border: "border-red-200"
      },
      yellow: {
        bg: "from-yellow-500 to-orange-500",
        text: "text-yellow-600",
        bgLight: "bg-yellow-50",
        border: "border-yellow-200"
      },
      green: {
        bg: "from-green-500 to-blue-500",
        text: "text-green-600",
        bgLight: "bg-green-50",
        border: "border-green-200"
      },
      blue: {
        bg: "from-blue-500 to-purple-500",
        text: "text-blue-600",
        bgLight: "bg-blue-50",
        border: "border-blue-200"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="programas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Programas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programas de justicia restaurativa y asistencia integral que generan espacios de encuentro, escucha y aprendizaje
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const colors = getColorClasses(program.color);
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Header */}
                <div className={`bg-gradient-to-r ${colors.bg} p-6`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{program.title}</h3>
                      <div className="flex items-center space-x-4 text-white text-opacity-80 text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{program.participants}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => handleOpenModal(program)}
                    className={`w-full mt-6 bg-gradient-to-r ${colors.bg} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Más Información
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Impacto de Nuestros Programas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">40+</div>
              <div className="text-gray-600 text-lg">Mujeres Participantes</div>
              <div className="text-gray-500 text-sm mt-2">En talleres 2024</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">3</div>
              <div className="text-gray-600 text-lg">Talleres Activos</div>
              <div className="text-gray-500 text-sm mt-2">Costura, Carpintería, Huerta</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4000+</div>
              <div className="text-gray-600 text-lg">Productos Creados</div>
              <div className="text-gray-500 text-sm mt-2">Para uso social y donaciones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 text-lg">Alianzas Institucionales</div>
              <div className="text-gray-500 text-sm mt-2">Empresas, fundaciones y universidades</div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Modal */}
      <ProgramModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        program={selectedProgram}
      />
    </section>
  );
};

export default Programs;