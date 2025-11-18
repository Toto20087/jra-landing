import React from 'react';
import { Users, Clock, CheckCircle, Target, Heart, Calendar, Mail, Phone } from 'lucide-react';
import Modal from './Modal';

interface Program {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  duration: string;
  participants: string;
  features: string[];
  color: string;
}

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: Program | null;
}

const ProgramModal: React.FC<ProgramModalProps> = ({ isOpen, onClose, program }) => {
  if (!program) return null;

  const getColorClasses = (color: string) => {
    const colors = {
      red: {
        bg: "from-red-500 to-pink-500",
        text: "text-red-600",
        bgLight: "bg-red-50",
        border: "border-red-200",
        accent: "bg-red-500"
      },
      yellow: {
        bg: "from-yellow-500 to-orange-500",
        text: "text-yellow-600",
        bgLight: "bg-yellow-50",
        border: "border-yellow-200",
        accent: "bg-yellow-500"
      },
      green: {
        bg: "from-green-500 to-blue-500",
        text: "text-green-600",
        bgLight: "bg-green-50",
        border: "border-green-200",
        accent: "bg-green-500"
      },
      blue: {
        bg: "from-blue-500 to-purple-500",
        text: "text-blue-600",
        bgLight: "bg-blue-50",
        border: "border-blue-200",
        accent: "bg-blue-500"
      }
    };
    return colors[color as keyof typeof colors];
  };

  const colors = getColorClasses(program.color);

  const getDetailedContent = (title: string) => {
    const details = {
      "Talleres con Sentido": {
        objectives: [
          "Generar espacios libres de violencia dentro de la cárcel",
          "Equipar con habilidades prácticas para construir una vida significativa",
          "Fortalecer destrezas personales para el desarrollo laboral",
          "Minimizar circunstancias de inequidad y falta de proyectos"
        ],
        methodology: [
          "Taller de Costura - martes, jueves, sábado (10:00 a 16:00 hs)",
          "Taller de Carpintería - lunes, martes, jueves, sábados (9:00 a 14:00 hs)",
          "Taller de Huerta Restaurativa - lunes a sábados (9:00 a 14:00 hs)",
          "Encuentros, conversatorios y experiencias vivenciales"
        ],
        benefits: [
          "Confección de productos para uso interno y donaciones",
          "Desarrollo de competencias laborales certificadas",
          "Comodato de máquinas una vez recuperada la libertad",
          "Participación en proyectos de impacto social"
        ]
      },
      "Aspecto Social": {
        objectives: [
          "Fomentar la colaboración y el trabajo en equipo",
          "Promover la inclusión y participación social activa",
          "Desarrollar habilidades interpersonales y redes sociales",
          "Generar mayor conciencia social sobre derechos y equidad"
        ],
        methodology: [
          "Actividades grupales reduciendo barreras de discriminación",
          "Espacios de intercambio de conocimientos y experiencias",
          "Encuentros sobre derechos, equidad de género e interculturalidad",
          "Prácticas alfabetizadoras y encuentros lúdicos"
        ],
        benefits: [
          "Mejora en habilidades de comunicación",
          "Reducción de situaciones de conflicto",
          "Ampliación de red de contención",
          "Fortalecimiento del sentido de pertenencia"
        ]
      },
      "Aspecto Laboral": {
        objectives: [
          "Desarrollar habilidades profesionales y nuevas competencias",
          "Mejorar la empleabilidad una vez recuperada la libertad",
          "Fomentar creatividad e innovación en experiencias integrales",
          "Propiciar liderazgo, autogestión y trabajo en equipo"
        ],
        methodology: [
          "Experiencias que fortalezcan y amplíen desafíos profesionales",
          "Oportunidades de experimentar de manera innovadora",
          "Capacitaciones con empresas aliadas (Mazalosa, Cimarrón)",
          "Certificación de asistencia y continuidad"
        ],
        benefits: [
          "Mejora de oportunidades laborales",
          "Mayor flexibilidad y adaptabilidad",
          "Desarrollo personal y aprendizaje continuo",
          "Fortalecimiento de motivación y compromiso"
        ]
      },
      "Integración Comunitaria": {
        objectives: [
          "Fortalecer lazos socio-comunitarios para sustento de talleres",
          "Articular con instituciones públicas, privadas y educativas",
          "Generar oportunidades reales de inclusión social y laboral",
          "Promover el concepto 'Reparar para no Repetir'"
        ],
        methodology: [
          "Alianzas con fundaciones (Avon, Kosiuko, Arredo, Casa Baldo)",
          "Articulación con universidades (Belgrano, UBA, Scalabrini Ortiz)",
          "Colaboración con Hillsong, Asociación Conciencia, FuegasArte",
          "Capacitaciones especializadas y proyectos educativos"
        ],
        benefits: [
          "Acceso a campañas de salud visual y preventiva",
          "Participación en eventos sociales (8M, 25N, 3J)",
          "Certificación en herramientas de primeros auxilios",
          "Red amplia de apoyo institucional"
        ]
      }
    };
    return details[title as keyof typeof details] || details["Talleres con Sentido"];
  };

  const detailedContent = getDetailedContent(program.title);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Header */}
      <div className={`bg-gradient-to-r ${colors.bg} p-8 text-white`}>
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl">
            <program.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">{program.title}</h2>
            <div className="flex items-center space-x-6 text-white text-opacity-90">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="text-lg">{program.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="text-lg">{program.participants}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Description */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Descripción del Programa</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{program.description}</p>
        </div>

        {/* Grid Layout for Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Objectives */}
          <div className={`${colors.bgLight} ${colors.border} border rounded-xl p-6`}>
            <div className="flex items-center space-x-3 mb-4">
              <Target className={`w-6 h-6 ${colors.text}`} />
              <h4 className="text-xl font-bold text-gray-900">Objetivos</h4>
            </div>
            <ul className="space-y-3">
              {detailedContent.objectives.map((objective, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div className={`${colors.bgLight} ${colors.border} border rounded-xl p-6`}>
            <div className="flex items-center space-x-3 mb-4">
              <Heart className={`w-6 h-6 ${colors.text}`} />
              <h4 className="text-xl font-bold text-gray-900">Metodología</h4>
            </div>
            <ul className="space-y-3">
              {detailedContent.methodology.map((method, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-700">{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className={`w-6 h-6 ${colors.text}`} />
            <h4 className="text-2xl font-bold text-gray-900">Beneficios y Resultados</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detailedContent.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Características del Programa</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className={`bg-gradient-to-r ${colors.bg} rounded-xl p-6 text-white`}>
          <h4 className="text-xl font-bold mb-4">¿Interesado en este programa?</h4>
          <p className="mb-4 text-white text-opacity-90">
            Contáctanos para más información o para colaborar con nuestros talleres.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>contacto@justiciarestaurativaar.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+54 9 11 6418-4459</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProgramModal;